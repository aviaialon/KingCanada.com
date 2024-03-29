jQuery(document).ready(function(){
    if(jQuery('#category-adder').html()){
        jQuery('#category-adder').prepend('<p>'+icl_cat_adder_msg+'</p>');
    }
    jQuery('select[name="icl_post_language"]').change(iclPostLanguageSwitch);
    //jQuery('#noupdate_but input[type="button"]').click(iclSetDocumentToDate);
    jQuery('select[name="icl_translation_of"]').change(function(){jQuery('#icl_translate_options').fadeOut();});
    jQuery('#icl_dismiss_help').click(iclDismissHelp);
    jQuery('#icl_dismiss_upgrade_notice').click(iclDismissUpgradeNotice);
    jQuery('a.icl_toggle_show_translations').live('click', iclToggleShowTranslations);
    
    icl_tn_initial_value   = jQuery('#icl_post_note textarea').val();
    jQuery('#icl_post_add_notes h4 a').live('click', iclTnOpenNoteBox);
    jQuery('#icl_post_note textarea').live('keyup', iclTnClearButtonState);
    jQuery('#icl_tn_clear').live('click', function(){jQuery('#icl_post_note textarea').val('');jQuery(this).attr('disabled','disabled')});
    jQuery('#icl_tn_save').live('click', iclTnCloseNoteBox);
    
    jQuery('#icl_pt_hide').click(iclHidePTControls);
    jQuery('#icl_pt_show').click(iclShowPTControls);
    
    jQuery('#icl_pt_controls ul li :checkbox').live('change', function(){
        if(jQuery('#icl_pt_controls ul li :checkbox:checked').length){
            jQuery('#icl_pt_send').removeAttr('disabled');
        }else{
            jQuery('#icl_pt_send').attr('disabled', 'disabled');
        }
        iclPtCostEstimate();
    });
    jQuery('#icl_pt_send').live('click', iclPTSend);

    /* needed for tagcloud */
    oldajaxurl = false;
    
    jQuery("#icl_make_translatable_submit").live('click', icl_make_translatable);
    
    icl_admin_language_switcher();
    
    jQuery('#addtag').ajaxSuccess(function(evt, request, settings) {
        if(settings.data == undefined)  return;
        
        if(settings.data.search('action=add-tag') != -1){
            jQuery('#icl_subsubsub').load(location.href + ' #icl_subsubsub', function(resp){
                var p1 = resp.indexOf('<span id="icl_subsubsub">');
                var p2 = resp.indexOf('<\\/span>', p1);
                jQuery('#icl_subsubsub').html(resp.substr(p1+25, p2-p1-25).replace(/\\/g, ''));    
            });
        }
        
        if(settings.data.search('action=add-tag') != -1 && settings.data.search('source_lang%3D') != -1) {

            var taxonomy = '';
            var vars = settings.data.split("&"); 
            for (var i=0; i<vars.length; i++) { 
                var pair = vars[i].split("="); 
                if (pair[0] == 'taxonomy') { 
                  taxonomy = pair[1];
                  break; 
                }             
            }

            jQuery('#icl_tax_'+taxonomy+'_lang .inside').html(icl_ajxloaderimg);
            jQuery.ajax({
                type:'GET',
                url : location.href.replace(/&trid=([0-9]+)/, ''),
                success: function(msg){
                    jQuery('#icl_tax_adding_notice').fadeOut();
                    jQuery('#icl_tax_'+taxonomy+'_lang .inside').html(jQuery(msg).find('#icl_tax_'+taxonomy+'_lang .inside').html());                            
                }
            })
        }        
    });
    
    jQuery('a.icl_user_notice_hide').click(icl_hide_user_notice);
    
    jQuery('#icl_translate_independent').click(function(){
        jQuery(this).attr('disabled', 'disabled').after(icl_ajxloaderimg);            
        jQuery.ajax({type: "POST",url: icl_ajx_url,
            data: "icl_ajx_action=reset_duplication&post_id="+jQuery('#post_ID').val() + '&_icl_nonce=' + jQuery('#_icl_nonce_rd').val(),
            success: function(msg){location.reload()}});
    });
    jQuery('#icl_set_duplicate').click(function(){
        if(confirm(jQuery(this).next().html())){
            jQuery(this).attr('disabled', 'disabled').after(icl_ajxloaderimg);            
            jQuery.ajax({type: "POST",url: icl_ajx_url,
            data: "icl_ajx_action=set_duplication&post_id="+jQuery('#post_ID').val() + '&_icl_nonce=' + jQuery('#_icl_nonce_sd').val(),
            success: function(msg){location.reload()}});
        }
        
    });
    
    jQuery('#post input[name="icl_dupes[]"]').change(function(){
        if(jQuery('#post input[name="icl_dupes[]"]:checked').length > 0){
            jQuery('#icl_make_duplicates').show().removeAttr('disabled');        
        }else{
            jQuery('#icl_make_duplicates').hide().attr('disabled', 'disabled');        
        }
    })
    jQuery('#icl_make_duplicates').click(function(){
        var langs = new Array();
        jQuery('#post input[name="icl_dupes[]"]:checked').each(function(){langs.push(jQuery(this).val())});
        langs = langs.join(',');
        jQuery(this).attr('disabled', 'disabled').after(icl_ajxloaderimg);            
        jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,data: "icl_ajx_action=make_duplicates&post_id=" + jQuery('#post_ID').val() + '&langs=' + langs + '&_icl_nonce=' + jQuery('#_icl_nonce_mdup').val(),
            success: function(msg){location.reload()}});
    })
    
    jQuery('#wpml_als_help_link').live('click', function(){
        jQuery('#wp-admin-bar-WPML_ALS').removeClass('hover');
        jQuery('#icl_als_help_popup').css('left', jQuery('#wp-admin-bar-WPML_ALS').position().left-10);
        jQuery('#icl_als_help_popup').show();
    });
        
    icl_popups.attach_listeners();
                
    if(jQuery('#icl_slug_translation').length){
        iclSaveForm_success_cb.push(function(form, response){
            if(form.attr('name') == 'icl_slug_translation'){
                if(response[1] == 1){
                    jQuery('.icl_slug_translation_choice').show();
                }else{
                    jQuery('.icl_slug_translation_choice').hide();
                }
            }else if(form.attr('name') == 'icl_custom_posts_sync_options'){
                jQuery('.icl_st_slug_tr_warn').hide();
            }
        });
    }
    jQuery('#icl_custom_posts_sync_options').submit(function(){
        iclHaltSave = false;
        jQuery('.icl_slug_translation_choice input[type=text]').removeClass('icl_error_input');
        jQuery('#icl_ajx_response_cp').html('').fadeOut()
        jQuery('.icl_slug_translation_choice input[type=text]').each(function(){
            
            if(jQuery(this).is(':visible') && jQuery.trim(jQuery(this).val()) == ''){
                jQuery(this).addClass('icl_error_input');
                iclHaltSave = true;    
            }
            
        })
                      
        if(iclHaltSave){
            jQuery('#icl_ajx_response_cp').html('Errors').fadeIn();
        }
    });     
    jQuery('#icl_slug_translation').submit(iclSaveForm);     
    jQuery('.icl_slug_translation_choice :checkbox').change(function(){
        var checked = jQuery(this).attr('checked') == 'checked';
        if(checked){            
            jQuery(this).parents().next().show();    
        }else{
            jQuery(this).parent().next().hide();
        }
    })   
    jQuery('.icl_sync_custom_posts').change(function(){
        var val = jQuery(this).val();
        if(val == 1){
            if(jQuery(':checkbox[name=icl_slug_translation_on]').attr('checked')=='checked'){
                jQuery(this).parents().eq(2).next().show();
            }
        }else{
            jQuery(this).parents().eq(2).next().hide();
        }
        
    })
    
    jQuery('.icl_error_input').live('focus', function(){jQuery(this).removeClass('icl_error_input')});
    
});

var icl_tn_initial_value   = '';

window.onbeforeunload = function() { 
    if(icl_tn_initial_value != jQuery('#icl_post_note textarea').val()){
        return jQuery('#icl_tn_cancel_confirm').val();
    }
}

function fadeInAjxResp(spot, msg, err){
    if(err != undefined){
        col = jQuery(spot).css('color');
        jQuery(spot).css('color','red');
    }
    jQuery(spot).html('<span>'+msg+'<span>');
    jQuery(spot).fadeIn();
    window.setTimeout(fadeOutAjxResp, 3000, spot);
    if(err != undefined){
        jQuery(spot).css('color',col);
    }
}

function fadeOutAjxResp(spot){
    jQuery(spot).fadeOut();
}

var icl_ajxloaderimg = '<img src="'+icl_ajxloaderimg_src+'" alt="loading" width="16" height="16" />';

var iclHaltSave = false; // use this for multiple 'submit events'
var iclSaveForm_success_cb = new Array();
function iclSaveForm(){
    
    if(iclHaltSave){
        return false;
    }
    var formname = jQuery(this).attr('name');
    jQuery('form[name="'+formname+'"] .icl_form_errors').html('').hide();
    ajx_resp = jQuery('form[name="'+formname+'"] .icl_ajx_response').attr('id');
    fadeInAjxResp('#'+ajx_resp, icl_ajxloaderimg);
    jQuery.ajax({
        type: "POST",
        url: icl_ajx_url,
        data: "icl_ajx_action="+jQuery(this).attr('name')+"&"+jQuery(this).serialize(),
        success: function(msg){
            spl = msg.split('|');
            if(parseInt(spl[0]) == 1){
                fadeInAjxResp('#'+ajx_resp, icl_ajx_saved);                                         
                for(i=0;i<iclSaveForm_success_cb.length;i++){
                    iclSaveForm_success_cb[i](jQuery('form[name="'+formname+'"]'), spl);    
                }
            }else{                        
                jQuery('form[name="'+formname+'"] .icl_form_errors').html(spl[1]);
                jQuery('form[name="'+formname+'"] .icl_form_errors').fadeIn()
                fadeInAjxResp('#'+ajx_resp, icl_ajx_error,true);
            }  
        }
    });
    return false;     
}

function iclPostLanguageSwitch(){
    var lang = jQuery(this).attr('value');
    var ajx = location.href.replace(/#(.*)$/,'');
    if(-1 == location.href.indexOf('?')){
        url_glue='?';
    }else{
        url_glue='&';
    }
    
    document.cookie= "_icl_current_language=" + lang;    
    
    if(icl_this_lang != lang){
        jQuery('#icl_translate_options').fadeOut();
    }else{
        jQuery('#icl_translate_options').fadeIn();
    }
     
    if(jQuery('#parent_id').length > 0){        
        jQuery('#parent_id').load(ajx+url_glue+'lang='+lang + ' #parent_id option',{lang_switch:jQuery('#post_ID').attr('value')}, function(resp){
            tow1 = resp.indexOf('<div id="translation_of_wrap">');
            tow2 = resp.indexOf('</div><!--//translation_of_wrap-->');                        
            jQuery('#translation_of_wrap').html(resp.substr(tow1+31, tow2-tow1-31));                   
            if(-1 == jQuery('#parent_id').html().indexOf('selected="selected"')){
                jQuery('#parent_id').attr('value','');
            }        
        });
    }else if(jQuery('#categorydiv').length > 0){
        jQuery('.categorydiv').hide();
        var ltlhlpr = document.createElement('div');
        ltlhlpr.setAttribute('style','display:none');
        ltlhlpr.setAttribute('id','icl_ltlhlpr');
        jQuery(this).after(ltlhlpr);
        jQuery('#categorydiv').slideUp();        
        
        jQuery('#icl_ltlhlpr').load(ajx+url_glue+'icl_ajx=1&lang='+lang + ' #categorydiv',{}, function(resp){ 
            tow1 = resp.indexOf('<div id="translation_of_wrap">');
            tow2 = resp.indexOf('</div><!--//translation_of_wrap-->');            
            jQuery('#translation_of_wrap').html(resp.substr(tow1+31, tow2-tow1-31));           
            jQuery('#icl_ltlhlpr').html(jQuery('#icl_ltlhlpr').html().replace('categorydiv',''));
            jQuery('#categorydiv').html(jQuery('#icl_ltlhlpr div').html());
            jQuery('#categorydiv').slideDown();            
            jQuery('#icl_ltlhlpr').remove();    
            jQuery('#category-adder').prepend('<p>'+icl_cat_adder_msg+'</p>');
            
            var tx = '';
            jQuery('.categorydiv').each(function(){
                var id = jQuery(this).attr('id');            
                var tx = id.replace(/^taxonomy-/,'');

                if(id != 'taxonomy-category'){                    
                    jQuery('#'+tx+'div').html(jQuery(resp).find('#'+tx+'div').html());
                }
                
                
                /* WP scrap */
                jQuery(".categorydiv").each(function () {
                    var this_id = jQuery(this).attr("id"),
                        noSyncChecks = false,
                        syncChecks, catAddAfter, taxonomyParts, taxonomy, settingName;
                    taxonomyParts = this_id.split("-");
                    taxonomyParts.shift();
                    taxonomy = taxonomyParts.join("-");
                    settingName = taxonomy + "_tab";
                    if (taxonomy == "category") {
                        settingName = "cats"
                    }
                    jQuery("a", "#" + taxonomy + "-tabs").click(function () {
                        var t = jQuery(this).attr("href");
                        jQuery(this).parent().addClass("tabs").siblings("li").removeClass("tabs");
                        jQuery("#" + taxonomy + "-tabs").siblings(".tabs-panel").hide();
                        jQuery(t).show();
                        if ("#" + taxonomy + "-all" == t) {
                            deleteUserSetting(settingName)
                        } else {
                            setUserSetting(settingName, "pop")
                        }
                        return false
                    });
                    if (getUserSetting(settingName)) {
                        jQuery('a[href="#' + taxonomy + '-pop"]', "#" + taxonomy + "-tabs").click()
                    }
                    jQuery("#new" + taxonomy).one("focus", function () {
                        jQuery(this).val("").removeClass("form-input-tip")
                    });
                    jQuery("#" + taxonomy + "-add-submit").click(function () {
                        jQuery("#new" + taxonomy).focus()
                    });
                    syncChecks = function () {
                        if (noSyncChecks) {
                            return
                        }
                        noSyncChecks = true;
                        var th = jQuery(this),
                            c = th.is(":checked"),
                            id = th.val().toString();
                        jQuery("#in-" + taxonomy + "-" + id + ", #in-" + taxonomy + "-category-" + id).attr("checked", c);
                        noSyncChecks = false
                    };
                    catAddBefore = function (s) {
                        if (!jQuery("#new" + taxonomy).val()) {
                            return false
                        }
                        s.data += "&" + jQuery(":checked", "#" + taxonomy + "checklist").serialize();
                        return s
                    };
                    catAddAfter = function (r, s) {
                        var sup, drop = jQuery("#new" + taxonomy + "_parent");
                        if ("undefined" != s.parsed.responses[0] && (sup = s.parsed.responses[0].supplemental.newcat_parent)) {
                            drop.before(sup);
                            drop.remove()
                        }
                    };
                    jQuery("#" + taxonomy + "checklist").wpList({
                        alt: "",
                        response: taxonomy + "-ajax-response",
                        addBefore: catAddBefore,
                        addAfter: catAddAfter
                    });
                    jQuery("#" + taxonomy + "-add-toggle").click(function () {
                        jQuery("#" + taxonomy + "-adder").toggleClass("wp-hidden-children");
                        jQuery('a[href="#' + taxonomy + '-all"]', "#" + taxonomy + "-tabs").click();
                        return false
                    });
                    jQuery("#" + taxonomy + "checklist li.popular-category :checkbox, #" + taxonomy + "checklist-pop :checkbox").live("click", function () {
                        var t = jQuery(this),
                            c = t.is(":checked"),
                            id = t.val();
                        if (id && t.parents("#taxonomy-" + taxonomy).length) {
                            jQuery("#in-" + taxonomy + "-" + id + ", #in-popular-" + taxonomy + "-" + id).attr("checked", c)
                        }
                    })
                });         
                /* WP scrap - end */    
                
            }); 
            jQuery('.categorydiv').show();                
            

            /* tagcloud */

            if (oldajaxurl == false) {
                oldajaxurl = ajaxurl;
            }
            if(-1 == ajaxurl.indexOf('?')){
                temp_url_glue='?';
            } else {
                temp_url_glue='&';
            }
            
            if (lang == icl_this_lang) {
                ajaxurl = oldajaxurl;
            } else if (-1 == ajaxurl.indexOf('lang')) {
                ajaxurl = ajaxurl+temp_url_glue+'lang='+lang;
            } else {
                ajaxurl = oldajaxurl+temp_url_glue+'lang='+lang;
            }

            jQuery('div[id^=tagsdiv-]').each(function(){
                jQuery(this).slideUp();
                jQuery(this).find('.the-tagcloud').remove();
                jQuery(this).find('.tagchecklist span').remove();
                jQuery(this).find('.the-tags').val('');
                tag_tax = jQuery(this).attr('id').substring(8);
                tagBox.get('link-'+tag_tax);
                jQuery(this).find('a.tagcloud-link').unbind().click(function(){
                    jQuery(this).siblings('.the-tagcloud').toggle();
                    return false;
                });
                jQuery(this).slideDown();
            });

            ajaxurl = oldajaxurl;
        });    
        
    }
}

function iclSetDocumentToDate(){
    var thisbut = jQuery(this);
    if(!confirm(jQuery('#noupdate_but_wm').html())) return;
    thisbut.attr('disabled','disabled');
    thisbut.css({'background-image':"url('"+icl_ajxloaderimg_src+"')", 'background-position':'center right', 'background-repeat':'no-repeat'});
    jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            data: "icl_ajx_action=set_post_to_date&post_id="+jQuery('#post_ID').val(),
            success: function(msg){
                spl = msg.split('|');
                thisbut.removeAttr('disabled');
                thisbut.css({'background-image':'none'});
                thisbut.parent().remove();
                var st = jQuery('#icl_translations_status td.icl_translation_status_msg');
                st.each(function(){
                    jQuery(this).html(jQuery(this).html().replace(spl[0],spl[1]))                     
                })
                jQuery('#icl_minor_change_box').fadeIn();
            }
        });        
}

function iclDismissHelp(){
    var thisa = jQuery(this);
    jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            data: "icl_ajx_action=dismiss_help&_icl_nonce=" + jQuery('#icl_dismiss_help_nonce').val(),
            success: function(msg){
                thisa.closest('#message').fadeOut();    
            }
    });    
    return false;
}

function iclDismissUpgradeNotice(){
    var thisa = jQuery(this);
    jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            data: "icl_ajx_action=dismiss_upgrade_notice&_icl_nonce=" + jQuery('#_icl_nonce_dun').val(),
            success: function(msg){
                thisa.parent().parent().fadeOut();    
            }
    });    
    return false;
}

function iclToggleShowTranslations(){
    jQuery('a.icl_toggle_show_translations').toggle();
    jQuery('#icl_translations_table').toggle();
    jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            data: "icl_ajx_action=toggle_show_translations&_icl_nonce=" + jQuery('#_icl_nonce_tst').val()
    });        
    return false;
}

function iclTnOpenNoteBox(){
    jQuery('#icl_post_add_notes #icl_post_note').slideDown();
    jQuery('#icl_post_note textarea').focus();
    return false;
}
function iclTnClearButtonState(){
    if(jQuery.trim(jQuery(this).val())){
        jQuery('#icl_tn_clear').removeAttr('disabled');
    }else{
        jQuery('#icl_tn_clear').attr('disabled', 'disabled');
    }  
}
function iclTnCloseNoteBox(){
    jQuery('#icl_post_add_notes #icl_post_note').slideUp('fast', function(){
        if(icl_tn_initial_value != jQuery('#icl_post_note textarea').val()){
            jQuery('#icl_tn_not_saved').fadeIn();
        }else{
            jQuery('#icl_tn_not_saved').fadeOut();
        }
    });
}

function iclShowPTControls(){
    var thisa = jQuery(this);
    jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            data: "icl_ajx_action=toggle_pt_controls&value=0&_icl_nonce=" + jQuery('#_icl_nonce_ptc').val(),
            success: function(msg){
                jQuery('#icl_pt_controls').slideDown();
                thisa.fadeOut(function(){jQuery('#icl_pt_hide').fadeIn();});                    
            }
    });
    return false;    
}

function iclHidePTControls(){
    var thisa = jQuery(this);
    jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            data: "icl_ajx_action=toggle_pt_controls&value=1&_icl_nonce=" + jQuery('#_icl_nonce_ptc').val(),
            success: function(msg){
                thisa.fadeOut(function(){
                    jQuery('#icl_pt_controls').slideUp(function(){
                        jQuery('#icl_pt_show').fadeIn()
                    });
                });
            }
    }); 
    return false;   
}

function iclPtCostEstimate(){    
    var estimate = 0;
    var words = parseInt(jQuery('#icl_pt_wc').val());
    jQuery('#icl_pt_controls ul li :checkbox:checked').each(
        function(){
            lang = jQuery(this).attr('id').replace(/^icl_pt_to_/,'');
            rate = jQuery('#icl_pt_rate_'+lang).val();
            estimate += words * rate;
        }
    )
    if(estimate < 1){
        precision = Math.floor(estimate).toString().length + 1;    
    }else{
        precision = Math.floor(estimate).toString().length + 2;
    }
    
    jQuery('#icl_pt_cost_estimate').html(estimate.toPrecision(precision));
}

function iclPTSend(){
    jQuery('#icl_pt_error, #icl_pt_success').hide();
    jQuery('#icl_pt_send').attr('disabled', 'disabled');
    
    if(jQuery('#icl_pt_controls ul li :checkbox:checked').length==0) return false;
    
    target_languages = new Array();
    var translators = new Array();
    jQuery('#icl_pt_controls ul li :checkbox:checked').each(function(){
        var thisl = jQuery(this).val();
        target_languages.push(thisl);
        translators.push(jQuery('#icl_pt_controls [name="translator\['+thisl+'\]"]').val());
    });
    
    
    jQuery.ajax({
        type: "POST",
        url: icl_ajx_url,
        dataType: 'json',
        data: "icl_ajx_action=send_translation_request&post_ids=" + jQuery('#icl_pt_post_id').val() 
            + '&icl_post_type['+ jQuery('#icl_pt_post_id').val() + ']=' + jQuery('#icl_pt_post_type').val() 
            + '&target_languages='+target_languages.join('#')
            + '&translators='+translators.join('#')
            + '&service=icanlocalize'
            + '&tn_note_'+jQuery('#icl_pt_post_id').val()+'=' + jQuery('#icl_pt_tn_note').val()
            + '&_icl_nonce=' + jQuery('#_icl_nonce_pt_' + jQuery('#icl_pt_post_id').val()).val(),
        success: function(msg){
            for(i in msg){
                p = msg[i];    
            }
            if(p.status > 0){
                location.href = location.href.replace(/#(.+)/,'')+'&icl_message=success';
            }else{
                jQuery('#icl_pt_error').fadeIn();
            }
        }
    });
    
    
}

function icl_pt_reload_translation_box(){
    jQuery.ajax({
        type: "POST",
        url: icl_ajx_url,
        dataType: 'json',
        data: "icl_ajx_action=get_translator_status&_icl_nonce=" . jQuery('_icl_nonce_gts').val(),
        success: function(){
            jQuery('#icl_pt_hide').hide();
            jQuery('#icl_pt_controls').html(icl_ajxloaderimg+'<br class="clear" />');    
            jQuery.get(location.href, {rands:Math.random()}, function(data){
                jQuery('#icl_pt_controls').html(jQuery(data).find('#icl_pt_controls').html());
                icl_tb_init('a.icl_thickbox');
                icl_tb_set_size('a.icl_thickbox');
                jQuery('#icl_pt_hide').show();
                
            })
        }
    });
}

/*
function icl_pt_reload_translation_options(){
    jQuery.ajax({
        type: "POST",
        url: icl_ajx_url,
        dataType: 'json',
        data: "icl_ajx_action=get_translator_status",
        success: function(){
            jQuery('#icl-tr-opt').html(icl_ajxloaderimg+'<br class="clear" />');    
            jQuery.get(location.href, {rands:Math.random()}, function(data){
                jQuery('#icl-tr-opt').html(jQuery(data).find('#icl-tr-opt').html());
                icl_tb_init('a.icl_thickbox');
                icl_tb_set_size('a.icl_thickbox');
            })
        }
    });
}
*/

function icl_copy_from_original(lang, trid){    
    jQuery('#icl_cfo').after(icl_ajxloaderimg).attr('disabled', 'disabled');
    
    if ( typeof tinyMCE != 'undefined' && ( ed = tinyMCE.activeEditor ) && !ed.isHidden() ) {
        var editor_type = 'rich';
    }else{
        var editor_type = 'html';
    }
    
    jQuery.ajax({
        type: "POST",
        dataType: 'json',
        url: icl_ajx_url,
        data: "icl_ajx_action=copy_from_original&lang="+lang+'&trid='+trid+'&editor_type='+editor_type+'&_icl_nonce='+jQuery('#_icl_nonce_cfo_' + trid).val(),
        success: function(msg){
            if(msg.error){
                alert(msg.error);
            }else{
                try{ // we may not have the content edtiro
                    if ( typeof tinyMCE != 'undefined' && ( ed = tinyMCE.activeEditor ) && !ed.isHidden() ) {
                        ed.focus();
                        if (tinymce.isIE)
                            ed.selection.moveToBookmark(tinymce.EditorManager.activeEditor.windowManager.bookmark);
                        ed.execCommand('mceInsertContent', false, msg.body);
                    } else {
                        if(typeof wpActiveEditor == 'undefined') wpActiveEditor = 'content';
                        edInsertContent(edCanvas, msg.body);
                    }
                }catch(err){;}
            }
            jQuery('#icl_cfo').next().fadeOut();
        }
    });
    return false;     
}

function icl_make_translatable(){
    var that = jQuery(this);
    jQuery(this).attr('disabled', 'disabled');
    jQuery('#icl_div_config .icl_form_success').hide();
    var translate = jQuery('#icl_make_translatable').attr('checked') ? 1 : 0;
    var custom_post = jQuery('#icl_make_translatable').val();
    var custom_taxs_on = new Array();
    var custom_taxs_off = new Array();
    jQuery(".icl_mcs_custom_taxs").each(function(){
        if(jQuery(this).attr('checked')){
            custom_taxs_on.push(jQuery(this).val());    
        }else{
            custom_taxs_off.push(jQuery(this).val());    
        }
        
    });

    var cfnames = new Array();
    var cfvals = new Array();    
    jQuery('.icl_mcs_cfs:checked').each(function(){
        if(!jQuery(this).attr('disabled')){
            cfnames.push(jQuery(this).attr('name').replace(/^icl_mcs_cf_/,''));
            cfvals.push(jQuery(this).val())
        }
    })
    
    jQuery.post(location.href, 
        {
                'post_id'       : jQuery('#post_ID').val(),
                'icl_action'    : 'icl_mcs_inline',
                'custom_post'   : custom_post,
                'translate'     : translate, 
                'custom_taxs_on[]'   : custom_taxs_on,
                'custom_taxs_off[]'   : custom_taxs_off,
                'cfnames[]'   : cfnames,
                'cfvals[]'   : cfvals,
                '_icl_nonce' : jQuery('#_icl_nonce_imi').val()
                                
        },
        
        function(data){
            that.removeAttr('disabled');
            if(translate){
                if(jQuery('#icl_div').length > 0){
                    icl_div_update = true;
                    jQuery('#icl_div').remove();
                }else{
                    icl_div_update = false;
                }
                
                var prependto = false;
                if(jQuery('#side-sortables').html()){
                    prependto = jQuery('#side-sortables');
                }else{
                    prependto = jQuery('#normal-sortables');
                }
                prependto.prepend(
                    '<div id="icl_div" class="postbox">' + jQuery(data).find('#icl_div').html() + '</div>'
                )
                
                jQuery('#icl_mcs_details').html(jQuery(data).find('#icl_mcs_details').html());
                
                if(!icl_div_update){
                    location.href='#icl_div';    
                }                
            }else{                
                jQuery('#icl_div').hide();                
                jQuery('#icl_mcs_details').html('');
            }
            jQuery('#icl_div_config .icl_form_success').fadeIn();                            
        }
    ); 
    
       
    return false;    
}


function icl_admin_language_switcher(){  
    jQuery('#icl-als-inside').width( jQuery('#icl-als-actions').width() - 4 );
    jQuery('#icl-als-toggle, #icl-als-inside').bind('mouseenter', function() {        
        jQuery('#icl-als-inside').removeClass('slideUp').addClass('slideDown');
        setTimeout(function() {
            if ( jQuery('#icl-als-inside').hasClass('slideDown') ) {
                jQuery('#icl-als-inside').slideDown(100);
                jQuery('#icl-als-first').addClass('slide-down');
            }
        }, 200);
    }).bind('mouseleave', function() {
        jQuery('#icl-als-inside').removeClass('slideDown').addClass('slideUp');
        setTimeout(function() {
            if ( jQuery('#icl-als-inside').hasClass('slideUp') ) {
                jQuery('#icl-als-inside').slideUp(100, function() {
                    jQuery('#icl-als-first').removeClass('slide-down');
                });
            }
        }, 300);
    });
    
    jQuery('#show-settings-link, #contextual-help-link').bind('click', function(){
        jQuery('#icl-als-wrap').toggle();
    })
}

function icl_hide_user_notice(){
    var notice = jQuery(this).attr('href').replace(/^#/, '');
    var thisa = jQuery(this);
    
    jQuery.ajax({
        type: "POST",
        dataType: 'json',
        url: icl_ajx_url,
        data: "icl_ajx_action=save_user_preferences&user_preferences[notices]["+notice+"]=1&_icl_nonce="+jQuery('#_icl_nonce_sup').val(),
        success: function(msg){
            thisa.parent().parent().fadeOut();    
        }
    });
    
    return false;
}

function icl_cf_translation_preferences_submit(cf, obj) {
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: 'action=wpml_ajax&icl_ajx_action=wpml_cf_translation_preferences&translate_action='+obj.parent().children('input:[name="wpml_cf_translation_preferences['+cf+']"]:checked').val()+'&'+obj.parent().children('input:[name="wpml_cf_translation_preferences_data_'+cf+'"]').val() + '&_icl_nonce = ' + jQuery('#_icl_nonce_cftpn').val(),
        cache: false,
        error: function(html){
            jQuery('#wpml_cf_translation_preferences_ajax_response_'+cf).html('Error occured');
        },
        beforeSend: function(html){
            jQuery('#wpml_cf_translation_preferences_ajax_response_'+cf).html(icl_ajxloaderimg);
        },
        success: function(html){
            jQuery('#wpml_cf_translation_preferences_ajax_response_'+cf).html(html);
        },
        dataType: 'html'
    });
}


/* icl popups */
var icl_popups = {
    
    attach_listeners: function(){
        jQuery('.icl_pop_info_but').click(function(){
            
            jQuery('.icl_pop_info').hide();
            var pop = jQuery(this).next();
            
            var _tdoffset = 0;
            var _p = pop.parent().parent();            
            if(_p[0]['nodeName'] == 'TD'){
                _tdoffset = _p.width() - 30;
            }
            
            pop.show(function(){
                var animate = {};
                var fold = jQuery(window).width() + jQuery(window).scrollLeft();                    
                if(fold < pop.offset().left + pop.width()){                    
                    animate.left = '-=' + (pop.width() - _tdoffset);
                };
                
                if(parseInt(jQuery(window).height() + jQuery(window).scrollTop()) < parseInt(pop.offset().top) + pop.height()){
                    animate.top = '-=' + pop.height();
                }
                if(animate) pop.animate(animate);
                
            });
        });
        
        jQuery('.icl_pop_info_but_close').click(function(){
           jQuery(this).parent().fadeOut(); 
        });
        
        
    }
    
        
}



