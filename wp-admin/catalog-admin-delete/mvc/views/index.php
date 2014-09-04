<?php /*
hello, index page here...
<br>
<!--<div id="reportrange" class="range">
    <div class="visible-xs header-element-toggle">
        <a class="btn btn-primary btn-icon"><i class="icon-calendar"></i></a>
    </div>
    <div class="date-range"></div>
</div>-->
<br>
<br>
Done
<!-- Modal with WYSIWYG editor -->
<a data-toggle="modal" class="btn btn-danger btn-block" role="button" href="#editor-modal">Run modal with WYSIWYG editor</a>
<div id="editor-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><i class="icon-quill2"></i> WYSIWYG editor inside modal</h4>
            </div>

            <div class="modal-body with-padding">
                    <form>
                        <textarea class="editor form-control" placeholder="Enter text ..."></textarea>
                    </form>
            </div>

            <div class="modal-footer">
                <button class="btn btn-warning" data-dismiss="modal">Close</button>
                <button class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>





<div class="form-group">
	<table width="100%" border="0">
      <tr>
        <td width="30%">
        	<select data-placeholder="Select department" id="category-selector">
                <option value=""></option> 
                <option value="Support">Support (online)</option> 
                <option value="Sles">Sales department</option> 
                <option value="Lawers">Lawers</option> 
                <option value="Information">Information</option> 
                <option value="Administration">Web administration</option> 
            </select>
        </td>
        <td width="70%">
        	<input type="text" id="categories" class="tags pull-left" value="">
        </td>
      </tr>
    </table>
</div>

<br>
<br>
<br>
*/ ?>
<!-- /modal with WYSIWYG editor -->
<?php $this->renderPartial('products::listing_table', array('products' => $this->getViewData('products'))); ?>