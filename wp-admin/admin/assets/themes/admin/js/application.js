/**
 * Application Administration Class
 *
 * This class controls the Application scope
 *
 * @namespace    SYSTEM
 * @package        SYSTEM.APPLICATION
 * @subpackage    MAIN
 * @author      Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Avi Aialon. All Rights Reserved
 * @license        http://www.deviantlogic.com/license
 * @version        SVN: $Id$
 * @link        SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
var SYSTEM                             = SYSTEM || {};
SYSTEM.APPLICATION                     = SYSTEM.APPLICATION || {};
SYSTEM.APPLICATION.STATIC_INSTANCE    = SYSTEM.APPLICATION.STATIC_INSTANCE || {};
(SYSTEM.APPLICATION.MAIN  = function(objParams) {

    /**
     * Define Class Constants
     *
     * @var String
     */

    // Class configurations
    SYSTEM.APPLICATION.MAIN.STATUS                              = {};
    SYSTEM.APPLICATION.MAIN.STATUS.TYPE                         = {};
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT                        = {};
    SYSTEM.APPLICATION.MAIN.CONFIGURATION                       = {};
    SYSTEM.APPLICATION.MAIN.SELECTIONS                          = {};
    SYSTEM.APPLICATION.MAIN.POST_HANDLER                        = {};
    SYSTEM.APPLICATION.MAIN.MODULE                              = {};
    SYSTEM.APPLICATION.MAIN.EVENT_HOOKS                         = {};

    // Status Responses
    SYSTEM.APPLICATION.MAIN.STATUS.TYPE.ERROR                    = 'error';
    SYSTEM.APPLICATION.MAIN.STATUS.TYPE.INFO                     = 'info';
    SYSTEM.APPLICATION.MAIN.STATUS.TYPE.OK                       = 'success';
    SYSTEM.APPLICATION.MAIN.STATUS.TYPE.MESSAGE                  = 'message';
    SYSTEM.APPLICATION.MAIN.STATUS.TYPE.RESPONSE_OK              = 'OK';

    // Event Responses
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK                    = 'click';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSEOVER                = 'hover';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.KEYUP                    = 'keyup';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.KEYDOWN                  = 'keydown';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.KEYPRESS                 = 'keypress';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONMOVE                   = 'onmove';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSEOVER                = 'mouseover';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSEOUT                 = 'mouseout';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSENTER                = 'mousenter';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSELEAVE               = 'mouseleave';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSEUP                  = 'mouseup';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.MOUSEDOWN                = 'mousedown';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CHANGE                   = 'change';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.BLUR                     = 'blur';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.FOCUS                    = 'focus';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.HOVER                    = 'hover';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.SUBMIT                   = 'submit';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.WKTRANSEND               = 'webkitTransitionEnd';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.OTRANSEND                = 'oTransitionEnd';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.TRANSEND                 = 'transitionend';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONHIDE                   = 'onHideEvent';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONSHOW                   = 'onShowEvent';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONBIND                   = 'onBindEvent';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.RESIZE                   = 'resize';
    SYSTEM.APPLICATION.MAIN.STATUS.EVENT.VOID                     = 'void';


    // Parameter constants (to use with setter / configure)
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.JS_DOCUMENT_ROOT            = 'jsDocumentRoot';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.STATIC_DOCUMENT_ROOT        = 'staticDocumentRoot';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.IMG_DOCUMENT_ROOT           = 'imgDocumentRoot';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.WEB_DOCUMENT_ROOT           = 'webDocumentRoot';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.SITE_URL                    = 'siteApplicationUrl';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.LANGUAGE                    = 'application_configLang';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.PRODUCT_SAVE_URL            = 'application_productSaveUrl';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.UPLOADED_ATTACHMENTS        = 'application_configUploadedAttachments';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL                     = 'application_configApiUrl';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.IMG_SET_MAIN_URL            = 'application_configImgMainUrl';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.DISTINCT_ATTRIBUTES         = 'application_distinctAttributes';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.CATEGORY_TREE               = 'application_categoryTree';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.CATEGORY_SELECTED           = 'application_alreadySelectedCategories';
    SYSTEM.APPLICATION.MAIN.CONFIGURATION.MANUAL_TYPES                = 'application_manualTypes';

    // Page module registry - Configuration of registered modules.
    SYSTEM.APPLICATION.MAIN.MODULE.PAGE_MODULES                       = 'application_defaultModules';
    SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR                     = 'application_productEditor';
    SYSTEM.APPLICATION.MAIN.MODULE.FILE_UPLOADER                      = 'application_fileUploader';
    SYSTEM.APPLICATION.MAIN.MODULE.MANUAL_UPLOAD                      = 'application_manualUploader';
    SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR_EVENTS              = 'application_productEditorEvent';
    SYSTEM.APPLICATION.MAIN.MODULE.BROWSER_DETECT                     = 'browserDetect';

    /**
     * Application initialisation method
     *
     * @param    none
     * @return    SYSTEM.APPLICATION.MAIN
     */
     SYSTEM.APPLICATION.MAIN.prototype.initialise = function(fnCallback, loadMinimal)
     {
         var fnAppInitialiseCallback = (typeof fnCallback == "function" ? fnCallback : function() {});
         var me = this;

         $(document).ready(function() {

             // Call the onInit event handler
             fnAppInitialiseCallback(me);
             //me.startModule(SYSTEM.APPLICATION.MAIN.MODULE.PAGE_MODULES);
             SYSTEM.APPLICATION.STATIC_INSTANCE = me;
         });

         return (this);
     }

    /**
     * Variable getter method
     *
     * @param    strVarName     - The variable name
     * @return    mxResult     - The variable value
     */
     SYSTEM.APPLICATION.MAIN.prototype.getVariable = function(strVarName)
     {
        var mxResult = false;
        if (typeof this[strVarName] !== "undefined") {
            mxResult = this[strVarName];
        }

        return (mxResult);
     }

    /**
     * Message setter method
     *
     * @param    strVarName     - The variable name
     * @param    strVarValue    - The variable value
     * @return    void
     */
     SYSTEM.APPLICATION.MAIN.prototype.setVariable = function(strVarName, strVarValue)
     {
        if (typeof strVarName !== "undefined") {
            this[strVarName] = strVarValue;
        }
     }

    /**
     * Message setter method
     *
     * @param    strVarName     - The variable name
     * @param    strVarValue    - The variable value
     * @return    void
     */
     SYSTEM.APPLICATION.MAIN.prototype.configure = function(strVarName, strVarValue)
     {
        this.setVariable(strVarName, strVarValue);
     }

     /**
      * This method returns the translated string according to the language
      *
      * @param    strEngVal String - The english value
      * @param    strFrVal  String - The french value
      * @return String
      */
     SYSTEM.APPLICATION.MAIN.prototype.translate = function(strEngVal, strFrVal)
     {
         var strRetData = strEngVal;
         var strlang     = (this.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.LANGUAGE) || ('en'));
         if (strlang.toLowerCase() == 'fr')
         {
             strRetData = strFrVal;
         }

         return (strRetData);
     }

     /**
      * This method initilises and starts modules from array
      *
      * @param    array / Object arrModuleNames
      * @return void
      */
     SYSTEM.APPLICATION.MAIN.prototype.startModuleArray = function(arrModuleNames)
     {
        var me = this;
        if (
            (typeof arrModuleNames !== "undefined") &&
            ((typeof arrModuleNames == "array") || (typeof arrModuleNames == "object")) &&
            (Number(arrModuleNames.length) > 0)
        ) {
            $.each(arrModuleNames, function(intIndex, strModuleName) {
                me.startModule(strModuleName);
            });
        }
     }

    /**
      * This method initilises a page based on the controller
      *

      * @param  int bytes
      * @return integer
      */

    SYSTEM.APPLICATION.MAIN.prototype.bytesToSize = function(bytes)
    {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return 'n/a';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if (i == 0) return bytes + ' ' + sizes[i];
        return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    };


     /**
      * This method initilises a page based on the controller
      *

      * @param    string strControllerName
      * @return void
      */
     SYSTEM.APPLICATION.MAIN.prototype.startModuleCollection = function(strControllerName)
     {
        var me = this;
        switch (strControllerName)
        {
            case ('index') :
            {
                me.startModuleArray([
                    SYSTEM.APPLICATION.MAIN.MODULE.PAGE_MODULES
                ]);

                break;
            }

            case (SYSTEM.APPLICATION.MAIN.STATUS.EVENT.VOID) :
            {
                return me;
                break;
            }

            default :
            {
                break;
            }
        }
     }

     /**
      * This method reloads a row
      *
      * @param  struct rowData - the row data
      * @return void
      */
     SYSTEM.APPLICATION.MAIN.prototype.onProductListingRowChange = function(rowData)
     {
         if (typeof rowData.id !== "undefined") {
            var table = this.getVariable('datatable'),
                tr    = $('#p_' + rowData.id);

            if (tr.length) {
                tr.find('.p_image img').attr('src', rowData.mainImage);
                tr.find('.p_productKey').html(rowData.productKey);
                tr.find('.p_title').html(rowData.title_en);
                tr.find('.p_desc').html(rowData.desc_en.substr(0, 150));
                tr.find('.p_date').html(rowData.date_created);
                tr.find('.p_title').html(rowData.title_en);
                tr.find('.p_title').html(rowData.title_en);
                tr.find('.p_views').html(rowData.views);
                if (rowData.status == 'Active')
                    tr.find('.p_status span.label').removeClass('label-danger').addClass('label-success').html(rowData.status);
                else
                    tr.find('.p_status span.label').removeClass('label-success').addClass('label-danger').html(rowData.status);
            }
         }
     }
	 
	 /**
      * This method adds a manual
      *
      * @param  struct rowData - the row data
      * @return void
      */
     SYSTEM.APPLICATION.MAIN.prototype.onAddNewManual = function(manual)
     {
         /*
			var manual = {};
			manual.productId 			= $('#uploadedManualProductId').val();
			manual.uploadedManual 		= $('#uploadedManual').val();
			manual.uploadedManualLang 	= $('#uploadedManualLang').val();
			manual.uploadedManualSize 	= $('#uploadedManualSize').val();
			manual.manualType 			= $('#manualType').select2('val');
			manual.manualName 			= $('#manualName').val();
			manual.manualDescription	= $('#manualDescription').val();
			manual.makePrimary 			= $("input:radio[name='makePrimary']:checked").val();
			manual.manualFileExtension  = $("#uploadedManualExtension").val();
		
		*/
		
		var ulList = $('ul.manualTypes_' + manual.uploadedManualLang + '_' + manual.manualType),
		manualSize = manual.uploadedManualSize / 1024,
		listCount  = Number($('.new-manual').length);
		ulList.find('.noManuals').addClass('hide');
		template = '<li class="product-manual new-manual ' + (manual.makePrimary == 1 ? 'active' : '') + '">' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][lang]" value="' + manual.uploadedManualLang + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][manual]" value="' + manual.uploadedManual + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][ext]" value="' + manual.manualFileExtension + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][size]" value="' + manual.uploadedManualSize + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][type]" value="' +manual.manualType + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][primary]" value="' +manual.makePrimary + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][name]" value="' +manual.manualName + '" />' +
						'<input type="hidden" class="newManualInput" name="manuals[' + listCount + '][desc]" value="' +manual.manualDescription + '" />' +
						'<div class="clearfix">' +
							'<div class="chat-member">' +
								'<a href="' + manual.uploadedManual + '" target="_blank"><div class="manual-type ' + manual.manualFileExtension + '"></div></a>' +
								'<h6><a href="#">' + manual.manualName + '</a>' +  
								'<span class="status status-' + (manual.makePrimary == 1 ? 'success' : 'default') + '"></span>' + 
								'<small>&nbsp; /&nbsp; ' + manual.manualFileExtension + ' (' + manualSize + ' kb)</small></h6>' +
								'<p>' + manual.manualDescription + '</p>' +
							'</div>' +
							'<div class="chat-actions">' +
								'<a class="btn btn-link btn-icon btn-xs ' + (manual.makePrimary == 1 ? 'activeManual' : '') + '" ' +
									'title="Make this the primary file"><i class="icon-file-check"></i></a>' +
								'<a href="#" class="btn btn-link btn-icon btn-xs deleteManualNew" title="Delete this file"><i class="icon-remove2"></i></a>' +
							'</div>'
						'</div>'
					'</li>';	
					
		$(template).prependTo(ulList);
		
		$('.deleteManualNew').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
		$('.deleteManualNew').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
			event.preventDefault();
			$(this).parents('li.product-manual').remove();
		});
     }

     /**
      * This method adds a category row
      *
      * @param  struct rowData - the row data
      * @return void
      */
     SYSTEM.APPLICATION.MAIN.prototype.addCategorySelectionRow = function(isInit)
     {
         var hasError = false,
              errorMsg = false,
             isInit   = (typeof isInit == "undefined" ? false : Boolean(isInit)),
             me = this;

         $(".categorySelection .categorySet").each(function(index, element) {
             if ($(this).find('.multi-select-subcat').length == 0) {
                 errorMsg = ('Main category not selected'),
                 hasError = true;
             } else if ($(this).find('.multi-select-subcat option:selected').length == 0) {
                 errorMsg = ('Main category selected but no subcategory selected'),
                 hasError = true;
             }
         });

         if (true == hasError) {
                console.log(errorMsg);
                return !hasError;
         }

         if (false == isInit) {
             var template = $($('.categoryTemplate').html());
            template.appendTo('.categorySelection');
         }

         $(".categorySelection .categorySet .mainCategorySelector").each(function(index, element) {
                $(".categorySelection .categorySet:last .mainCategorySelector").
                        find('option[value="' + $(this).select2('data').id + '"]').prop('disabled', 'disabled');
         });

         $(".categorySelection .categorySet" + (false == isInit ? ':last' : '') + " .mainCategorySelector").select2({
             width: "100%",
             placeholder: "Select a main category",
             allowClear: true
         }).on("change", function(e) {

            // Removed selection
            if (e.removed !== null && e.added == null)
            {
                $(this).parents('.categorySet').remove();
                 $(".categorySelection .categorySet .mainCategorySelector").each(function(index, element) {
                     $(".categorySelection .categorySet .mainCategorySelector").
                        find('option[value="' + e.removed.id + '"]').removeProp('disabled');
                 });

                return me.addCategorySelectionRow();
            }
            else
            {
                $(".categorySelection .categorySet .mainCategorySelector")
                    .not($(this).parents('.mainCategorySelector')).each(function(index, element) {
                     $(".categorySelection .categorySet .mainCategorySelector").
                        find('option[value="' + e.added.id + '"]').prop('disabled', 'disabled');
                 });
            }

            var categoryTree = me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.CATEGORY_TREE),
                 categoryOptions = categoryTree[e.val]['children'],
                container = $(this).parents('.categorySet').find('.subCategory');
                container.html('');
                selector = $('<select></select>');
                selector.attr({
                     'multiple': 'multiple',
                    'class': 'multi-select-subcat',
                    'name': 'categories[]'
                });

                var selectedOptions = $('.categorySelection .multi-select-subcat option:selected'),
                    selectedValues  = {};

                for (i in selectedOptions) {
                    if (typeof selectedOptions[i].value !== "undefined") {
                        selectedValues[selectedOptions[i].value] = true;
                    }
                }

                for (i in categoryOptions) {
                    element = categoryOptions[i];
                    option = $('<option></option>');
                    option.attr({'value': element.id});
                    option.text(element.name_en);
                    if (selectedValues.hasOwnProperty(element.id)) {
                        option.attr({'disabled': 'disabled'});
                    }

                    option.appendTo(selector);
                }

                selector.appendTo(container);
                selector.multiselect({
                    buttonClass: 'btn btn-default',
                    includeSelectAllOption: true,
                    enableCaseInsensitiveFiltering: true,
                    filterBehavior: 'both',
                    templates: {
                         filter: '<li class="multiselect-item filter"><input class="form-control multiselect-search" type="text" placeholder="Type to filter..."/></li>'
                    },
                    onChange:function(element, checked){
                        var option = $(element);
                        if (checked == false) {
                            $('.categorySelection .multi-select-all option[value="' + option.val() + '"]').removeAttr('disabled');
                            $('.dropdown-menu div.checker input[value="' + option.val() + '"]').removeAttr('disabled');
                            $('.dropdown-menu div.checker input[value="' + option.val() + '"]').parents('div.checker').removeClass('disabled');
                            $('.dropdown-menu div.checker input[value="' + option.val() + '"]').parents('li').removeClass('disabled');
                        } else {
                            selectedSection = $('.dropdown-menu li div.checker input[value="' + option.val() + '"]').parents('li'),
                            optionSelector  = '.dropdown-menu div.checker input[value="' + option.val() + '"]',
                            inputSelector   = 'input[value="' + option.val() + '"]';

                            $(optionSelector).not(selectedSection.find(inputSelector)).attr({'disabled': 'disabled'});
                            $(optionSelector).not(selectedSection.find('div.checker')).parents('div.checker').addClass('disabled');
                            $(optionSelector).parents('li').not(selectedSection).addClass('disabled');


                        }

                        $.uniform.update();
                    }
                });

                $(".multiselect-container input").uniform({radioClass: 'choice', selectAutoWidth: false});
                $(this).parents('.categorySet').find('.categorySeparator').removeClass('hide');
         });


         selector = $('select.multi-select-subcat');
         selector.multiselect({
            buttonClass: 'btn btn-default',
            includeSelectAllOption: true,
            enableCaseInsensitiveFiltering: true,
            filterBehavior: 'both',
            templates: {
                 filter: '<li class="multiselect-item filter"><input class="form-control multiselect-search" type="text" placeholder="Type to filter..."/></li>'
            },
            onChange:function(element, checked){
                var option = $(element);
                if (checked == false) {
                    $('.categorySelection .multi-select-all option[value="' + option.val() + '"]').removeAttr('disabled');
                    $('.dropdown-menu div.checker input[value="' + option.val() + '"]').removeAttr('disabled');
                    $('.dropdown-menu div.checker input[value="' + option.val() + '"]').parents('div.checker').removeClass('disabled');
                    $('.dropdown-menu div.checker input[value="' + option.val() + '"]').parents('li').removeClass('disabled');
                } else {
                    selectedSection = $('.dropdown-menu li div.checker input[value="' + option.val() + '"]').parents('li'),
                    optionSelector  = '.dropdown-menu div.checker input[value="' + option.val() + '"]',
                    inputSelector   = 'input[value="' + option.val() + '"]';

                    $(optionSelector).not(selectedSection.find(inputSelector)).attr({'disabled': 'disabled'});
                    $(optionSelector).not(selectedSection.find('div.checker')).parents('div.checker').addClass('disabled');
                    $(optionSelector).parents('li').not(selectedSection).addClass('disabled');


                }

                $.uniform.update();
            }
        });

        $(".multiselect-container input").uniform({radioClass: 'choice', selectAutoWidth: false});
     }

	 /**
      * This method parses the attribute selection so it can be used with select2
      *
      * @return array
      */
     SYSTEM.APPLICATION.MAIN.prototype.__parseAttributeSelection = function(lang)
     {
		var ___data = {'en' : [], 'fr' : []},
			me = this;
		$(['en', 'fr']).each(function(index, lang) {
			var __lang = lang;
			$(me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.DISTINCT_ATTRIBUTES)[lang]).each(function(index, element) {
				___data[__lang].push({
					id:     element.name,
					text:     element.name
				});
			});
		}); 
		
		return ___data;
	 }


     /**
      * This method validates the attribute selection
      *
      * @return boolean
      */
     SYSTEM.APPLICATION.MAIN.prototype.validateAttributes = function(lang)
     {
        $('.attribute_error').addClass('hide');
        var blnContinue = true;


        if ($('.attributes.' + lang + ' .attribute').length > 0) {
            $('.attributes.' + lang + ' .attribute').each(function(index, element) {
                var attributes = $(element),
                attribute  = attributes.find('.product_attribute'),
                attrValue  = attributes.find('.attribute_value');

                if (attribute.select2("val") == "" || attrValue.val() == "" && (attribute.select2("val") + attrValue.val() != "")) {
                    attributes.find('.attribute_error').removeClass('hide');
                    blnContinue = false;
                }
            });
        }

        return blnContinue;
     }


     /**
      * This method initilises and starts modules
      *
      * @param    none
      * @return void
      */
     SYSTEM.APPLICATION.MAIN.prototype.startModule = function(strModuleName)
     {
         var me = this;
         console.log('Loading Module: ' + strModuleName);

         switch (strModuleName)
         {
             /**
              * Loading the default modules
              */
            case (SYSTEM.APPLICATION.MAIN.MODULE.PAGE_MODULES) :
            {
					if (! $(top.parent.document.body).hasClass('folded')) {
						$(top.document.getElementById('collapse-menu')).trigger(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
		 			}
		 
                    $(".select-full").select2({
                        width: "100%"
                    });

                    // WYSIWYG editor

                    $('.editor').wysihtml5({});

                    /* # Data tables ================================================== */


                     //===== Setting Datatable defaults =====//

                    $.extend($.fn.dataTable.defaults, {
                        autoWidth: false,
                        pagingType: 'full_numbers',
                        dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
                        language: {
                            search: '<span>Filter:</span> _INPUT_',
                            lengthMenu: '<span>Show:</span> _MENU_',
                            paginate: {
                                'first': 'First',
                                'last': 'Last',
                                'next': '>',
                                'previous': '<'
                            }
                        }
                    });

                     //===== Datatable with custom column filtering =====//

                     // Custom date filtering
                    $.fn.dataTableExt.afnFiltering.push(
                        function (oSettings, aData, iDataIndex) {
                            dateMin = $('#reportMinDate').attr("value");
                            dateMax = $('#reportMaxDate').attr("value");

                            if (dateMin == "" && dateMax == "") return true;

                            dateMin = dateMin.replace(/\W+/g, "")
                            dateMax = dateMax.replace(/\W+/g, "");

                            var date = aData[5];
                            date = date.substring(0, 10);
                            date = date.substring(0, 4) + date.substring(5, 7) + date.substring(8, 10)

                            // run through cases
                            if (dateMin == "" && date <= dateMax) {
                                return true;
                            } else if (dateMin == "" && date <= dateMax) {
                                return true;
                            } else if (dateMin <= date && "" == dateMax) {
                                return true;
                            } else if (dateMin <= date && date <= dateMax) {
                                return true;
                            }

                            // all failed
                            return false;
                        }
                    );

                     // Setup - add a text input to each footer cell
                    $('.datatable-add-row table tfoot th').each(function () {
                        if (!$(this).hasClass('noFilter')) {
                            var title = $('.datatable-add-row table thead th').eq($(this).index()).text();
                            $(this).html('<input type="text" class="form-control" placeholder="Filter ' + title + '" />');
                        }
                    });


                    // DataTable
                    var table = $('.datatable-add-row table').DataTable({
                        /*ajax: 'media/datatable_ajax_source.txt'    */
                        dom: '<"datatable-header"Tfl>t<"datatable-footer"ip>',
                        tableTools: {
                            /*sRowSelect: "single",*/
                            sSwfPath: "assets/themes/admin/js/table_export/copy_csv_xls_pdf.swf",
                            aButtons: [
							
								/*{
                                    sExtends: 'div',
                                    sButtonText: '<span data-icon="&#xe104;"></span> Add a New Product',
                                    sButtonClass: 'btn btn-info',
                                    fnClick: function (nButton, oConfig, oFlash) {
                                        $("#edProdModalDialog .modal-content").html('');
                                        $("#edProdModalDialog .modal-content").load('manage/product/', function() {
                                            $("#edProdModalDialog").modal("show");
                                        });
                                    }
                                },*/
								
                                {
                                    sExtends:    'div',
                                    sButtonText: '<div class="btn-group">' +
													'<a class="btn btn-info" title="Add a New Product" href="manage/manage-product">' +
														'<span data-icon="&#xe104;"></span> Add a New Product</a>' +
													'<button class="btn btn-info dropdown-toggle" data-toggle="dropdown">' +
														'<span class="caret caret-split"></span></button>' +
													'<ul class="dropdown-menu icons-right leftmenu">' +
														'<li><a class="quickAddBtn" href="#">' +
														'<i class="icon-plus"></i> Quick Add</a></li>' +
													'</ul>' +
												'</div>',
                                    sButtonClass: 'pull-left'
                                },
                                {
                                    sExtends: 'collection',
                                    sButtonText: 'Export Data <span class="caret"></span>',
                                    sButtonClass: 'btn btn-primary',
                                    aButtons: ['csv', 'xls', 'pdf']
                                }
                            ]
                        }
                    });

                    this.configure('datatable', table);


                     // Custom date range filter

                     // Apply the filter
                    $(".datatable-add-row table tfoot input").on('keyup change', function () {
                        table
                            .column($(this).parent().index() + ':visible')
                            .search(this.value)
                            .draw();
                    });


                    $('.dataTables_filter input[type=search]').attr('placeholder', 'Type to filter...');
                    $(".dataTables_length select").select2({
                        minimumResultsForSearch: "-1"
                    });

                    $('input#bulk_all').on('click', function (event) {
                        $('input[name="bulk[]"]').prop('checked', this.checked);
                    });

                     //===== DateRangePicker plugin =====//

                    $('#reportrange').daterangepicker({
                            ranges: {
                                'Reset': ['1960-01-01', moment()],
                                'Today': [moment(), moment()],
                                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                                'Last 7 Days': [moment().subtract('days', 6), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                                'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                            },
                            opens: 'left',
                            buttonClasses: ['btn'],
                            applyClass: 'btn-small btn-info btn-block',
                            cancelClass: 'btn-small btn-default btn-block',
                            format: 'MM-DD-YYYY',
                            separator: ' to ',
                            locale: {
                                applyLabel: 'Submit',
                                fromLabel: 'From',
                                toLabel: 'To',
                                customRangeLabel: 'Custom Range',
                                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                firstDay: 1
                            }
                        },
                        function (start, end) {
                            $('#reportMinDate').val(start.format('YYYY-MM-DD'));
                            $('#reportMaxDate').val(end.format('YYYY-MM-DD'));
                            table.draw();
                            $.jGrowl('Date range has been changed', {
                                header: 'Update',
                                position: 'center',
                                life: 1500
                            });
                            if (start.format('YYYY-MM-DD') == '1960-01-01') {
                                $('#reportrange .date-range').html("<b style='font-weight: bold'>All Ranges</b>");
                                $('#reportMinDate').val('');
                                $('#reportMaxDate').val('');
                            } else {
                                $('#reportrange .date-range').html(start.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> - </em>' + end.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
                            }
                        }
                    );

                    /* Custom date display layout */
                    $('#reportrange .date-range').html(
                        //moment().subtract('days', 29).format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> - </em>' + moment().format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>')
                        "<b style='font-weight: bold'>All Ranges</b>"
                    );
                    $('#reportrange').on('show', function (ev, picker) {
                        $('.range').addClass('range-shown');
                    });

                    $('#reportrange').on('hide', function (ev, picker) {
                        $('.range').removeClass('range-shown');
                    });

                    $(".filterActiveStatus").select2({
                        minimumResultsForSearch: "-1",
                        width: "100%"
                    }).on("change", function(e) {
                          table
                            .column($(this).parent().index() + ':visible')
                            .search(e.val)
                            .draw();
                    });

                    $(document).on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONBIND, function(event) {
                        $('.btnEditProduct').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK)
                             .on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function (event) {
                                event.preventDefault();

                                me.configure('currentTarget', $(this).attr("href"));

                                // load the url and show modal on success
                                $("#edProdModalDialog .modal-content").html('');
                                $("#edProdModalDialog .modal-content").load(me.getVariable('currentTarget'), function() {
                                    $("#edProdModalDialog").modal("show");
									$("#edProdModalDialog").on('hide.bs.modal', function(e) {
										$('#addNewManual').modal('hide');
									});
                            });
                        });
                    });

                    $('.dataTables_paginate a').add('.select2-result-label').add('.sorting').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function (event) {
                        $(document).trigger(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONBIND);
                    });

                    $(document).trigger(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.ONBIND);

                    // Checkboxes
                    $(".styled, .multiselect-container input").uniform({radioClass: 'choice', selectAutoWidth: false});
					
					// Quick add butt0n
					$('a.quickAddBtn').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
					$('a.quickAddBtn').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
						$("#edProdModalDialog .modal-content").html('');
						$("#edProdModalDialog .modal-content").load('manage/product/', function() {
							$("#edProdModalDialog").modal("show");
						});
					});
					
					/**
					 * Bulk action events
					 */
					$('a.__bulk_action').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
					$('a.__bulk_action').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
						event.preventDefault();
						var action         = $(this).attr('data-action'),
							productIds    = [];
	
						$(".bulk_chkbx:checked").each(function() {
							productIds.push($(this).val());
						});
						
						$.ajax({
							type : "POST",
							url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/bulk',
							dataType : "html",
							cache : false,
							processData : true,
							data: {'action': action, 'pIds': productIds},
							xhrFields : {
							  withCredentials : true
							},
							/**
							 * @param {?} textStatus
							 * @return {undefined}
							 */
							success : function(response) {
								var data = $.parseJSON(response);
								if (data.success == true) {
									$.jGrowl('Products were updated successfully', { sticky: false, theme: 'growl-success', header: 'Success'});
									$(".bulk_chkbx:checked").each(function() {
										$(this).prop('checked', false);
										switch (action) {
											case 'enable' : {
												$('#p_' + $(this).val()).find('.p_status span').removeClass('label-danger').addClass('label-success').html('Active');
												break;	
											}
											
											case 'disable' : {
												$('#p_' + $(this).val()).find('.p_status span').removeClass('label-success').addClass('label-danger').html('Disabled');
												break;	
											}
										}
									});
									
									$('#bulk_all').prop('checked', false);
								} else {
									$.jGrowl('Oops. We weren\'t able to update the products.', { sticky: false, theme: 'growl-error', header: 'Error'});
								}
								
								
							},
							/**
							 * @param {?} jqXHR
							 * @param {?} textStatus
							 * @param {?} origError
							 * @return {undefined}
							 */
							error : function(jqXHR, textStatus, origError) {
							},
							/**
							 * @return {undefined}
							 */
							complete : function() {
							}
						});
					});
				

                break;
            }

            /**
             * Product editor
             */
            case (SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR) :
            {
                var lastEdit = null,
                    hasChanges = false,
                    me = this;

                $(".multiple-uploader").pluploadQueue({
                    multiple_queues: true,
                    runtimes : 'html5, html4',
                    url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/upload-image',
                    chunk_size : '1mb',
                    unique_names : true,
                    filters : {
                        max_file_size : '10mb',
                        mime_types: [
                            {title : "Image files", extensions : "jpg,gif,png"},
                            {title : "Zip files", extensions : "zip"}
                        ]
                    },
                    init : {
                        FilesAdded: function(up, files) {
                            up.refresh();
                            up.start();
                        },
                        FileUploaded: function(up, file, info) {
                            // Called when file has finished uploading
                            response         = $.parseJSON(info.response),
                            file.status     = (response.success) ? plupload.DONE : plupload.FAILED,
                            theme             = (response.success) ? 'Success' : 'Error',
                            message         = (response.success == false) ? response.errors[0] : 'Image Uploaded Successfuly',

                            $.jGrowl(message, { sticky: false, theme: 'growl-' + theme.toLowerCase(), header: theme});

                            // Add the image
                            if (response.success == true) {
                                template = $('#uploadedImageTemplate').html();
                                template = template.split('%IMG%').join('<img alt="" src="' + response.file + '" class="upProdImg" />');
                                template = template.split('%IMG_FILE%').join(response.file);
                                template = template.split('%FILENAME%').join('W: ' + response.width + 'px / H: ' + response.height + 'px<br />');
                                template = template.split('%FILESIZE%').join(me.bytesToSize(file.size) + '<br />');
                                //template = template.split('%DESC%').join(file.lastModifiedDate);

                                $('.uploadedProductImages').prepend(template);
                                $('.uploadedProductImages .tmp_hidden').fadeIn(1200, function() {
                                    $(this).removeClass('tmp_hidden');
                                });

                                //Temp  image contaimer remove
                                $('.tmpImgRemove').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK)
                                    .on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document, function (event) {
                                        $(this).parents('.tmpImgContainer').fadeOut(300, function() {
                                            $(this).remove();
                                        });
                                });
                            }
                        }
                    },
                    rename: true,
                    sortable: true,
                    dragdrop: true,
                    views: {
                        list: true,
                        thumbs: true, // Show thumbs
                        active: 'thumbs'
                    }
                    /*,resize : {width : 320, height : 240, quality : 90}*/
                });

                
				// Manual filtering
				try {
					$(".filter-manuals").select2({
						width: "100%"
					}).on("change", function(e) { 
						var container = $(this).parents('.manuals').find('.manual-list');
						switch (Number(e.val)) {
							case 0 : { container.find('li.product-manual').fadeIn(300); break; }
							case 1 : {
								 container.find('li.product-manual.disabled').fadeIn(300, function() {
									container.find('li.product-manual.active').fadeOut(100); 	 
								 }); 	
								 break; 
							}
							case 2 : { 
								container.find('li.product-manual.active').fadeIn(300, function() {
									container.find('li.product-manual.disabled').fadeOut(100); 	
								});	
								break; 
							}
						}
					});	
				} catch (exception) {}
				
				// Add a new manual ....
				$('.uploadNewManual').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
					event.preventDefault();	
					$('#addNewManual').modal({backdrop: false, remote: $(this).attr('href'), backdrop: false});
					$('#addNewManual').on('loaded.bs.modal', function(e) {
						$('.editProdBackdrop').removeClass('hide').addClass('in');
						me.startModule(SYSTEM.APPLICATION.MAIN.MODULE.MANUAL_UPLOAD);	
					});
					
					$('#addNewManual').on('hide.bs.modal', function(e) {
						$('.editProdBackdrop').removeClass('in').addClass('hide');
						$(this).removeData('bs.modal');
					});
				});
				
                me.startModule(SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR_EVENTS);


                // Multi select
                $('.multi-select-all').multiselect({
                    buttonClass: 'btn btn-default',
                    includeSelectAllOption: true,
                    onChange:function(element, checked){
                        $.uniform.update();
                    }
                });


                // Multi select
                $('.multi-select-search').multiselect({
                    buttonClass: 'btn btn-default',
                    includeSelectAllOption: true,
                    enableCaseInsensitiveFiltering: true,
                    filterBehavior: 'both',
                    templates: {
                         filter: '<li class="multiselect-item filter"><input class="form-control multiselect-search" type="text" placeholder="Type to filter..."/></li>'
                    },
                    onChange:function(element, checked){
                        $.uniform.update();
                    }
                });


                // Checkboxes
                $(".styled, .multiselect-container input").uniform({radioClass: 'choice', selectAutoWidth: false});
                $('.editor').wysihtml5({});
                $('.switch').bootstrapSwitch();

                /**
                 * Save btn
                 */
                $('.productSave').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
                    event.preventDefault();
                    $('.input_error').removeClass('input_error');
                    $('.errorFieldIcon').remove();
                    $('.calloutResponse').remove();

                    $.ajax({
                        type : "POST",
                        url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.PRODUCT_SAVE_URL),
                        dataType : "html",
                        cache : false,
                        processData : false,
                        data:$('#mainProductForm').serialize(), // $.param(formData, true),
                        xhrFields : {
                          withCredentials : true
                        },
                        /**
                         * @param {?} textStatus
                         * @return {undefined}
                         */
                        success : function(response) {

                            var data     = $.parseJSON(response),
                                theme    = 'growl-' + ((data.error === true) ? 'error' : 'success'),
                                callTme    = ((data.error === true) ? 'danger' : 'success'),
                                header  = (data.error === true) ? 'Error' : 'Success',
                                callout = '<div class="callout callout-%%TYPE%% fade in calloutResponse">' +
                                                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                                                '<h5>%%TITLE%%</h5>' +
                                                '<p>%%MESSAGE%%</p>' +
                                            '</div>';

                            $('.callout').remove();

                            if (Number(response.id) > 0)
                                $('input.productId').val(response.id);

                            hasChanges = data.error;

                            if (data.error === true) {
                                target = $('input[name="' + data.errorField + '"]');
                                target.addClass('input_error').focus();
                                $('<i class="icon icon-warning form-control-feedback errorFieldIcon"></i>').insertAfter(target);
                            }
                            else
                            {
                                // Set the attribute list
                                me.configure(SYSTEM.APPLICATION.MAIN.CONFIGURATION.DISTINCT_ATTRIBUTES, data.attributeList);
								$('.newManualInput').remove();
								$('.deleteManualNew').removeClass('deleteManualNew').addClass('deleteManual');
								$('.new-manual').removeClass('new-manual');
								
                                // Load the image editor
                                $.ajax({
                                    type : "POST",
                                    url : me.getVariable('currentTarget'),
                                    dataType : "html",
                                    cache : false,
                                    processData : false,
                                    success : function(response) {
                                        $(".productImagesContainer").html($(response).find('.productImagesContainer').html());
                                        me.startModule(SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR_EVENTS);
                                    }
                                  });
                            }

                            calloutMsg = callout.split('%%TYPE%%').join(callTme);
                            calloutMsg = calloutMsg.split('%%TITLE%%').join(header);
                            calloutMsg = calloutMsg.split('%%MESSAGE%%').join(data.message);
                            $.jGrowl(data.message, { sticky: false, theme: theme, header: header});
                            $(calloutMsg).insertBefore('#mainProductForm');

                            SYSTEM.APPLICATION.MAIN.prototype.onProductListingRowChange(data.product);
                        },
                        /**
                         * @param {?} jqXHR
                         * @param {?} textStatus
                         * @param {?} origError
                         * @return {undefined}
                         */
                        error : function(jqXHR, textStatus, origError) {
                        },
                        /**
                         * @return {undefined}
                         */
                        complete : function() {
                        }
                  });
                });

				/**
				 * Make Primary btn
				 */
				$('.btnMakePrimary').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
                $('.btnMakePrimary').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function(e) {
                    e.preventDefault();
					
					if ($(this).hasClass('activeManual')) {
						return false;	
					}
					
					var manualId = $(this).attr('rel-manual-id'),
						ulTarget = $(this).parents('ul')
						liTarget = $(this).parents('li');
                    $.ajax({
                        type : "POST",
                        url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/make-primary',
                        dataType : "html",
                        cache : false,
                        processData : true,
                        data: {'manualId': manualId},
                        xhrFields : {
                          withCredentials : true
                        },
                        /**
                         * @param {?} textStatus
                         * @return {undefined}
                         */
                        success : function(response) {
                            var data = $.parseJSON(response);
                            if (data.success == true) {
                                $.jGrowl('Manual set to primary successfully', { sticky: false, theme: 'growl-success', header: 'Success'});
								ulTarget.find('.status.status-success').removeClass('status-success').addClass('status-default');
								ulTarget.find('.btnMakePrimary.activeManual').removeClass('activeManual');
								liTarget.find('.status').addClass('status-success').removeClass('status-default');
								liTarget.find('.btnMakePrimary').addClass('activeManual');
								
                            } else {
                                $.jGrowl('Oops. We weren\'t able to set this manual to primary.', { sticky: false, theme: 'growl-error', header: 'Error'});
                            }
                        },
                        /**
                         * @param {?} jqXHR
                         * @param {?} textStatus
                         * @param {?} origError
                         * @return {undefined}
                         */
                        error : function(jqXHR, textStatus, origError) {
                        },
                        /**
                         * @return {undefined}
                         */
                        complete : function() {
                        }
                    });
                });
				 
				/**
				 * Delete a manual
				 */
				var deleteManualLinkTarget = null;
				$('.deleteManual').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
                $('.deleteManual').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function(e) {
                    e.preventDefault();
                    $('#confirm_deleteManual_modal').modal({backdrop: false});
                    $('#edProdModalDialog').fadeTo(300, .5);
                    deleteManualLinkTarget = $(this);
                });

                $('#confirm_deleteManual_modal').on('hide.bs.modal', function (e) {
                    $('#edProdModalDialog').fadeTo(300, 1);
                })

                $('.confirmDeleteManualBtn').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function(e) {
                    e.preventDefault();
                    $('#confirm_deleteManual_modal').modal('hide');
                    var c        = deleteManualLinkTarget,
                        manualId = c.attr('rel-manual-id'),
						targetLi = c.parents('li.product-manual');
						
                    $.ajax({
                        type : "POST",
                        url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/delete-manual',
                        dataType : "html",
                        cache : false,
                        processData : true,
                        data: {'manualId': manualId},
                        xhrFields : {
                          withCredentials : true
                        },
                        /**
                         * @param {?} textStatus
                         * @return {undefined}
                         */
                        success : function(response) {
                            var data = $.parseJSON(response),
								deleteManualLinkTarget = null;
                            if (data.success == true) {
								var targetParent = targetLi.parents('ul');
								targetLi.remove();
								
								if(targetParent.find('li:not(.noManuals)').length == 0) {
									targetParent.find('li.noManuals').removeClass('hide');
								}
								
                                $.jGrowl('Manual was successfully delete', { sticky: false, theme: 'growl-success', header: 'Image updated successfully'});
                            } else {
                                $.jGrowl('Oops. We weren\'t able to delete this manual.', { sticky: false, theme: 'growl-error', header: 'Error'});
                            }
                        },
                        /**
                         * @param {?} jqXHR
                         * @param {?} textStatus
                         * @param {?} origError
                         * @return {undefined}
                         */
                        error : function(jqXHR, textStatus, origError) {
                        },
                        /**
                         * @return {undefined}
                         */
                        complete : function() {
                        }
                    });
                }); 

                break;
            }
			
			/**
			 * Manual add events
			 */
			case (SYSTEM.APPLICATION.MAIN.MODULE.MANUAL_UPLOAD) :
			{
				// Manuals file uploader
                $(".multiple-uploader-manuals").pluploadQueue({
                    multiple_queues: true,
                    runtimes : 'html5, html4',
                    url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/upload-manual',
                    chunk_size : '1mb',
                    unique_names : true,
                    filters : {
                        max_file_size : '10mb',
                        mime_types: [
                            {title : "Manual files Types", extensions : "pdf,doc,docx,xls,xlsx"}
                        ]
                    },
                    init : {
						PostInit: function(instance) {
							$('#manualType').select2('destroy');
							$('#manualType').select2({
								width: "100%"
							});	
							
							$('#uploadedManual').val('');
							$('#uploadedManualSize').val('');
							$('#manualType').select2('val', '');
							$('#manualName').val('');
							$('#manualDescription').val('');
							$("#uploadedManualExtension").val('');
						},
                        FilesAdded: function(up, files) {
							if (files.length > 1) {
								$.jGrowl('Upload limit of 1 file. Only the first selected file was uploaded.', { sticky: true, /*theme: 'growl-error',*/ header: 'Error!' });
								this.splice(1, files.length - 1);
							}
							
							$('#uploadedManual').val('');
                            up.refresh();
                            up.start();
                        },
                        FileUploaded: function(up, file, info) {
                            // Called when file has finished uploading
                            response          = $.parseJSON(info.response),
							instanceContainer = $('#' + this.settings.container)
                            file.status       = (response.success) ? plupload.DONE : plupload.FAILED,
                            theme             = (response.success) ? 'Success' : 'Error',
                            message           = (response.success == false) ? response.errors[0] : 'Manual Uploaded Successfuly',

                            $.jGrowl(message, { sticky: false, theme: 'growl-' + theme.toLowerCase(), header: theme});
							
                            // Add the manual
                            if (response.success == true) {
								$('#uploadedManual').val(response.file);
								$('#uploadedManualSize').val(response.size / 1024); // size in KB
								$('#uploadedManualExtension').val(response.fileExt); // size in KB
							}
                        }
                    },
                    rename: true,
                    sortable: true,
                    dragdrop: true,
                    views: {
                        list: true,
                        thumbs: true, // Show thumbs
                        active: 'thumbs'
                    }
                    /*,resize : {width : 320, height : 240, quality : 90}*/
                });
				
				
				$(".manualUploadSection .__styled").uniform({ radioClass: 'choice', selectAutoWidth: false });
				
				// Save manual action...
				$('.addManual').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
				$('.addManual').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
					event.preventDefault();
					var manual = {};
						manual.productId 			= $('#uploadedManualProductId').val();
						manual.uploadedManual 		= $('#uploadedManual').val();
						manual.uploadedManualLang 	= $('#uploadedManualLang').val();
						manual.uploadedManualSize 	= $('#uploadedManualSize').val();
						manual.manualType 			= $('#manualType').select2('val');
						manual.manualName 			= $('#manualName').val();
						manual.manualDescription	= $('#manualDescription').val();
						manual.makePrimary 			= $("input:radio[name='makePrimary']:checked").val();
						manual.manualFileExtension  = $("#uploadedManualExtension").val();
							
					if (manual.uploadedManual == "") {
						$.jGrowl('Please upload a manual.', { sticky: false, theme: 'growl-error', header: 'Error'});
						return false;
					}
					
					if (manual.manualType == "") {
						$.jGrowl('Please select a manual type.', { sticky: false, theme: 'growl-error', header: 'Error'});	
						return false;
					}
					
					if (manual.manualName == "") {
						$.jGrowl('Please enter a manual name.', { sticky: false, theme: 'growl-error', header: 'Error'});	
						return false;
					}
					
					me.onAddNewManual(manual);
					$.jGrowl('Manual was added. Don\'t forget to save your changes.', { sticky: false, theme: 'growl-success', header: 'Manual Added.'});	
					$('#addNewManual').modal('hide');
				});
				
				break;	
			}

            /**
             * Product Editor Events
             */
            case (SYSTEM.APPLICATION.MAIN.MODULE.PRODUCT_EDITOR_EVENTS) :
            {
                $('.setMainImg').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function (event) {
                    event.preventDefault();
                    var imgId = $(this).attr('data-image-id');
                    $.ajax({
                        type : "POST",
                        url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/set-image-main',
                        dataType : "html",
                        cache : false,
                        processData : true,
                        data: {'imageId': imgId},
                        xhrFields : {
                          withCredentials : true
                        },
                        /**
                         * @param {?} textStatus
                         * @return {undefined}
                         */
                        success : function(response) {
                            var data = $.parseJSON(response);
                            if (data.success == true) {
                                $('.thumbnail.main').removeClass('main');
                                $('.' + imgId).addClass('main');
                                $.jGrowl('This image was set to main', { sticky: false, theme: 'growl-success', header: 'Image updated successfully'});
                            } else {
                                $.jGrowl('Oops. We weren\'t able to set this image as main.', { sticky: false, theme: 'growl-error', header: 'Error'});
                            }
                        },
                        /**
                         * @param {?} jqXHR
                         * @param {?} textStatus
                         * @param {?} origError
                         * @return {undefined}
                         */
                        error : function(jqXHR, textStatus, origError) {
                        },
                        /**
                         * @return {undefined}
                         */
                        complete : function() {
                        }
                    });
                });

                // Delete Image
                var deleteLinkTarget = null;
                $('.deleteImg').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function(e) {
                    e.preventDefault();
                    $('#confirm_deleteImg_modal .confImg').html('');
                    $('#confirm_deleteImg_modal .confImg').html('<img src="' + $(this).attr('data-image-src') + '" />');
                    $('#confirm_deleteImg_modal').modal({backdrop: false});
                    $('#edProdModalDialog').fadeTo(300, .5);
                    deleteLinkTarget = $(this);
                });

                $('#confirm_deleteImg_modal').on('hide.bs.modal', function (e) {
                    $('#confirm_deleteImg_modal .confImg').html('');
                      $('#edProdModalDialog').fadeTo(300, 1);
                })

                $('.confirmDeleteImageBtn').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function(e) {
                    $('#confirm_deleteImg_modal').modal('hide');
                    e.preventDefault();
                    var c       = deleteLinkTarget,
                        imgId   = c.attr('data-image-id');
                    $.ajax({
                        type : "POST",
                        url : me.getVariable(SYSTEM.APPLICATION.MAIN.CONFIGURATION.API_URL) + '/delete-image',
                        dataType : "html",
                        cache : false,
                        processData : true,
                        data: {'imageId': imgId},
                        xhrFields : {
                          withCredentials : true
                        },
                        /**
                         * @param {?} textStatus
                         * @return {undefined}
                         */
                        success : function(response) {
                            var data = $.parseJSON(response);
                            if (data.success == true) {
                                c.parents('.productItemImage').fadeOut(300, function() {
                                    $(this).remove();
                                });
                                $.jGrowl('This image was removed', { sticky: false, theme: 'growl-success', header: 'Image updated successfully'});
                            } else {
                                $.jGrowl('Oops. We weren\'t able to remove this image.', { sticky: false, theme: 'growl-error', header: 'Error'});
                            }
                        },
                        /**
                         * @param {?} jqXHR
                         * @param {?} textStatus
                         * @param {?} origError
                         * @return {undefined}
                         */
                        error : function(jqXHR, textStatus, origError) {
                        },
                        /**
                         * @return {undefined}
                         */
                        complete : function() {
                        }
                    });
                });

                // Add attribute section:
                $('.addAttribute').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
					event.preventDefault();
					var newAttributeId = 'nAttr_' + String(Math.random()).replace('.', '');
                    var attrCount     = {};
                        attrCount.en  = $('.attributes.en .attribute').length,
                        attrCount.fr  = $('.attributes.fr .attribute').length,
                    lang              = $(this).attr('rel-lang'),
                    attributeTemplate = '<div class="attribute">'
                                            + '<div class="col-md-6">'
                                            + ' <i class="icon-menu2 drgAttribute pull-left"></i>'
                                            + '    <input type="text" name="attributes[' + lang + '][' + attrCount[lang] + '][name]" '
											+ '      class="product_attribute pull-right ' + newAttributeId + '" '
                                            + 'style="width: 92%;" placeholder="Select / Add an Attribute" />'
                                            + '</div>'
                                            + '<div class="col-md-6">'
                                            + '  <button type="button" class="btn btn-warning btn-icon removeAttribute pull-right" '
                                            + '     title="Remove This Attribute"><i class="icon-minus-circle"></i></button>'
                                            + '  <input type="text" class="form-control attribute_value" name="attributes[' + lang + '][' + attrCount[lang] + '][value]"  '
                                            + ' placeholder="Attribute Value" style="width: 90%; float: left" />'
                                            + '</div>'
                                            + '<label class="error attribute_error hide">Please fill in the attribute fields.</label>'
                                            + '<div class="clear"></div></div>';


                    if (false == me.validateAttributes(lang)) {
                        return false;
                    }

                    $(attributeTemplate).appendTo('.attributes.' + lang);

                    /*- Attribute selection -*/
                    var ___data = me.__parseAttributeSelection();
                    $(['en', 'fr']).each(function(index, lang) {
                        var __lang = lang;
                       $('.' + __lang + ' .' + newAttributeId).select2({
                            allowClear: true,
                            data: ___data[__lang],

                            createSearchChoice:function(term, data) {
                                if ($(data).filter(function() {
                                    return this.text.localeCompare(term)===0;
                                }).length === 0) {
                                    return {id:term, text:term};
                                }
                            }
                        });
                    });
					
                    $('.removeAttribute').unbind(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK)
                        .on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, function(event) {
                            $(this).parents('.attribute').remove();
                    });

                    if ($('.attribute').length > 1) {
                        $('.attributes').sortable({
                            'items': '.attribute',
                            'handle': '.drgAttribute',
                            'placeholder': 'sortable-placeholder',
                            stop: function( event, ui ) {
                                elem = $(event.target),
                                lang = elem.hasClass('en') ? 'en' : 'fr';

                                $('.attributes.' + lang + ' .attribute').each(function(index, element) {
                                    $(this).find('input.product_attribute').attr('name', 'attributes[' + lang + '][' + index + '][name]');
                                    $(this).find('input.attribute_value').attr('name', 'attributes[' + lang + '][' + index + '][value]');
                                });
                            }
                        });
                    }
                });

									
				// Load initial attribute selectors
				var ___data = me.__parseAttributeSelection();
				$(['en', 'fr']).each(function(index, lang) {
					$('.attributes.' + lang + ' .product_attribute').select2({
						allowClear: true,
						data: ___data[lang],
	
						createSearchChoice:function(term, data) {
							if ($(data).filter(function() {
								return this.text.localeCompare(term)===0;
							}).length === 0) {
								return {id:term, text:term};
							}
						}
					});
				});

                $('.addAttribute').trigger(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);

                //
                // Category editing
                //
                $('.addCategory').on(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK, document,  function(e) {
                    me.addCategorySelectionRow(false);
                });

                //$('.addCategory').trigger(SYSTEM.APPLICATION.MAIN.STATUS.EVENT.CLICK);
                me.addCategorySelectionRow(true);
				
				$(".inputFile").uniform({});

                break;
            }

            /**
             * Conatct us form
             */
            case (SYSTEM.APPLICATION.MAIN.MODULE.FILE_UPLOADER) :
            {
                // Load the uploader...
                /*
                var objFileUploader = SYSTEM.APPLICATION.UPLOADER.initialise ({
                    element: $('#jquery-wrapped-fine-uploader')[0],
                    multiple: true,
                    autoUpload: true,
                    allowedExtensions: ['gif', 'png', 'jpg', 'jpeg'],
                    request: {
                        endpoint: "/api/v.206/upload-image/output:json"
                    },
                    callbacks: {
                        onComplete: function(id, fileName, responseJSON) {
                            if (responseJSON.success) {
                                $('<input/>').attr({
                                    type: 'hidden',
                                    name: 'attachments[' + fileName + ']',
                                    value: responseJSON.fileuploadname
                                }).appendTo('form#newsForm');

                                var li = $('<li></li>').addClass('news-img-thumb').addClass('isotope-item');
                                var span = $('<span></span>').addClass('link-zoom').appendTo(li);
                                var imgLink = $('<a></a>').addClass('fancybox').attr({
                                    'href': '/static/tmp/user-uploads/' + responseJSON.fileuploadname,
                                    'data-fancybox-group': 'gallery'
                                }).appendTo(span);
                                $('<img/>').attr({
                                    'src': '/static/tmp/user-uploads/' + responseJSON.fileuploadname,
                                    'class': 'fade',
                                    'width': 214,
                                    'height': 175,
                                    'style': 'width:214px; height:175px;'
                                }).appendTo(imgLink);
                                var contDiv = $('<div></div>').addClass('box-grey').appendTo(li);
                                $('<p></p>').html(responseJSON.fileuploadname.substring(responseJSON.fileuploadname.length - 18, responseJSON.fileuploadname.length)).appendTo(contDiv);
                                strFileSize = responseJSON.filesize;
                                if (! isNaN(responseJSON.filesize)) {
                                    strFileZise = (Number(responseJSON.filesize) / 1028) + ' MB';
                                }
                                $('<p></p>').html(strFileSize).appendTo(contDiv);
                                $('<a></a>').attr({
                                    'class': 'img-delete float-right button small blue',
                                    'data-file-name': responseJSON.fileuploadname,
                                    'data-img-id':     responseJSON.deletetoken,
                                    'style': 'position:relative'
                                }).html('delete').appendTo(contDiv);
                                $('<div></div>').addClass('clear').appendTo(contDiv);
                                $('.pf-container').isotope('insert', li);
                                $('.pf-container').isotope('reLayout');
                            }
                        }
                    },
                    debug: true
                });

                */

                /*-------------*/

                $('.img-delete').live('click', function(e) {
                    e.preventDefault();
                    var c = $(this);
                    $.ajax({
                        type        : "POST",
                        url            : '/backstore/api/v.206/delete-image/output:json',
                        dataType    : "json",
                        timeout        : 30000,
                        cache        : false,
                        processData    : true,
                        data        : {
                            token: $(this).attr('data-img-id')
                        },
                        xhrFields    : { withCredentials: true },
                        success        : function(objXHTMLResponseObject) {
                            $('.pf-container').isotope('remove', c.parents('li.news-img-thumb'));
                            $('.pf-container').isotope('reLayout');
                            c.parents('li.news-img-thumb').remove();
                            $('form#newsForm').find('input[value="' + c.attr('data-file-name') + '"]').remove();
                        },
                        error : function(jqXHR, textStatus, errorThrown) { },
                        complete    : function() { }
                    });
                });



                $(window).load(function(){
                    var $container = $('.pf-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                });
                /*-------------*/

                break;
            }
         }
     }
});


/**
 * This method throws an alert message to the user
 *
 * @access     Static
 * @param    Object objParams - Parameter settings:
 *     objParams.type [
 *         SYSTEM.APPLICATION.MAIN.STATUS.TYPE.ERROR
 *         SYSTEM.APPLICATION.MAIN.STATUS.TYPE.INFO
 *         SYSTEM.APPLICATION.MAIN.STATUS.TYPE.OK
 *     ]
 *
 *     objParams.title     - Alert box title
 *     objParams.message    - Alert box message
 * @return void
 */
SYSTEM.APPLICATION.MAIN.sendAlert = function(objParams)
{
    /*
    $('body').push({
        'type':     (typeof objParams.type !== "undefined" ? objParams.type : SYSTEM.APPLICATION.MAIN.STATUS.TYPE.INFO),
        'title':    (typeof objParams.title !== "undefined" ? objParams.title : 'Message Alert'),
        'content':     '<div style="width: 350px;">' + (typeof objParams.message !== "undefined" ? objParams.message : '') + '</div>'
    });
    */
}

function __(a, b, c) {
    return SYSTEM.APPLICATION.STATIC_INSTANCE.translate(a, b, c);
}

if (typeof window.console == "undefined") {
    window.console = { log: function() {} };
}

Array.prototype.first = function () {
    return this[0];
};

window.onerror = function()
{
    with (document) {
        try {
            getElementById('jf-preloader').style.display = 'none';
        }
        catch (e) {}
    }
}

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};
