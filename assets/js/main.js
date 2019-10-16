(function($){
    "use strict";
    // blog Slides
		var owl = $('#blog2slider');
		owl.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			responsive: {
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
				},
                1500:{
                    items:3,
				}
			}
		});
    
    
    // about Slides
		var owl = $('.about-slider');
		owl.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			responsive: {
				0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                1200:{
                    items:1,
				},
                1500:{
                    items:1,
				}
			}
		});
    
    // testimonail Slides
		var owl = $('.testimonail2');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: true,
			dots:false,
			responsive:{
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:1,
                },
                1500:{
                    items:1,
				}
			}
		});
    
    	// Works Slides
		var owl = $('.works-slides');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: false,
			dots:false,
			nav: true,
			navText: [
				"<i class='fa fa-chevron-left'></i>",
				"<i class='fa fa-chevron-right'></i>"
			 ],
			autoplayHoverPause: true, 
			responsive:{
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:4,
                },
                1500:{
                    items:4,
				}
			}
		});
       // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});      
			// testimonail Slides
		  $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
		
			
			// addmition Slides
		var owl = $('.addmition-slider');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: true,
			dots:false,
			responsive:{
				0:{
                    items:1,
                },
				480:{
                    items:1,
                },
                768:{
                    items:1,
                },
                1200:{
                    items:5,
                },
                1500:{
                    items:5,
				}
			}
		});
    
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});

		// Boxes Slides
		var owl = $('.boxes-slides');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: true,
			dots:false,
			responsive:{
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:4,
                }
			}
		});
    
    // Team Slides
		var owl = $(".team-slider");
		owl.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			responsive: {
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:4,
				},
                1500:{
                    items:5,
				}
			}
		});

		
		// Feedback Carousel
		var $imagesSlider = $(".feedback-slides .client-feedback>div"),
		$thumbnailsSlider = $(".client-thumbnails>div");

		// images options
		$imagesSlider.slick({
			speed:300,
			slidesToShow:1,
			slidesToScroll:1,
			cssEase:'linear',
			fade:true,
			autoplay: true,
			draggable:true,
			asNavFor:".client-thumbnails>div",
			prevArrow:'.client-feedback .prev-arrow',
			nextArrow:'.client-feedback .next-arrow'
		});

		// Thumbnails options
		$thumbnailsSlider.slick({
			speed:300,
			slidesToShow:5,
			slidesToScroll:1,
			cssEase:'linear',
			autoplay: true,
			centerMode:true,
			draggable:false,
			focusOnSelect:true,
			asNavFor:".feedback-slides .client-feedback>div",
			prevArrow:'.client-thumbnails .prev-arrow',
			nextArrow:'.client-thumbnails .next-arrow',
		});
		// index3 slider
		 $('.single-image-slide').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        });
		var $caption = $('.feedback-slides .caption');

		var captionText = $('.client-feedback .slick-current img').attr('alt');
		updateCaption(captionText);
		$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$caption.addClass('hide');
		});

		$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			captionText = $('.client-feedback .slick-current img').attr('alt');
			updateCaption(captionText);
		});

		function updateCaption(text) {
			// if empty, add a no breaking space
			if (text === '') {
				text = '&nbsp;';
			}
			$caption.html(text);
			$caption.removeClass('hide');
		}
    // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.apexa-nav').addClass("is-sticky");
            }
            else{
                $('.apexa-nav').removeClass("is-sticky");
            }
            // Go to Top
              var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
               //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});
    
 /****************
	 *   Couter up  *
	 ****************/
	var $element = $('.counter');
	if ($element.length > 0) {
		$element.counterUp({
			delay: 10,
			time: 1000
		});
	}

    $element.on("click", function () {
        var $scrollElement = $("html, body");
        $scrollElement.animate({
            scrollTop: 0
        }, 600);
        return false;
    }); 
	$(function () {
	var wind = $(window);

	/*==================================
	ScrollIt Setup
	====================================*/

	$.scrollIt({
		upKey: 38, // key code to navigate to the next section
		downKey: 40, // key code to navigate to the previous section
		easing: 'swing', // the easing function for animation
		scrollTime: 600, // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null, // function(pageIndex) that is called when page is changed
		topOffset: -15 // offste (in px) for fixed top navigation
	});
});
      $('.odometer').appear(function(e) {
					var odo = $(".odometer");
					odo.each(function() {
						var countNumber = $(this).attr("data-count");
						$(this).html(countNumber);
					});
				});
         // init
         $(".cdev").circlos();
      $(function(){
                $("#video").videoPopup({
                    autoplay: 1,
                    controlsColor: 'white',
                    showVideoInformations: 0,
                    width: 1000,
                    customOptions: {
                        rel: 0,
                        end: 60
                    }
                });
                $("#video2").videoPopup();
            });
	// Document ready function	
	jQuery(document).on('ready', function () {
		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });
      
        
         
	});
// Window Load  function	
	$(window).on ('load', function (){
        // WOW JS
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
        	$('.preloader').fadeOut();
          jQuery('#loading').fadeOut('slow');
     $('body').delay(350).css({'overflow':'visible'})

        /***************************
         *   Header Fixed  *
         ***************************/
     $(function(){
            if ($(this).scrollTop() > 1) {
                $('header').addClass("header-small");
            } else {
                $('header').removeClass("header-small");
            }
        });
        
	});


	var vid = "SWqivKFu6XQ", // "iGpuQ0ioPrM",
    streams,
    video_focused = true,
    video_tag = $("#video"),
    video_obj = video_tag.get(0);
$.get("https://images"+~~(Math.random()*33)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D" + vid, function(data) {
console.log(data);
    if (data) {
        streams = parse_youtube_meta(data);
        video_tag.attr({
            src: streams['1080p'] || streams['720p'] || streams['360p']
        });

        document.addEventListener("visibilitychange", function() {
            video_focused = !video_focused ? video_obj.play() : video_obj.pause();
        });
    } else {
    		$('pre').text('Youtube API Error');
    }
});

function parse_youtube_meta(rawdata) {
    var data = parse_str(rawdata),
        streams = (data.url_encoded_fmt_stream_map + ',' + data.adaptive_fmts).split(','),
        result = {};
    streams.forEach(function(s) {
        var stream = parse_str(s),
            itag = stream.itag * 1,
            quality = false,
            itag_map = {
                18: '360p',
                22: '720p',
                37: '1080p',
                38: '3072p',
                82: '360p3d',
                83: '480p3d',
                84: '720p3d',
                85: '1080p3d',
                133: '240pna',
                134: '360pna',
                135: '480pna',
                136: '720pna',
                137: '1080pna',
                264: '1440pna',
                298: '720p60',
                299: '1080p60na',
                160: '144pna',
                139: "48kbps",
                140: "128kbps",
                141: "256kbps"
            };
        //if (stream.type.indexOf('o/mp4') > 0) console.log(stream);
        if (itag_map[itag]) result[itag_map[itag]] = stream.url;
    });
    return result;
};

function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
        var paramSplit = param.split('=').map(function(value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}    
}(jQuery));


