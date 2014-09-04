<?php 
	$product 	    = $this->getViewData('product'); 
	$manualTypes    = $this->getViewData('manualTypes');
	$allManuals     = $this->getViewData('allProductManuals');
	$englishManuals = (empty($allManuals['en']) === false ? $allManuals['en'] : array());
	$frenchManuals  = (empty($allManuals['fr']) === false ? $allManuals['fr'] : array());
	$newManualRoute = $this->route('manage', 'new-manual', array('id' => $product->getId(), 'lang' => 'en'));
	$count          = array();
	foreach (array('en', 'fr') as $lang) {
		foreach ($allManuals[$lang] as $manualGroup) {
			$count[$lang] = ((int) $count[$lang]) + count($manualGroup['manuals']);
		}
	}
?>
<div class="tab-pane body fade in <?php echo($panel === 'manuals' ? 'active' : ''); ?>" id="tabModal3">
    <!-- Uploaded manuals --->
    <div class="form-group">

		<!-- Justified pills -->
        <div class="block">
            <div class="tabbable">
                <ul class="nav nav-pills nav-justified">
                    <li class="active"><a href="#english-manuals" data-toggle="tab">
                    	<i class="icon-accessibility"></i> English Manuals <span class="label label-danger"><?php echo $count['en']; ?></span></a></li>
                    <li><a href="#french-manuals" data-toggle="tab">
                    	<i class="icon-stack"></i> French Manuals <span class="label label-danger"><?php echo $count['fr']; ?></span></a></li>
                </ul>
        
                <div class="tab-content pill-content">
                	<!-- English Manuals -->
                    <div class="tab-pane fade in active" id="english-manuals">
        				<!-- BEGIN MANUALS -->
                        <div class="row manuals">
                            <div class="col-md-4">
                                <button class="btn btn-success btn-lg uploadNewManual" 
                                    href="<?php echo $newManualRoute; ?>" type="button">
                                    <i class="icon-upload"></i> Upload a new English manual</button>
                                <div class="clear"></div>
                            </div>
                            <div class="col-md-4"></div>
                            <div class="col-md-4">
                                <label>Filter Manuals:</label>
                                <select class="filter-manuals select-full">
                                    <option value="0">All Statuses</option>
                                    <option value="1">Active Manuals</option>
                                    <option value="2">Disabled Manuals</option>
                                </select>
                                <div class="clear"></div>
                            </div>
                            
                            <div class="col-md-12">
                                <div class="block">
                                    <h6><label>Available English Manuals:</label></h6>
                                    
                                    
                                    
                                    <?php foreach ($manualTypes as $manualTypeId => $manualType) { ?>
                                    	<div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h6 class="panel-title"><?php echo $manualType['name_en']; ?></h6>
                                                <div class="panel-icons-group">
                                                    <a href="<?php echo $newManualRoute; ?>" data-panel="collapse" title="Add a new Manual" 
                                                    	class="btn btn-link btn-icon uploadNewManual"><i class="icon-arrow-up9"></i></a>
                                                </div>
                                            </div>
                                            <div class="panel-body">
                                            	<ul class="message-list manual-list manualTypes_en_<?php echo $manualType['id']; ?>">
                                                    <!--<li class="message-list-header"><?php echo $manualType['name_en']; ?></li>-->
                                                    <li class="product-manual noManuals <?php echo (empty($frenchManuals[$manualType['id']]['manuals']) === false) ? 'hide' : ''; ?>"> 
                                                    	No Available <?php echo $manualType['name_en']; ?>
                                                    </li>
                                                    <?php if (empty($englishManuals[$manualType['id']]['manuals']) === false) { ?>
                                                        <?php foreach ($englishManuals[$manualType['id']]['manuals'] as $manual) { ?>
                                                        <li class="product-manual <?php echo ((int) $manual['activeStatus'] === 1 ? 'active' : ''); ?>">
                                                            <div class="clearfix">
                                                                <div class="chat-member">
                                                                    <a href="#"><div class="manual-type <?php echo $manual['fileExt']; ?>"></div></a>
                                                                    <h6><a href="<?php echo $manual['webPath']; ?>" target="_blank"><?php echo $manual['name']; ?></a> 
                                                                    <span class="status status-<?php echo ((int) $manual['activeStatus'] === 1 ? 'success' : 'default'); ?>"></span> 
                                                                    <small>&nbsp; /&nbsp; pdf (<?php echo $manual['size']; ?> kb)</small></h6>
                                                                    <p><?php echo $manual['description']; ?></p>
                                                                </div>
                                                                <div class="chat-actions">
                                                                    <a class="btnMakePrimary btn btn-link btn-icon btn-xs 
																		<?php echo ((int) $manual['activeStatus'] === 1 ? 'activeManual' : ''); ?>" 
                                                                         rel-manual-id="<?php echo $manual['id']; ?>" 
                                                                        title="Make this the primary file"><i class="icon-file-check"></i></a>
                                                                    <a href="#" rel-manual-id="<?php echo $manual['id']; ?>" 
                                                                    	class="btn btn-link btn-icon btn-xs deleteManual" title="Delete this file"><i class="icon-remove2"></i></a>
                                                                </div>
                                                            </div>
                                                        </li> 
                                                        <?php } ?>
                                                    <?php }  ?>
                                                </ul>  
                                            </div>
                                        </div>
                                    <?php } ?>
                                    
									
                                </div>
                            </div>
                            
                            
                        </div>
        				<!-- MANUALS EOF -->
                    </div>
        
                    <!-- French Manuals -->
                    <div class="tab-pane fade" id="french-manuals">
                        <!-- BEGIN MANUALS -->
                        <div class="row manuals">
                            <div class="col-md-4">
                                <button class="btn btn-success btn-lg uploadNewManual" 
                                    href="<?php echo $newManualRoute; ?>" type="button">
                                    <i class="icon-upload"></i> Upload a new French manual</button>
                                <div class="clear"></div>
                            </div>
                            <div class="col-md-4"></div>
                            <div class="col-md-4">
                                <label>Filter Manuals:</label>
                                <select class="filter-manuals select-full">
                                    <option value="0">All Statuses</option>
                                    <option value="1">Active Manuals</option>
                                    <option value="2">Disabled Manuals</option>
                                </select>
                                <div class="clear"></div>
                            </div>
                            
                            <div class="col-md-12">
                                <div class="block">
                                    <h6><label>Available French Manuals:</label></h6>
                                    
                                    
                                    
                                    <?php foreach ($manualTypes as $manualTypeId => $manualType) { ?>
                                    	<div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h6 class="panel-title"><?php echo $manualType['name_en']; ?> (<?php echo $manualType['name_fr']; ?>)</h6>
                                                <div class="panel-icons-group">
                                                    <a href="<?php echo $newManualRoute; ?>" data-panel="collapse" title="Add a new Manual" 
                                                    	class="btn btn-link btn-icon uploadNewManual"><i class="icon-arrow-up9"></i></a>
                                                </div>
                                            </div>
                                            <div class="panel-body">
                                            	<ul class="message-list manual-list manualTypes_en_<?php echo $manualType['id']; ?>">
                                                    <li class="product-manual noManuals <?php echo (empty($frenchManuals[$manualType['id']]['manuals']) === false) ? 'hide' : ''; ?>"> 
                                                    	No Available <?php echo $manualType['name_en']; ?>
                                                    </li>
                                                    <?php if (empty($frenchManuals[$manualType['id']]['manuals']) === false) { ?>
                                                        <?php foreach ($frenchManuals[$manualType['id']]['manuals'] as $manual) { ?>
                                                        <li class="product-manual <?php echo ((int) $manual['activeStatus'] === 1 ? 'active' : ''); ?>">
                                                            <div class="clearfix">
                                                                <div class="chat-member">
                                                                    <a href="#"><div class="manual-type <?php echo $manual['fileExt']; ?>"></div></a>
                                                                    <h6><a href="#"><?php echo $manual['name']; ?></a> 
                                                                    <span class="status status-<?php echo ((int) $manual['activeStatus'] === 1 ? 'success' : 'default'); ?>"></span> 
                                                                    <small>&nbsp; /&nbsp; pdf (<?php echo $manual['size']; ?> kb)</small></h6>
                                                                    <p><?php echo $manual['description']; ?></p>
                                                                </div>
                                                                <div class="chat-actions">
                                                                    <a class="btnMakePrimary btn btn-link btn-icon btn-xs 
																		<?php echo ((int) $manual['activeStatus'] === 1 ? 'activeManual' : ''); ?>" 
                                                                         rel-manual-id="<?php echo $manual['id']; ?>" 
                                                                        title="Make this the primary file"><i class="icon-file-check"></i></a>
                                                                    <a href="#"  rel-manual-id="<?php echo $manual['id']; ?>" 
                                                                    	class="btn btn-link btn-icon btn-xs deleteManual" title="Delete this file"><i class="icon-remove2"></i></a>
                                                                </div>
                                                            </div>
                                                        </li> 
                                                        <?php } ?>
                                                    <?php } ?>
                                                </ul>  
                                            </div>
                                        </div>
                                    <?php } ?>
                                    
									
                                </div>
                            </div>
                            
                            
                        </div>
        				<!-- MANUALS EOF -->
                    </div>
                    
                    
                </div>
            </div>
        </div>
		<!-- /justified pills -->



    </div>
</div>