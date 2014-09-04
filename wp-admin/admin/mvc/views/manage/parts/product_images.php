<div class="tab-pane body fade in <?php echo($panel === 'images' ? 'active' : ''); ?>" id="tabModal2">
    <!-- Texts -->
    <div class="panel panel-primary">
        <div class="panel-heading"><h6 class="panel-title"><i class="icon-upload3"></i> Upload Product Images</h6></div>
        <div class="multiple-uploader">Your browser doesn't support native upload.</div>
    </div>
    <!-- Texts -->

    <!-- Uploaded images --->
    <div class="productImagesContainer">
        <div class="row uploadedProductImages">
            <?php if (false === empty($images)) { ?>
                <?php foreach ($images as $index => $productImage) { ?>
                <?php if ($productImage->getId() === 0) continue; ?>
                <div class="col-lg-3 col-md-6 col-sm-6 isotope-item productItemImage">
                    <div class="block">
                        <div class="<?php echo $productImage->getId(); ?> thumbnail thumbnail-boxed <?php echo (((int) $productImage->getMain()) === 1) ? 'main' : '' ?>">
                            <div class="thumb">
                                <img alt="" src="<?php echo $productImage->getImagePath(1); ?>" class="upProdImg">
                            </div>
                            <div class="caption">
                                <a href="#" title="" class="caption-title"><?php echo date('Y-m-d H:i:s', strtotime($productImage->getCreationTimeDate())); ?></a>
                            </div>
                            <div class="panel-footer">
                                <div class="pull-left">
                                    <span><i class="icon-image2"></i> <?php echo $productImage->getImageExtension(); ?></span>
                                </div>
                                <div class="pull-right">
                                    <ul class="footer-icons-group">
                                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Edit this image"><i class="icon-pencil"></i></a></li>
                                        <li><a href="#" class="deleteImg" data-toggle="tooltip" data-placement="top" title="Delete this image"
                                            data-image-id="<?php echo($productImage->getId()); ?>" data-image-src="<?php echo $productImage->getImagePath(1); ?>">
                                            <i class="icon-remove3"></i></a></li>
                                        <li><a href="#" class="setMainImg" data-toggle="tooltip" data-placement="top" title="Set this image as the main image"
                                            data-image-id="<?php echo($productImage->getId()); ?>">
                                            <i class="icon-image4"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php } ?>
            <?php } ?>
        </div>
    </div>
</div>