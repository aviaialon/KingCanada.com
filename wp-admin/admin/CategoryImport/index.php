<?php
    require_once '../../Core/Application.php';
    require_once 'Classes/PHPExcel/IOFactory.php';
    $Application = \Core\Application::getInstance(array(
        $_SERVER['DOCUMENT_ROOT'] . '/catalog/admin/mvc/config/config.ini'
    ));

$product = \Core\Hybernate\Products\Product::getInstance(1019);
\Core\Debug\Dump::getInstance($product->get(), true);
$categoryTree = \Core\Hybernate\Products\Product_Category::getCategoryTree();
\Core\Debug\Dump::getInstance($categoryTree, true);


    $assetsBase = $Application->getConfigs()->get('Application.core.server_root') . 'assets/themes/admin';
    $errors     = array();
    $message    = array();
    if (empty($_POST) === false) {
		$database = $Application->getDatabase();
		$database->execute('truncate table product_category');
		$database->execute('truncate table product_category_parent');
		
        $objFileUploader = \Core\Io\File\Upload::getInstance();
        $objFileUploader->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Form);
        $objFileUploader->setAllowedExtensions(array('xlsx', 'xls', 'csv'));
        $objFileUploader->setUploadDirectory(realpath('./') . DIRECTORY_SEPARATOR . 'tmp');
        $objFileUploader->setUploadWebPath('./tmp');
        $objFileUploader->setUploadFormInputName('categoryFile');
        $objFileUploader->setSizeLimit(9820); // in MB
        $objFileUploader->processImageUpload();
        $errors     = $objFileUploader->getErrors();
        $sourceFile = $objFileUploader->getUploadedFilePath();
		$categoryCount = 0;

        try {
            $cacheMethod       = PHPExcel_CachedObjectStorageFactory::cache_to_phpTemp;
            $cacheSettings     = array('memoryCacheSize' => '20MB');
             //set php excel settings
            PHPExcel_Settings::setCacheStorageMethod($cacheMethod, $cacheSettings);
            $objPHPExcel   = \PHPExcel_IOFactory::load($sourceFile);
            $objWorksheet  = $objPHPExcel->setActiveSheetIndex(0);
            foreach ($objPHPExcel->getWorksheetIterator() as $worksheet) {
                $worksheetTitle      = $worksheet->getTitle();
                $highestRow          = $worksheet->getHighestRow(); // e.g. 10
                $highestColumn       = $worksheet->getHighestColumn(); // e.g 'F'
                $highestColumnIndex  = PHPExcel_Cell::columnIndexFromString($highestColumn);
                $nrColumns              = ord($highestColumn) - 64;
                $arrFinalCategories  = $worksheet->toArray();
                $processedCategories = array();

                // 1. Create the main categories
                $mainCategories = @array_flip(array_shift($arrFinalCategories));
                foreach ($mainCategories as $categoryLabel => $index) {
                    $processedCategories[$index] = array('main' => null, 'children' => null);
                    $category    = \Core\Hybernate\Products\Product_Category::getInstance();
                    $description = explode('|', $categoryLabel);
                    $category->setIsParent(1);
                    $category->setName_En(@array_shift($description));
                    $category->setName_Fr(@array_shift($description));
                    $category->save();

                    $processedCategories[$index]['main'] = $category;
					$categoryCount++;
                }
				
                // 2. Create the sub categories
                $totalMainCats = count($processedCategories);
                foreach ($arrFinalCategories as $index => $_category) {
                    // First index value is the category name
                    $categoryLabel = $_category[0];
                    $category      = \Core\Hybernate\Products\Product_Category::getInstance();
                    $description   = explode('|', $categoryLabel);

                    if (empty($description[0]) === true) {
                        continue;
                    }

                    $category->setIsParent(0);
                    $category->setName_En(@array_shift($description));
                    $category->setName_Fr(@array_shift($description));
                    $category->save();
					
					$categoryCount++;
              
					foreach ($processedCategories as $index => $mainCategory) {
						if (empty($_category[$index]) === false) {
                            $categoryParent = \Core\Hybernate\Products\Product_Category_Parent::getInstance();
                            $categoryParent->setCategoryId((int) $category->getId());
                            $categoryParent->setParentCategoryId((int) $processedCategories[$index]['main'] ->getId());
                            $categoryParent->save();
                        }
					}
                }
            }
			
			$message[] = ($categoryCount) . ' Categories were imported successfully.';

        } catch(Exception $e) {
            $errors[] = 'Error Loading Excel File: ' . $e->getMessage();
        }
    }
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link href="<?php echo $assetsBase; ?>/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="<?php echo $assetsBase; ?>/css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<script type="text/javascript" src="<?php echo $assetsBase; ?>/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo $assetsBase; ?>/js/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" src="<?php echo $assetsBase; ?>/js/plupload-2.1.2/js/jquery.plupload.queue/jquery.plupload.queue.min.js"></script>
<script type="text/javascript" src="<?php echo $assetsBase; ?>/js/uniform.js"></script>
<script type="text/javascript">
    $(document).ready(function(e) {
        $(".inputFile").uniform({});
    });
</script>
</head>

<body>
<div class="product_container">
<?php if (empty($errors) === false) { ?>
<div class="callout callout-danger fade in">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <h5><strong>ERROR:</strong></h5>
    <p><?php echo(implode('<br /> - ', $errors)); ?></p>
</div>
<?php } ?>
<?php if (empty($message) === false) { ?>
<div class="callout callout-info fade in">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <h5><strong>INFO:</strong></h5>
    <p><?php echo(implode('<br /> - ', $message)); ?></p>
</div>
<?php } ?>
<h1>Excel Category Importer:</h1>
<div class="clear"></div>
<form action="./" method="post" enctype="multipart/form-data">
    <input type="hidden" name="upload" value="true" />
    <div class="form-group">
        <div class="row">
            <div class="col-md-3">
                <label>Excel Category File:</label>
                <input type="file" name="categoryFile" id="categoryFile" class="inputFile" />
                <span class="help-block">Accepted formats: xlxs, xls. Max file size 2Mb</span>
                <div class="clear"></div>

                <div class="form-actions text-right">
                    <input type="reset" value="Cancel" class="btn btn-danger">
                    <input type="submit" value="Submit Excel File" class="btn btn-primary" />
                </div>
            </div>

        </div>
    </div>
</form>
</div>
</body>
</html>