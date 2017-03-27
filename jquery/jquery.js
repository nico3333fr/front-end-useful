/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-svgasimg-touchevents-setclasses !*/
// modernizr here

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
// put here your jquery file




$(document).ready(function(){
   
    /* Var or infos useful for all behaviour */
    var $window = $(window),
        /*$displaymenu = $('#displaymenu'),
        $navigation = $('#navigation'),*/
        hash=window.location.hash.replace("#",""),
        $body = $('body'),
        on_mobile = false,
        resizeTimer,
        lazyloadTimer,
        resizeTimer; // Set resizeTimer to empty so it resets on page load;

   // init
   // know if you are on mobile
   /*$displaymenu.attr({
                  'aria-controls' : 'navigation', 
                  'aria-expanded' : 'false',
                  'role' : 'button'
                  });*/   


   // on resize
   function resizeFunction() {
      // know if you are on mobile
      /*if ($displaymenu.css('display') === 'block'){
         if (on_mobile != true){
            $navigation.attr('aria-hidden', 'true');
            }
         on_mobile = true;
         }
         else { 
                $navigation.attr('aria-hidden', 'false');
                on_mobile = false;
              }*/   
    };

   // On resize, run the function and reset the timeout
   $window.resize(function() {

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 250);
   
   });
   
   resizeFunction();   


   function lazyload() {
	   var $img_lazyload = $('.js-lazyload');

	   $img_lazyload.each(function() {
            var $this = $(this);
            $this.attr('src',$this.attr('data-lazysrc'));
			      $this.removeClass('.js-lazyload');
            });
   }
   
   /* lazy-loading */
   $window.load(function(){

	      clearTimeout(lazyloadTimer);
        lazyloadTimer = setTimeout(lazyload, 250);
		 
     });
	 
	 // secours
	 setTimeout(lazyload, 2500);

   // plugin launch section
   
   // other tricks
   
   /*
    * back button without link
    */
    $body.on( "click", '.js-back', function( event ) {
        history.go( - 1);
    });


    // perform click on data-attribute
    $body.on( 'click', '.js-launch_click_elt', function( event ) {
        var $this = $(this),
            attribute = $this.attr('data-elt_to_click'),
            $element_to_click = $(attribute);

		$element_to_click.trigger('click');
        event.preventDefault();
    });

    // check element on data-attribute
    $body.on( 'click', '.js-elt_to_check', function( event ) {
        var $this = $(this),
            attribute = $this.attr('data-elt_to_check'),
            $element_to_check = $(attribute);

		    $element_to_check.prop('checked', true);
        event.preventDefault();
    });    
    
    // click => value goes to input
    $body.on( 'click', '.js-value_toinput', function( event ) {
        var $this = $(this),
            attribute = $this.attr('data-elt_to_update'),
            $element = $(attribute),
            value = $this.attr('data-value_to_send');

	      $element.val(value);
        //event.preventDefault();
    }); 
   
   // select with other value => displays the block id in data-fieldset-other
   $body.on( 'change', '[data-fieldset-other]', function( event, additionnal ) {
        var $this = $(this),
            $other_block = $('#' + $this.attr('data-fieldset-other'));
            
        if ( $this.val() == 'Other' ){
           $other_block.removeClass('hidden');
        }
        else {
              $other_block.addClass('hidden');
              }
         
   });
   
   // select with other value => displays the block id in data-fieldset-other
   $body.on( 'click', '[data-selected-blockshow],[data-selected-blockhide]', function( event, additionnal ) {
        var $this = $(this),
            $block_show = $('#' + $this.attr('data-selected-blockshow')),
            $block_hide = $('#' + $this.attr('data-selected-blockhide'));

        $block_show.removeClass('hidden');
        $block_hide.addClass('hidden');        
         
   });
   
   // select with other value => displays/hides the blocks selectors
   $body.on( 'click', '[data-blocks_toshow],[data-blocks_tohide]', function( event, additionnal ) {
        var $this = $(this),
            $blocks_2show = $($this.attr('data-blocks_toshow')),
            $blocks_2hide = $($this.attr('data-blocks_tohide'));

        $blocks_2show.removeClass('hidden');
        $blocks_2hide.addClass('hidden');        
         
   });

 
});


