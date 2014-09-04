<?php
    $product    = $this->getViewData('product');
    $images     = $product->getImages();
    $modalTitle = $this->getViewData('title');
    $panel      = (false === $this->getRequestParam('panel')) ? 'info' : $this->getRequestParam('panel');
?>
<div class="modal-backdrop fade hide editProdBackdrop"></div>
<div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h4 class="modal-title"><i class="icon-quill2"></i> <?php echo $modalTitle; ?></h4>
</div>

<form id="mainProductForm" class="validate">
<div class="modal-body with-padding with-padding-b0 productEditor">


    <div class="tabbable">
        <ul class="nav nav-tabs">
            <li <?php echo($panel === 'info' ? 'class="active"' : ''); ?>><a href="#tabModal1" data-toggle="tab"><i class="icon-paragraph-left2"></i> Product Info</a></li>
            <li <?php echo($panel === 'images' ? 'class="active"' : ''); ?>><a href="#tabModal2" data-toggle="tab"><i class="icon-images"></i> Product Images</a></li>
            <li <?php echo($panel === 'images' ? 'class="active"' : ''); ?>><a href="#tabModal3" data-toggle="tab"><i class="icon-file4"></i> Product Manuals</a></li>
            <li <?php echo($panel === 'attributes' ? 'class="active"' : ''); ?>><a href="#tabModal5" data-toggle="tab"><i class="icon-insert-template"></i> Product Attributes</a></li>
            <li <?php echo($panel === 'categories' ? 'class="active"' : ''); ?>><a href="#tabModal4" data-toggle="tab"><i class="icon-numbered-list"></i> Product Categories</a></li>
        </ul>
        <div class="tab-content">
            <input type="hidden" name="productId" value="<?php echo($product->getId()); ?>" class="productId" />
            <?php require_once (dirname(__FILE__) . '/parts/product_info.php'); ?>
            <?php require_once (dirname(__FILE__) . '/parts/product_images.php'); ?>
            <?php require_once (dirname(__FILE__) . '/parts/product_manuals.php'); ?>
            <?php require_once (dirname(__FILE__) . '/parts/product_attributes.php'); ?>
            <?php require_once (dirname(__FILE__) . '/parts/product_categories.php'); ?>
        </div>
    </div>
    <!-- edit form eof -->
</div>
</form>

<!-- uploaded image template -->
<div class="hide" id="uploadedImageTemplate">
    <div class="col-lg-3 col-md-6 col-sm-6 isotope-item tmpImgContainer tmp_hidden" style="display:none">
        <input type="hidden" name="attachments[]" value="%IMG_FILE%" />
        <div class="block">
            <div class="thumbnail new thumbnail-boxed">
                <div class="thumb">
                    %IMG%
                </div>
                <div class="caption">
                    <a href="#" title="" class="caption-title">%FILENAME%</a>
                    <div class="thumb-options pull-right">
                        <span>
                            <a href="#" class="btn btn-icon btn-danger tmpImgRemove"><i class="icon-remove"></i></a>
                        </span>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal-footer">
    <button class="btn btn-info pull-left" data-dismiss="modal">Preview</button>
    <button class="btn btn-warning" data-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary productSave">Save</button>
</div>


<script type="text/javascript">
    SYSTEM.APPLICATION.STATIC_INSTANCE.configure(SYSTEM.APPLICATION.MAIN.CONFIGURATION.PRODUCT_SAVE_URL, '<?php echo $this->getViewData('formSaveUrl'); ?>');
    SYSTEM.APPLICATION.STATIC_INSTANCE.configure(SYSTEM.APPLICATION.MAIN.CONFIGURATION.DISTINCT_ATTRIBUTES, <?php echo json_encode($this->getViewData('distinctAttributes')); ?>);
    SYSTEM.APPLICATION.STATIC_INSTANCE.configure(SYSTEM.APPLICATION.MAIN.CONFIGURATION.CATEGORY_TREE, <?php echo json_encode($this->getViewData('categoryTree')); ?>);
    SYSTEM.APPLICATION.STATIC_INSTANCE.startModule(SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR);
</script>