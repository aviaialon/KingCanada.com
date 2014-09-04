/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function




/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {



// Mobile menu
$( "#mobile-menu" ).click(function(event) {
	event.preventDefault();
	$('#navcase').slideToggle(100);
});



// Advanced search
$( "#AdvancedSearch" ).click(function(event) {
	event.preventDefault();
	$('#AdvancedSearch-hidden').slideToggle(100);
	$(this).hide();
});


/*bxslider activation*/

  $('.bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});

/* dropdown */

$('.dd-sub-nav').toggleClass('dd-visible');

$('.dd-parent').click(function() {
	$('.dd-sub-nav').toggleClass('dd-visible');
});

$('.dd-sub-nav a').click(function() {
	$('.dd-sub-nav').toggleClass('dd-visible');
});


/*column divider*/

$(function($) {
    var num_cols = 3,
    container = $('.split-list'),
    listItem = 'li',
    listClass = 'sub-list';
    container.each(function() {
        var items_per_col = new Array(),
        items = $(this).find(listItem),
        min_items_per_col = Math.floor(items.length / num_cols),
        difference = items.length - (min_items_per_col * num_cols);
        for (var i = 0; i < num_cols; i++) {
            if (i < difference) {
                items_per_col[i] = min_items_per_col + 1;
            } else {
                items_per_col[i] = min_items_per_col;
            }
        }
        for (var i = 0; i < num_cols; i++) {
            $(this).append($('<ul ></ul>').addClass(listClass));
            for (var j = 0; j < items_per_col[i]; j++) {
                var pointer = 0;
                for (var k = 0; k < i; k++) {
                    pointer += items_per_col[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
    });
});






$(document).ready(function () {
    $('#productSwap').on('click', 'a', function () {
        var $li = $(this).closest('li');
        if($li.is('.current')){
            return;
        }
        
        $('.current').not( $(this).closest('li').addClass('current') ).removeClass('current');
        // fade out all open subcontents
        $('.submenugroup:visible').hide(600);
        // fade in new selected subcontent
        $('.submenugroup[id=' + $(this).attr('data-id') + ']').show(600);
    }).find('a:first').click();
	
	
	// Products menu:
	$('.dropcontainer_demo2').on('click', 'li a', function (event) {
		event.preventDefault();
		var target 	  = $(this),
			li 		  = target.parents('li'),
			container = $('#' + target.attr('data-id'));
			console.log(target);
		if (true == target.hasClass('current') || (container.length == 0)) return false;
		$('.dropcontainer_demo2 li.current').removeClass('current') && $('.submenugroup').hide(600);
		li.addClass('current') && container.show(600);
	}).find('a[data-id^=option]:eq(0)').trigger('click');
});


			

/* Wide Submenu functionality */



	$('.submenugroup').hide();
		$('#option1').show();
		
		
		
	$('.selectMe input').change(function () {
        $('.submenugroup').hide();
        $('#'+$(this).val()).show();
    });

	
	$( '#manualsToggle' ).click(function () {
	  if ( $( '#manualsList' ).is( ":hidden" ) ) {
		$( '#manualsList' ).slideDown( "slow" );
	  } else {
		$( '#manualsList' ).slideUp();
	  }
	});
	
	
	$('.submenuFull').hide();
	
$('.productsTrigger').click(function(){
	if ( $( '#productsMenu' ).is( ":hidden" ) ) {
		$('.submenuFull').slideUp();
		$( '#productsMenu' ).slideDown( "slow" );
		
		if ($(window).width() < 641) {
			$('#navcase').slideUp(100);
		}
	
	  } else {
		$( '#productsMenu' ).slideUp();
	  }
});

$('.manualsTrigger').click(function(){
	
	if ( $( '#manualsMenu' ).is( ":hidden" ) ) {
		$('.submenuFull, #manualsList').slideUp();
		$( '#manualsMenu' ).slideDown( "slow" );
	  } else {
		$( '#manualsMenu' ).slideUp();
	  }
	
	
    var numitems =  $("#selectMe li").length;
    $("ul#selectMe").css("column-count",numitems/4);
	
});
	
  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  loadGravatars();

  /**  
   * Wishlist handling...
   */
   $('.wishListAction').on('click', document, function(event) {
	  	event.preventDefault(); 
		apiUrl = $(this).attr('href'),
		target = $(this);
		$.ajax({
			type : "POST",
			url : apiUrl,
			dataType : "html",
			cache : false,
			processData : true,
			data: {},
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
					switch (data.action) {
						case 'add' : {
							target.attr('href', data.rmvUrl);
							if (target.parents('.wishListItem').length == 0) {
								target.text('Remove from wishlist');
							}
							break;	
						}
						
						case 'remove' : {
							target.attr('href', data.addUrl);
							if (target.parents('.wishListItem').length) {
								target.parents('.wishListItem').fadeOut(300, function() {
									$(this).remove();	
								});	
							} else {
								target.text('Add to wishlist');	
							}
							break;	
						}
					}
				} else {
					// Handle something when wrong here...
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
   
}); /* end of as page load scripts */
