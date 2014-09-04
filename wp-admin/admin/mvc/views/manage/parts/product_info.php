<div class="tab-pane fade in <?php echo($panel === 'info' ? 'active' : ''); ?>" id="tabModal1">
    <!-- /general information -->
        <div class="panel panel-default">
            <div class="panel-heading"><h6 class="panel-title"><i class="icon-books"></i> Product System Information</h6></div>
        <div class="panel-body">


            <div class="block-inner">
                <div class="block-inner">
                    <h6 class="heading-hr">
                        <i class="icon-user"></i> Product information <small class="display-block">All fields are manditory</small>
                    </h6>
                </div>

                <div class="form-group no-margin">
                    <div class="row">
                        <div class="col-md-6">
                            <label>Product Key: </label>
                            <input type="text" name="productKey" class="form-control required " placeholder="Enter product Key (Ex: KM-864657)"
                                value="<?php echo($product->getProductKey()); ?>" />
                        </div>
                        <div class="col-md-3">
                            <label>Product ID: </label>
                            <input type="text" name="_productId" class="form-control productId" readonly value="<?php echo($product->getId()); ?>" />
                        </div>

                        <div class="col-md-3">
                            <label>&nbsp;</label><br>
                            <label class="checkbox-inline">
                                <input type="checkbox" name="activeStatus" value="1" class="switch" data-on-label="Enabled" data-off-label="Disabled"
                                    <?php echo(true === ((bool) $product->getActiveStatus()) ? 'checked="checked"' : ''); ?>>
                            </label>
                        </div>
                    </div>

                    <br />
                </div>

				


                <?php /*?><div class="form-group no-margin">
                    <div class="row">
                        <div class="col-md-6 bright_ccc">
                            <br>
                            <span class="label label-danger">ENGLISH DESCRIPTION</span><br><br>

                            <label>Product Title:</label>
                            <input type="text" class="form-control required " name="title_en" placeholder="Title (English)"
                                value="<?php echo($product->getDescription('en')->getTitle()); ?>" /><br />
                        </div>

                        <div class="col-md-6">
                            <br>
                            <span class="label label-danger">FRENCH DESCRIPTION</span><br><br>

                            <label>Product Title:</label>
                            <input type="text" class="form-control required " name="title_fr" placeholder="Title (French)"
                                value="<?php echo($product->getDescription('fr')->getTitle()); ?>" /><br />
                        </div>
                    </div>
                </div>

                <div class="form-group no-margin">
                    <div class="row">
                        <div class="col-md-6 bright_ccc">
                            <textarea class="editor form-control required " name="desc_en"
                                placeholder="Enter description (English)"><?php echo($product->getDescription('en')->getDescription()); ?></textarea>
                        </div>

                        <div class="col-md-6">
                            <textarea class="editor form-control required" name="desc_fr"
                                placeholder="Enter description (French)"><?php echo($product->getDescription('fr')->getDescription()); ?></textarea>
                        </div>
                    </div>
                </div><?php */?>
            </div>
            <!-- /general information -->

        </div>
    </div>
    	
        
        <!-- // Product description -->
    	<div class="panel panel-default">
            <div class="panel-heading"><h6 class="panel-title"><i class="icon-books"></i> Product Description</h6></div>
            <div class="panel-body">
                <div class="tabbable">
                    <ul class="nav nav-pills nav-justified">
                        <li class="active"><a href="#panel-pill1" data-toggle="tab"><i class="icon-stack"></i> English Description</a></li>
                        <li><a href="#panel-pill2" data-toggle="tab"><i class="icon-stack"></i> French Description</a></li>
                    </ul>
        
                    <div class="tab-content pill-content">
                        <div class="tab-pane fade in active" id="panel-pill1">
                            
                            
                            <div class="form-group no-margin">
                                <div class="row">
                                    <div class="col-md-12 bright_ccc">
                                        <span class="label label-danger">ENGLISH DESCRIPTION</span><br><br>
            
                                        <label>Product Title:</label>
                                        <input type="text" class="form-control required " name="title_en" placeholder="Title (English)"
                                            value="<?php echo($product->getDescription('en')->getTitle()); ?>" /><br />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <br>
            
                                        <label>Product Description:</label>
                                        <textarea class="editor form-control required " name="desc_en"
                                            placeholder="Enter description (English)"><?php echo($product->getDescription('en')->getDescription()); ?></textarea>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
        
                        <div class="tab-pane fade" id="panel-pill2">
                            <div class="form-group no-margin">
                                <div class="row">
                                        <div class="col-md-12 bright_ccc">
                                            <span class="label label-danger">FRENCH DESCRIPTION</span><br><br>
        
                                            <label>Product Title:</label>
                                            <input type="text" class="form-control required " name="title_fr" placeholder="Title (French)"
                                                value="<?php echo($product->getDescription('fr')->getTitle()); ?>" /><br />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <br>
                                           <label>Product Description:</label>
                                           <textarea class="editor form-control required" name="desc_fr"
                                                 placeholder="Enter description (French)"><?php echo($product->getDescription('fr')->getDescription()); ?></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    <!-- /general information -->
</div>
