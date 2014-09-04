<div class="tab-pane body fade in <?php echo($panel === 'manuals' ? 'active' : ''); ?>" id="tabModal3">
    <!-- Uploaded manuals --->
    <div class="form-group">

        <!--<div class="row block-inner manuals">
            <div class="col-md-3">
                <div class="manual"><i class="icon-cogs"></i> <span>Layout settings</span> <a class="label label-danger">10</a></div>
            </div>

            <div class="col-md-3">
                <div class="manual"><i class="icon-wrench"></i> <span>Admin tools</span> <a class="label label-success">20</a></div>
            </div>

            <div class="col-md-3">
                <div class="manual"><i class="icon-users"></i> <span>User list</span> <a class="label label-warning">30</a></div>
            </div>

            <div class="col-md-3">
                <div class="manual"><i class="icon-upload"></i> <span>Upload files</span> <a class="label label-info">40</a></div>
            </div>
        </div>-->


<!-- Justified pills -->
<div class="block">
    <div class="tabbable">
        <ul class="nav nav-pills nav-justified">
            <li class="active"><a href="#english-manuals" data-toggle="tab"><i class="icon-accessibility"></i> English Manuals</a></li>
            <li><a href="#french-manuals" data-toggle="tab"><i class="icon-stack"></i> French Manuals <span class="label label-danger">12</span></a></li>
        </ul>

        <div class="tab-content pill-content">
            <!-- English Manuals -->
            <div class="tab-pane fade in active" id="english-manuals">

                <div class="row">
                    <div class="col-md-6">
                        <label><i class="icon-upload"></i> English Manual File Upload:</label>
                        <div class="multiple-uploader-manuals">Your browser doesn't support native upload.</div>

                        <!--<label>French Manual File Upload:</label>
                        <input type="file" name="categoryFile" id="categoryFile" class="inputFile" />
                        <input type="submit" value="Upload" class="btn btn-primary">-->
                        <span class="help-block">Accepted formats: 'pdf', 'doc', 'docx', 'xls', 'xlsx'. <strong>Max file size 2Mb</strong></span>
                        <div class="clear"></div>
                    </div>
                    <div class="col-md-6">
                        <div class="block">
                            <h6><label>Available English Manuals:</label></h6>
                            <ul class="message-list">

                                <li class="message-list-header">Instruction Manual</li>

                                <li>
                                    <div class="clearfix">
                                        <div class="chat-member">
                                            <a href="#"><img src="images/demo/users/face1.png" alt=""></a>
                                            <h6><a href="#">6534 Manual</a> <span class="status status-success"></span> <small>&nbsp; /&nbsp; pdf (234 k)</small></h6>
                                        </div>
                                        <div class="chat-actions">
                                            <a class="btn btn-link btn-icon btn-xs activeManual" title="Make this the primary file"><i class="icon-file-check"></i></a>
                                            <a href="#" class="btn btn-link btn-icon btn-xs" title="Delete this file"><i class="icon-remove2"></i></a>
                                        </div>
                                    </div>
                                </li>


                                <li class="message-list-header">Colleagues</li>

                                <li>
                                    <div class="clearfix">
                                        <div class="chat-member">
                                            <a href="#"><img src="images/demo/users/face5.png" alt=""></a>
                                            <h6><a href="#">6534 Manual</a> <span class="status status-success"></span> <small>&nbsp; /&nbsp; pdf (234 k)</small></h6>
                                        </div>
                                        <div class="chat-actions">
                                            <a class="btn btn-link btn-icon btn-xs activeManual" title="Make this the primary file"><i class="icon-file-check"></i></a>
                                            <a href="#" class="btn btn-link btn-icon btn-xs" title="Delete this file"><i class="icon-remove2"></i></a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="clearfix">
                                        <div class="chat-member">
                                            <a href="#"><img src="images/demo/users/face6.png" alt=""></a>
                                            <h6><a href="#">6534 Manual</a><span class="status status-default"></span> <small>&nbsp; /&nbsp; pdf (234 k)</small></h6>
                                        </div>
                                        <div class="chat-actions">
                                            <a class="btn btn-link btn-icon btn-xs" title="Make this the primary file"><i class="icon-file-check"></i></a>
                                            <a href="#" class="btn btn-link btn-icon btn-xs" title="Delete this file"><i class="icon-remove2"></i></a>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>




            </div>

            <!-- French Manuals -->
            <div class="tab-pane fade" id="french-manuals">
                <div class="row">
                    <div class="col-md-6 pull-right">
                        <label>French Manual File Upload:</label>
                        <!--<input type="file" name="categoryFile" id="categoryFile" class="inputFile" />
                        <input type="submit" value="Upload" class="btn btn-primary">-->
                        <span class="help-block">Accepted formats: xlxs, xls. Max file size 2Mb</span>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /justified pills -->












    </div>
</div>
