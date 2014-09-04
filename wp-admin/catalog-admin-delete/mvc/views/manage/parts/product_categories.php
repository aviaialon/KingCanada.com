<?php $categoryTree = $this->getViewData('categoryTree');  ?>
<div class="tab-pane body fade in <?php echo($panel === 'attributes' ? 'active' : ''); ?>" id="tabModal4">
    <div class="clear"></div>
    <div class="categorySelection">

        <?php
            // Filter to distinct categories
            $distinctCategories = array();
            $subCatsDisabled    = array();
            foreach ($product->getGroupedCategories() as $categoryGroup) {
                $distinctCategories[$categoryGroup['id']] = $categoryGroup;
                foreach ($categoryGroup['children'] as $categoryChild) {
                    if (true === array_key_exists($categoryChild['id'], $subCatsDisabled)) {
                        unset ($distinctCategories[$categoryGroup['id']]['children'][$categoryChild['id']]);
                    } else {
                        $subCatsDisabled[$categoryChild['id']] = true;
                    }
                }
            }

            foreach ($distinctCategories as $categoryGroup) {
                if (empty($categoryGroup['children'])) {
                    unset ($distinctCategories[$categoryGroup['id']]);
                }
            }

            // Build category selectors
            foreach ($distinctCategories as $categoryGroup) {
                $subCategories = '';
                foreach ($categoryTree[$categoryGroup['id']]['children'] as $categoryChild) {
                    $subCategories .= '<option value="' . $categoryChild['id'] . '"' .
                                     (true === array_key_exists($categoryChild['id'], $categoryGroup['children']) ? 'selected' : '') .
                                     (true === $disabled ? 'disabled' : '') . '>' .
                                     $categoryChild['name_en'] . '</option>';
            }
        ?>
            <div class="col-sm-12 categorySet">
                <div class="row">
                    <div class="col-sm-4 mainCategory">
                        <select class="mainCategorySelector" name="" tabindex="1">
                            <option></option>
                            <?php foreach ($this->getViewData('parentCategories') as $parentCategory) { ?>
                                <option value="<?php echo $parentCategory['id']; ?>"
                                    <?php echo ($parentCategory['id'] === $categoryGroup['id'] ? 'selected' : ''); ?>><?php echo $parentCategory['name_en']; ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="col-sm-2 categorySeparator text-center">
                        <i class="icon-arrow-right2"></i>
                    </div>
                    <div class="col-sm-6 subCategory">
                        <select multiple="multiple" class="multi-select-subcat" name="categories[]">
                            <?php echo $subCategories; ?>
                        </select>
                    </div>
                </div>
                <div class="clear"></div>
                <hr />
                <div class="clear"></div>
            </div>
        <?php
                //}
            }
        ?>
    </div>
    <div class="clear"></div>
    <hr />
    <div class="clear"></div>

    <div class="col-sm-12">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-sm btn-info pull-right addCategory" type="button"><i class="icon-plus-circle"></i>Assign a new category</button>
            </div>
        </div>
    </div>


    <!--- --->
    <?php /* ?>
    <table class="table table-bordered table-striped" id="tblReportProducts">
      <thead>
        <tr>
            <th class="sorting_disabled text-center"><input type="checkbox" id="bulk_all" value="" /></th>
            <?php foreach ($this->getViewData('parentCategories') as $parentCategory) { ?>
                <th class="image-column"><?php echo $parentCategory['name_en']; ?></th>
            <?php } ?>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th class="noFilter"></th>
          <th class="noFilter"></th>
          <th>Product Key</th>
          <th>Title</th>
          <th>Desc (EN)</th>
          <th class=""></th>
          <th class="noFilter"></th>
          <th class="noFilter">
                <select data-placeholder="Select a Status" class="select-liquid filterActiveStatus select" tabindex="2">
                <option value="">Any Status</option>
                <option value="Active">Active</option>
                <option value="Disabled">Disabled</option>
            </select>
          </th>
          <th class="noFilter"></th>
        </tr>
      </tfoot>
      <tbody>
          <?php foreach ($products as $index => $product) { ?>
        <?php
            $image = $product['mainImage'];
            if (empty($image) === true && false === empty($product['images'])) {
                $images = explode('|', $product['images']);
                if (false === empty($images)) {
                    $image = $images[0];
                }
            }

            if (empty($image) === false)
                $image = (\Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath(2) . '/' . $image);
        ?>
        <tr id="p_<?php echo $product['id']; ?>">
          <td class="text-center">
              <input type="checkbox" name="bulk[]" class="bulk_chkbx" value="<?php echo $product['id']; ?>" />
          </td>
          <td class="text-center p_image"><img src="<?php echo($image); ?>" alt="" class="img-media"></td>
          <td class="text-semibold p_productKey" style="max-width: 150px"><?php echo $product['productKey']; ?></td>
          <td class="muted p_title" style="max-width: 220px"><?php echo $product['title']; ?></td>
          <td class="muted p_desc" style="max-width: 600px"><div class="productDesc"><?php echo substr($product['description'], 0, 150); ?>...</div></td>
          <td class="muted text-center p_date" style="min-width: 180px"><?php echo date('Y-m-d', strtotime($product['dateCreated'])); ?></td>
          <td class="muted text-center" width="60">
               <strong class="text-danger p_views"><?php echo $product['views']; ?></strong>
           </td>
           <td class="muted text-center p_status">
               <span class="label label-<?php echo ((int) $product['activeStatus'] === 1 ? 'success' : 'danger'); ?>">
                 <?php echo ((int) $product['activeStatus'] === 1 ? 'Active' : 'Disabled'); ?>
             </span>
           </td>

          <td class="text-center">
            <div class="btn-group">
              <button type="button" class="btn btn-icon btn-sm btn-success dropdown-toggle" data-toggle="dropdown"><i class="icon-cog4"></i></button>
              <ul class="dropdown-menu icons-right dropdown-menu-right">
                <li><a class="btnEditProduct" href="<?php echo $this->route('manage', 'product', array('id' => $product['id'])); ?>">
                    <i class="icon-share2"></i> Edit Product</a></li>
                <li><a class="btnEditProduct" href="<?php echo $this->route('manage', 'product', array('id' => $product['id'], 'panel' => 'images')); ?>">
                    <i class="icon-stack"></i> Edit Images</a></li>
                <li><a href="#"><i class="icon-remove3"></i> Delete</a></li>
                <li><a href="#"><i class="icon-eye"></i> View Product</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <?php } ?>
      </tbody>
    </table>
    <!--- --->
    <?php */ ?>
    <!-- /general information -->
    <div class="clear"></div>
</div>


<div class="hide categoryTemplate">
    <div class="col-sm-12 categorySet">
        <div class="row">
            <div class="col-sm-4 mainCategory">
                <select class="mainCategorySelector" name="" tabindex="1">
                    <option></option>
                    <?php foreach ($this->getViewData('parentCategories') as $parentCategory) { ?>
                        <option value="<?php echo $parentCategory['id']; ?>"><?php echo $parentCategory['name_en']; ?></option>
                    <?php } ?>
                </select>
            </div>
            <div class="col-sm-2 categorySeparator text-center hide">
                <i class="icon-arrow-right2"></i>
            </div>
            <div class="col-sm-6 subCategory"></div>
        </div>
        <div class="clear"></div>
        <hr />
        <div class="clear"></div>
    </div>
</div>