/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-svgasimg-touchevents-setclasses !*/
// modernizr here

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
// put here your jquery file




$(document).ready(function() {

    /* Var or infos useful for all behaviour */
    var $window = $(window),
        /*$displaymenu = $('#displaymenu'),
        $navigation = $('#navigation'),*/
        $all_target_blank = $('[target="_blank"],[target="blank"]'),
        hash = window.location.hash.replace("#", ""),
        $body = $('body'),
        on_mobile = false,
        // breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/['"]+/g, ''),
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
            $this.attr('src', $this.attr('data-lazysrc'));
            $this.removeClass('.js-lazyload');
        });
    }

    /* lazy-loading */
    $window.load(function() {

        clearTimeout(lazyloadTimer);
        lazyloadTimer = setTimeout(lazyload, 250);

    });

    // secours
    setTimeout(lazyload, 2500);

    // plugin launch section

    // other tricks
  
    /*
     * Add event trackers for PDF downloads 
     */
    // data-ga="event" data-ga-category="file" data-ga-action="download" data-ga-label="rocssti-sass-fr.zip"
    $all_files = $(".pdf , a[href$='.pdf'], a[href$='.zip'], a[href$='.doc'], a[href$='.docx'], a[href$='.xls'], a[href$='.xlsx'], a[href$='.ppt'], a[href$='.pptx'], a[href$='.mp3'], a[href$='.txt'], a[href$='.rar'], a[href$='.mov'], a[href$='.avi'], a[href$='.mp4'] ");
    $all_files.each(function(i) {
        var $this = $(this),
            $file_name = $this.attr('href');

        $this.attr({
            'data-ga': 'event',
            'data-ga-category': 'file',
            'data-ga-action': 'button',
            'data-ga-label': $file_name
        });
    });

    $all_tel = $('a[href^="tel:"]');
    $all_tel.each(function(i) {
        var $this = $(this),
            $tel = $this.html();

        $this.attr({
            'data-ga': 'event',
            'data-ga-category': 'tel',
            'data-ga-action': 'click',
            'data-ga-label': $tel
        });
    });

    $all_fax = $('a[href^="fax:"]');
    $all_fax.each(function(i) {
        var $this = $(this),
            $fax = $this.html();

        $this.attr({
            'data-ga': 'event',
            'data-ga-category': 'fax',
            'data-ga-action': 'click',
            'data-ga-label': $fax
        });
    });

    /*
     * Onclick management for event trackers 
     */
    $body.on("click", '[data-ga="event"]', function(event) {
        $this = $(this),
            $ga_value = $this.attr('data-ga-value');

        if (typeof $ga_value === "undefined" || $ga_value === "undefined" || $ga_value === "") {
            $ga_value = '';
        }
        if ($ga_value !== '') {
            ga('send', 'event', $this.attr('data-ga-category'), $this.attr('data-ga-action'), $this.attr('data-ga-label'), $this.attr('data-ga-value'));
        } else {
            ga('send', 'event', $this.attr('data-ga-category'), $this.attr('data-ga-action'), $this.attr('data-ga-label'));
        }

    });

    /*
     * back button without link
     */
    $body.on("click", '.js-back', function(event) {
        history.go(-1);
    });


    // perform click on data-attribute
    $body.on('click', '.js-launch_click_elt', function(event) {
        var $this = $(this),
            attribute = $this.attr('data-elt_to_click'),
            $element_to_click = $(attribute);

        $element_to_click.trigger('click');
        event.preventDefault();
    });

    // check element on data-attribute
    $body.on('click', '.js-elt_to_check', function(event) {
        var $this = $(this),
            attribute = $this.attr('data-elt_to_check'),
            $element_to_check = $(attribute);

        $element_to_check.prop('checked', true);
        event.preventDefault();
    });

    // click => value goes to input
    $body.on('click', '.js-value_toinput', function(event) {
        var $this = $(this),
            attribute = $this.attr('data-elt_to_update'),
            $element = $(attribute),
            value = $this.attr('data-value_to_send');

        $element.val(value);
        //event.preventDefault();
    });

    // select with other value => displays the block id in data-fieldset-other
    $body.on('change', '[data-fieldset-other]', function(event, additionnal) {
        var $this = $(this),
            $other_block = $('#' + $this.attr('data-fieldset-other'));

        if ($this.val() == 'Other') {
            $other_block.removeClass('hidden');
        } else {
            $other_block.addClass('hidden');
        }

    });

    // select with other value => displays the block id in data-fieldset-other
    $body.on('click', '[data-selected-blockshow],[data-selected-blockhide]', function(event, additionnal) {
        var $this = $(this),
            $block_show = $('#' + $this.attr('data-selected-blockshow')),
            $block_hide = $('#' + $this.attr('data-selected-blockhide'));

        $block_show.removeClass('hidden');
        $block_hide.addClass('hidden');

    });

    // select with other value => displays/hides the blocks selectors
    $body.on('click', '[data-blocks_toshow],[data-blocks_tohide]', function(event, additionnal) {
        var $this = $(this),
            $blocks_2show = $($this.attr('data-blocks_toshow')),
            $blocks_2hide = $($this.attr('data-blocks_tohide'));

        $blocks_2show.removeClass('hidden');
        $blocks_2hide.addClass('hidden');

    });
    
    // security for target blank
    $all_target_blank.attr('rel', 'noopener noreferrer');
    
   // link for internal scroll
   $body.on('click', '.js-scroll-button', function() {
       var $this = $(this);
       var id_to_scroll = $this.attr('href'),
           $header = $('.js-header__nav'),
           height_header = $header.height();
       if (id_to_scroll != '' && $(id_to_scroll).length) {
           $("html, body").animate({
               scrollTop: $(id_to_scroll).offset().top - height_header
           }, 250);
           $window.location.hash = id_to_scroll;
           return false;
       }
   });


});
