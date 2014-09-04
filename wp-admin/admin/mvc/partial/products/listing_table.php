<?php $products = $this->getPartialdata('products'); ?>
<input type="hidden" name="minDate" id="reportMinDate" value="" />
<input type="hidden" name="maxDate" id="reportMaxDate" value="" />
<div class="navbar navbar-inverse" role="navigation" style="position: relative; z-index: 100;">
  <ul class="nav navbar-nav navbar-right collapse" id="navbar-menu-right">
    <li class="dropdown"> 
      <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-paragraph-justify2"></i> Bulk Actions <b class="caret"></b></a>
      <ul class="dropdown-menu icons-right dropdown-menu-right">
        <li><a href="#" data-action="enable" class="__bulk_action"><i class="icon-checkmark4"></i> Enable Selected</a></li>
        <li><a href="#" data-action="disable" class="__bulk_action"><i class="icon-angry"></i> Disable Selected</a></li>
      </ul>
    </li>
  </ul>
</div>
<div class="clear"></div>

<div class="tabbable">
    <ul class="nav nav-tabs">
        <li class="active"><a href="#productListingTable" data-toggle="tab"><i class="icon-paragraph-left2"></i> Product Listing</a></li>
    </ul>
    <div class="tab-content with-padding">
    	<div class="tab-pane body fade in active" id="productListingTable">
            <div class="block-inner">
            <div class="clear"></div>
            <!--- CONTENT --->
            <div class="panel panel-default" id="reportProducts">
              <div class="panel-heading">
                <h2 class="panel-title main-heading">Product Catalog <span class="label label-danger">
                    <?php echo(count($products)); ?> Product<?php echo(count($products) > 1 ? 's' : ''); ?></span></h2>
              </div>
              <div class="datatable-add-row">
                <table class="table table-bordered table-striped" id="tblReportProducts">
                  <thead>
                    <tr>
                      <th class="sorting_disabled text-center"><input type="checkbox" id="bulk_all" value="" /></th>
                      <th class="image-column">Image</th>
                      <th>Product Key</th>
                      <th>Title</th>
                      <th>Desc (EN)</th>
                      <th>
                        <div id="reportrange" class="range">
                            <div class="visible-xs footer-element-toggle">
                                <a class="btn btn-primary btn-icon"><i class="icon-calendar"></i></a>
                            </div>
                            <div class="date-range"></div>
                        </div>
                      </th>
                      <th>Views</th>
                      <th>Status</th>
                      <th class="team-links">Links</th>
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
                      <td class="text-semibold p_productKey text-center" style="max-width: 150px"><?php echo $product['productKey']; ?></td>
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
                            <!--<button class="btn btn-icon btn-default"><i class="icon-spinner3"></i></button>-->
                            <a class="btn btn-icon btn-default" title="Edit This Product" href="<?php echo $this->route('manage', 'manage_product', array('id' => $product['id'])); ?>">
                                <i class="icon-pencil"></i></a>
                            <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="height: 38px;"><span class="caret caret-split"></span></button>
                            <ul class="dropdown-menu icons-right leftmenu">
                                <li><a class="btnEditProduct" href="<?php echo $this->route('manage', 'product', array('id' => $product['id'])); ?>">
                                <i class="icon-share2"></i> Quick Edit</a></li>
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
              </div>
            </div>
            <!--- CONTENT EOF --->
            <div class="clear"></div>
            </div>         
        </div>
    </div>
</div>





<div id="confirm_deleteImg_modal" class="modal fade" tabindex="-1" role="dialog" style="z-index:1500">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header info">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Please Confirm.</h4>
            </div>
            <div class="modal-body with-padding">
                <div class="confImg"></div>
                <div class="confTxt">
                    <h5 class="text-error">Confirm Delete!</h5>
                    <p>You are about to delete this image from the server. Please confirm as this is not un-doable.</p>
                </div>                
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary btn-danger confirmDeleteImageBtn">Confirm</button>
            </div>
        </div>
    </div>
</div>

<div id="confirm_deleteManual_modal" class="modal fade" tabindex="-1" role="dialog" style="z-index:1500">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header info">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Please Confirm.</h4>
            </div>
            <div class="modal-body with-padding">
                <div class="confTxt">
                    <h5 class="text-error">Confirm Delete!</h5>
                    <p>You are about to delete this manual from the server. Please confirm as this is not un-doable.</p>
                </div>                
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary btn-danger confirmDeleteManualBtn">Confirm</button>
            </div>
        </div>
    </div>
</div>

<div id="changes_not_applied" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="alert alert-block alert-warning fade in">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h6><i class="icon-command"></i> Oh snap! You have unsaved changes!</h6>
                <hr>
                <p>It seems that you have made changes and forgot to save them.</p><br>
                <div class="text-left">
                    <a class="btn btn-danger" id="takeMeBack" href="#"><i class="icon-link"></i> Take me back!</a> 
                    <a class="btn btn-info" id="ignoreTackmeBack" href="#"><i class="icon-link2"></i> Chill out, i know what im doing</a>
                </div>
            </div>	
        </div>
    </div>
</div>

<div id="edProdModalDialog" class="modal fade" tabindex="-1" role="dialog" style="text-align:left">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            
        </div>
    </div>
</div>

<div class="modal fade" id="addNewManual" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-body">

            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>