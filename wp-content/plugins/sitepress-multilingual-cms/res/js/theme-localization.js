addLoadEvent(function(){     
    jQuery('#icl_theme_localization').submit(iclSaveThemeLocalization);
    jQuery('#icl_theme_localization_type').submit(iclSaveThemeLocalizationType);
    jQuery('#icl_theme_localization_type :radio[name="icl_theme_localization_type"]').change(iclEditThemeLocalizationType);
    jQuery('#icl_theme_localization_type :checkbox[name="icl_theme_localization_load_td"]').change(iclToggleTextDoomainInput);
    
    jQuery('.check-column :checkbox').live('change', iclCheckColumn);
});

function iclSaveThemeLocalization(){
    var ajx = location.href.replace(/#(.*)$/,'');
    if(-1 == location.href.indexOf('?')){
        url_glue='?';
    }else{
        url_glue='&';
    }
    spl = jQuery(this).serialize().split('&');    
    var parameters = {};
    for(var i=0; i< spl.length; i++){        
        var par = spl[i].split('=');
        eval('parameters.' + par[0] + ' = par[1]');
    }    
    jQuery('#icl_theme_localization_wrap').load(location.href + ' #icl_theme_localization_subwrap', parameters, function(){
        fadeInAjxResp('#icl_ajx_response_fn', icl_ajx_saved);                                                 
    }); 
    return false;   
}

function iclSaveThemeLocalizationType(){
    jQuery(this).find('.icl_form_errors').fadeOut();
    var val         = jQuery(this).find('[name="icl_theme_localization_type"]:checked').val();
    var td_on       = jQuery(this).find('[name="icl_theme_localization_load_td"]').attr('checked');
    var td_value    = jQuery(this).find('[name="textdomain_value"]').val();

    if(val == 2 && td_on && !jQuery.trim(td_value)){
        jQuery(this).find('.icl_form_errors_1').fadeIn();
        return false;
    }
    
    jQuery.ajax({
        type: "POST",
        url: icl_ajx_url,
        data: "icl_ajx_action="+jQuery(this).attr('name')+"&"+jQuery(this).serialize(),
        success: function(msg){
            spl = msg.split('|');
            location.href=location.href.replace(/#(.*)$/,'');
        }
    });
    return false;         
}

function iclCheckColumn(){
    if(jQuery(this).attr('checked')){
        jQuery('#icl_strings_in_plugins :checkbox').attr('checked','checked');
    }else{
        jQuery('#icl_strings_in_plugins :checkbox').removeAttr('checked');
    }    
}

function iclEditThemeLocalizationType(){
    var val = jQuery(this).val();
    if(val == 2){
        jQuery('#icl_tt_type_extra').fadeIn();        
    }else{
        jQuery('#icl_tt_type_extra').fadeOut();
    }
}

function iclToggleTextDoomainInput(){
    var checked = jQuery(this).attr('checked');
    if(checked){
        jQuery('#icl_tt_type_extra_td').fadeIn();    
    }else{
        jQuery('#icl_tt_type_extra_td').fadeOut();
    }
}