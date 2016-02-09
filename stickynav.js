//script to create sticky nav
jQuery(function(){
    createSticky(jQuery("#fxd-nav"));
});

function createSticky(sticky) {
    if ( $(sticky).length) {
        
        var pos = sticky.offset().top,
				pos2 = $('.prd-options').offset().top -  $('#fxd-nav').height() + 25,
				pos3 = pos2 - $('#fxd-nav').height(),
        win = jQuery(window);
        win.on("scroll", function() {


            if( win.scrollTop() > pos ) {
                sticky.addClass("stickyhead");
								sticky.removeClass("stickyhead2");
            } else {
                sticky.removeClass("stickyhead");
            } 
						 if( win.scrollTop() > pos2 ) {
                sticky.removeClass("stickyhead");
								sticky.addClass("stickyhead2");
								$('#fxd-nav #navbar').css('top', pos3 + "px");
            }
						 if( win.scrollTop() < pos2 && win.scrollTop() > pos) {
							  sticky.addClass("stickyhead");
								sticky.removeClass("stickyhead2");
								$('#fxd-nav #navbar').css('top', 0);
            }  
						           
        });         
    }
}    
