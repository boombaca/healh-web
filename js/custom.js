/*
Theme Name: Vibrant 
Author URI: http://webthemez.com/
Description: This theme is a best responsive web template. It would be great for a corporate websites, business websites, personal blog.
License: Free to use for personal and commercial, but you need to place back link in the bottom of the template.
*/
var customScripts = {
    profile: function () {
     	 var portfolio = $('#portfolio');
		var items = $('.items', portfolio); 
		var filters = $('.filters li a', portfolio); 
	
		items.imagesLoaded(function() {
			items.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
				transitionDuration: '0.7s'
			});
		});
		
		filters.click(function(){
			var el = $(this);
			filters.removeClass('active');
			el.addClass('active');
			var selector = el.attr('data-filter');
			items.isotope({ filter: selector });
			return false;
		});            
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#features').offset().top - 75 }, "slow"); 
                return false;
            });
    }, 
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  
			$('#aboutUs').waypoint(function() {				
			$('.design').addClass( 'animated fadeInUp show' );   
			}, { offset: 350 }); 
			
			$('.features').waypoint(function() { 
			$('.phone-image').addClass( 'animated bounceIn' ); 
			$('.features-left').addClass( 'animated fadeInLeft show' );   
			$('.features-right').addClass( 'animated fadeInRight show' );  
			}, { offset: 350 });
			$('#services').waypoint(function() {    
			$('.serviceBox').addClass( 'animated fadeInRight show' );  
			$('.owl-wrapper-outer').addClass( 'animated fadeInRight show' ); 
			}, { offset: 350 });
			$('#work').waypoint(function() {    
			 $('#portfolio').addClass( 'animated fadeInRight show' ); 
			}, { offset: 350 });
			
			
		},
		fitText: function(){			  
				setTimeout(function() {			
				$('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '40px' });			
				}, 100);
		},
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox(); 
        customScripts.owlSlider();
		customScripts.waySlide();
		customScripts.fitText();
        customScripts.bannerHeight();
    }
}
var reasons = [
	"Join your palms together and take a deep breath. Lift your arms<br>up while slightly bending backward, you can push the pelvis forward a little,<br>stretch back and lengthen the spine. Keep the biceps close to your<br>ears while simultaneously stretching the whole body up from the heels.",
	"Exhale and bend forward to touch your toes with your fingers.<br>You can bend your knees initially if necessary. Do not bend your spine and keep<br> your neck and shoulders relaxed. Try to touch the floor with your<br>fingers, pressing into your heels softly. Inhale while coming back up.",
	"After coming back from Hasta Padasana, bend your knees slightly<br> and rest your palms on the floor in line with your feet. Inhale and bring your<br> right knee towards the right side of your chest while stretching<br>the left leg backward. Balance your body and raise your head facing forward.",
	"From the Ashwa Sanchalanasana, inhale and bring your right leg <br>back, next to the left leg. Keep your hands under your shoulders, keeping <br>your body parallel to the ground. Your entire body should be in one <br>straight line. Breathe and balance.",
	"Also known as salutations using eight points or parts.<br>To perform this pose, exhale and bring your knees down to the floor. Rest your chin<br> on the floor and raise your hips slightly from the ground. Both your<br> hands, knees, chin and the chest should touch the floor while your posterior <br>should be suspended in the air. Breathe and hold the position for as long as comfortable.",
	"Gently slide forward and rest your legs and abdomen flat<br> on the ground. Place your palms close to your chest and while inhaling apply the<br> pressure on the hand and slowly raise the upper body, your pelvic <br>region touching the ground. Keep your shoulders away from your ears, feet tucked <br>in, and look forward. Your head and torso should resemble a cobra with a raised hood.",
	"Lie down, releasing your chest from the Bhujangasana, your <br>back facing the ceiling. Exhale and lift your hips gently to form an inverted ‘V’.<br> Straighten your elbows and knees while trying to keep your <br>heels on the ground. With every exhale and inhale, go deeper into the stretch.<br> Look towards your navel.",
	"Gran Telescopio Canarias   Diameter: 10.4 meters Location: La Palma, Canary Islands, Spain ",
	"The Giant Magellan Telescope   Diameter: 24.5 m Location: Vallenar, Chile Estimated Completion: 2025 ",
	"Thirty Meter Telescope   Diameter: 30 Meters Location: Mauna Kea, Hawaii Estimated Completion: 2027",
	"1. European Extremely Large Telescope   Diameter: 39.3 Meters Location: Cerro Armazones, Chile Estimated Completion: 2024",
	"The end"
	  ];
	  var images = [
		"https://media0.giphy.com/media/li0vU9ISWsiv09mTT7/giphy.gif?cid=790b7611d97b146257f0d1298331a4b5715898a704a71dd0&rid=giphy.gif&ct=g",
		"https://media4.giphy.com/media/BZOOJOBZkRXI8MkJaM/giphy.gif?cid=790b761187a706c41f4be70aa68edde38bf6236d0bb60bf6&rid=giphy.gif&ct=g",
		"https://media2.giphy.com/media/2CTrrxtbuFp3OPUsif/giphy.gif?cid=790b761107a55d03b8cc7059028688e7dc0a24c639db8d8e&rid=giphy.gif&ct=g",
		"https://media0.giphy.com/media/m0YMLJgthe6ZjhLkCx/giphy.gif?cid=790b76114ff172d6105b77229993b0dea7992a1ddc082776&rid=giphy.gif&ct=g",
		"https://media2.giphy.com/media/cEDro4gL0EM495ylTT/giphy.gif?cid=790b76116472a6ba4d831b5ff496e32a5590600f2b7fb56a&rid=giphy.gif&ct=g",
		"https://media1.giphy.com/media/57f30dUezNYw5K4xoD/giphy.gif?cid=790b761103b86d6304218900b790bea7a4ae1c494c60e026&rid=giphy.gif&ct=g",
		"https://media4.giphy.com/media/5sMb19bVn83GhyXM6F/giphy.gif?cid=790b7611ca4dfa07016831df83e04207e68ed153e562a494&rid=giphy.gif&ct=g",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Gran-Telescopio-Canarias.jpg?w=750&ssl=1",
		"https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/Giant-Magellan-Telescope.jpg?w=750&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/TMT-primary-mirror.jpg?w=750&ssl=1",
		"https://i0.wp.com/www.rankred.com/wp-content/uploads/2018/12/Extremely-Large-Telescope.jpg?w=750&ssl=1",
		"https://www.evohair.com/media/wysiwyg/evo_blog/evo_hair_the_end_moon.1433134259.gif"
		  ];
	  
		  var i = 0;
		  function nextslide() { 
			document.getElementById("reasontext").innerHTML = reasons[i];
			document.getElementById("album").src = 
			  images[i];
			i++;
		  }
		  
$('document').ready(function () {
    customScripts.init();
	$('.features-left, .features-right, .design, .serviceBox, .owl-wrapper-outer, #portfolio').css('opacity','0');
});
