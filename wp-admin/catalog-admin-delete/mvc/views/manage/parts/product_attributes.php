<div class="tab-pane body fade in <?php echo($panel === 'attributes' ? 'active' : ''); ?>" id="tabModal5">
    <!-- /general information -->
        <div class="panel panel-default">
            <div class="panel-heading"><h6 class="panel-title"><i class="icon-insert-template"></i> Product Attributes</h6></div>
            <div class="panel-body">

                <div class="block-inner">

                    <div class="block-inner">
                        <h6 class="heading-hr">
                            <i class="icon-info"></i> Product Attributes <small class="display-block">Drag to reorder attributes</small>
                        </h6>
                        <br />
                    </div>
                    
                    <div class="form-group no-margin">
                        
                        
                        <div class="tabbable">
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#tabAttributesEN" data-toggle="tab"><i class="icon-paragraph-left2"></i> English Attributes</a></li>
                                <li><a href="#tabAttributesFR" data-toggle="tab"><i class="icon-paragraph-left2"></i> French Attributes</a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane body fade in active" id="tabAttributesEN">
                                	<div class="block-inner">
                                        <br />
                                        <div class="row attributes en">
                                        	<?php foreach ($product->getAttributes('en') as $index => $attribute) { ?>
                                            	<div class="attribute">
                                                  <div class="col-md-6"> <i class="icon-menu2 drgAttribute pull-left"></i>
                                                    <input type="text" name="attributes[en][<?php echo $attribute->getIndex(); ?>][name]" 
                                                    	class="product_attribute pull-right" style="width: 92%;" placeholder="Select / Add an Attribute" 
                                                        value="<?php echo $attribute->getName(); ?>" />
                                                  </div>
                                                  <div class="col-md-6">
                                                    <button type="button" class="btn btn-warning btn-icon removeAttribute pull-right" title="Remove This Attribute">
                                                    	<i class="icon-minus-circle"></i></button>
                                                    <input type="text" class="form-control attribute_value"
                                                    	 name="attributes[en][<?php echo $attribute->getIndex(); ?>][value]" placeholder="Attribute Value" 
                                                         style="width: 90%; float: left" value="<?php echo $attribute->getDescription(); ?>" />
                                                  </div>
                                                  <label class="error attribute_error hide">Please fill in the attribute fields.</label>
                                                  <div class="clear"></div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                        <br />
                                        <button class="btn btn-sm btn-info pull-right addAttribute" rel-lang="en" type="button"><i class="icon-plus-circle"></i> New Attribute</button>   
                                    </div>         
                                </div>
                                
                                <div class="tab-pane body fade" id="tabAttributesFR">
                                	<div class="block-inner">
                                        <br />
                                        <div class="row attributes fr">
                                        	<?php foreach ($product->getAttributes('fr') as $index => $attribute) { ?>
                                            	<div class="attribute">
                                                  <div class="col-md-6"> <i class="icon-menu2 drgAttribute pull-left"></i>
                                                    <input type="text" name="attributes[fr][<?php echo $attribute->getIndex(); ?>][name]" 
                                                    	class="product_attribute pull-right" style="width: 92%;" placeholder="Select / Add an Attribute" 
                                                        value="<?php echo $attribute->getName(); ?>" />
                                                  </div>
                                                  <div class="col-md-6">
                                                    <button type="button" class="btn btn-warning btn-icon removeAttribute pull-right" title="Remove This Attribute">
                                                    	<i class="icon-minus-circle"></i></button>
                                                    <input type="text" class="form-control attribute_value"
                                                    	 name="attributes[fr][<?php echo $attribute->getIndex(); ?>][value]" placeholder="Attribute Value" 
                                                         style="width: 90%; float: left" value="<?php echo $attribute->getDescription(); ?>" />
                                                  </div>
                                                  <label class="error attribute_error hide">Please fill in the attribute fields.</label>
                                                  <div class="clear"></div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                        <br />
                                        <button class="btn btn-sm btn-info pull-right addAttribute" rel-lang="fr" type="button"><i class="icon-plus-circle"></i> New Attribute</button>    
                                    </div>        
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <!-- /general information -->

            </div>
    </div>
    <!-- /general information -->
</div>