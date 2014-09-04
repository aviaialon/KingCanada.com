<?php
	$product    = $this->getViewData('product');
	$manualLang = $this->getRequestParam('lang');
?>
<div class="row mdContent manualUploadSection">
	<div class="col-md-12">
    	<input type="hidden" name="uploadedManualProductId" id="uploadedManualProductId" value="<?php echo $product->getId(); ?>" />
    	<input type="hidden" name="uploadedManualLang" id="uploadedManualLang" value="<?php echo $manualLang; ?>" />
    	<input type="hidden" name="uploadedManual" id="uploadedManual" value="" />
    	<input type="hidden" name="uploadedManualExtension" id="uploadedManualExtension" value="" />
    	<input type="hidden" name="uploadedManualSize" id="uploadedManualSize" value="" />
        <h4><i class="icon-upload"></i> English Manual File Upload:</h4>
        <div class="clear"></div>
        <div class="multiple-uploader-manuals">Your browser doesn't support native upload.</div>
        <span class="help-block">Accepted formats: 'pdf', 'doc', 'docx', 'xls', 'xlsx'. <strong>Max file size 2Mb</strong></span>
    </div>
    <div class="col-md-12">
    	<hr />
        <div class="block-inner">
            <h4 class="heading-hr">
                <i class="icon-pencil3"></i> Manual Information: 
            </h4>
            
            <div class="form-group">
            	<div class="clear"></div>
                <div class="row">
                    <div class="col-md-6">
                        <select name="manualType" id="manualType" data-placeholder="Select a manual type">
                        	<option></option>
                        	<?php foreach ($this->getViewData('manualTypes') as $manualType) { ?>
                            	<option value="<?php echo $manualType['id']; ?>"><?php echo $manualType['name_en']; ?></option>
                            <?php } ?>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <input type="text" name="manualName" id="manualName" placeholder="Manual Name" class="required form-control">
                    </div>
                </div>
                <div class="row">
            		<div class="clear"></div>
                    <div class="col-md-12">
                        <textarea name="manualDescription" id="manualDescription" rows="6" cols="5" placeholder="Manual Description (Optional)" class="elastic form-control"></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                        <label class="radio radio-block radio-primary">
                            <input type="radio" name="makePrimary" class="__styled" checked="checked" value="0">
                            <strong class="text-danger">This file is not the primary manual</strong>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label class="radio radio-block radio-primary">
                            <input type="radio" name="makePrimary" class="__styled" value="1">
                            <strong class="text-success">Make this the primary manual</strong>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br>

<div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary addManual">Add Manual</button>
</div>

<!--  -->