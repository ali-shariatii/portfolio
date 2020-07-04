//  \_(o_o)_/


$(document).ready(function(){

/* MEDIA WIDOW */

/* NAVIGATION & GLOBAL ON-SCROLL ANIMATIONS */
// navbar on scroll functions
$(window).scroll(function() {

    var scroll = $(window).scrollTop(),
    
        homeStart = $('#home-grid').offset().top,
        homeEnd = $('#home-grid').height(),

        aboutStart = $('#about-container').offset().top,
        aboutEnd = $('#about-container').height(),

        workStart = $('#work-container').offset().top,
        workEnd = $('#work-container').height(),

        testimonialsStart = $('#testimonials-container').offset().top,
        testimonialsEnd = $('#testimonials-container').height(),

        contactStart = $('#contact-container').offset().top;
        //var contactEnd = $('#contact-grid').height();

    if(scroll <= homeStart + homeEnd){
        $("#nav-grid").removeClass("dark-colored-navbar light-colored-navbar fixed-nav").addClass("hidden-fixed-nav shadow-filter-effect");
        $("#nav-item-4").removeClass("dark-colored-navbar light-colored-navbar unhidden-dropdown").addClass("hidden-dropdown");
        $("#hamburger-menu-container > div").removeClass("times").addClass("hamburger");
        $("#hamburger-menu-container").removeClass("align-container-2").addClass("align-container-1");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#home-tab').addClass('active-tab');
        $("#home-tab-min").addClass('active-tab');
    }else if(scroll >= homeEnd && scroll < aboutStart + aboutEnd){
        $("#nav-grid").removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav shadow-filter-effect");
        $("#nav-item-4").removeClass("dark-colored-navbar").addClass("light-colored-navbar");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#about-tab').addClass('active-tab');
        $("#about-tab-min").addClass('active-tab');
    }else if(scroll >= aboutEnd && scroll <= workStart + workEnd){
        $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav shadow-filter-effect");
        $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar ");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#work-tab").addClass('active-tab');
        $("#work-tab-min").addClass('active-tab');
    }else if(scroll >= testimonialsStart && scroll <= testimonialsStart + testimonialsEnd){
        $("#nav-grid").removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav shadow-filter-effect");
        $("#nav-item-4").removeClass("dark-colored-navbar").addClass("light-colored-navbar");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#testimonials-tab").addClass('active-tab');
        $("#testimonials-tab-min").addClass('active-tab');
    }else if(scroll >= contactStart){
        $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav shadow-filter-effect");
        $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#contact-tab").addClass('active-tab'); 
        $("#contact-tab-min").addClass('active-tab');     
    };

//global on-scroll animations
    if(scroll >= homeStart + homeEnd/2){
        $("#about-grid-item-1 h4").addClass("left-slide-in");
    };

    if(scroll >= homeStart + homeEnd*.65){
        $("#highlights-grid-item-1").addClass("scale-in");
        $("#highlights-grid-item-2").addClass("scale-in");
        $("#highlights-grid-item-3").addClass("scale-in");
    };

    if(scroll >= homeStart + homeEnd*.75){
        $("#about-grid-item-3 p").addClass("appear-in");
    };

    if(scroll >= homeStart + homeEnd*.90){
        $("#about-grid-item-4").addClass("appear-in");
    };
    
    if(scroll >= aboutStart + aboutEnd/2){
        $("#work-grid-item-1 h4").addClass("left-slide-in");
    };

    if(scroll >= aboutStart + aboutEnd*.7){
        $("#gallery-grid-item-1").addClass("scale-in");
        $("#gallery-grid-item-2").addClass("scale-in");
    };

    if(scroll >= workStart + workEnd/2){
        $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
    };

    if(scroll >= workStart + workEnd*.65){
        $("#recom-item-1").addClass("scale-in");
        $("#recom-item-2").addClass("scale-in");
        $("#recom-item-3").addClass("scale-in");
    };

    if(scroll >= workStart + workEnd*.75){
        $("#recom-item-4").addClass("appear-in");
    };
    
    if(scroll >= testimonialsStart + testimonialsEnd*.3){
        $("#contact-grid-item-1 h4").addClass("left-slide-in");
    }
    
    if(scroll >= testimonialsStart + testimonialsEnd*.6){
        $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
    };
    
});

//on click functions
    $(function(){
        $("#nav-item-2 ul a, #nav-item-4 ul a").click(function(){
            $("html, body").animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 650);
        });
    });

    $(function(){
        $(".logoPointer").click(function(){
            $("html, body").animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 650);
    });
});

//hamburger/dropdown menu
$("#nav-item-4 ul li").click(function() {
    $("#nav-item-4").removeClass("unhidden-dropdown").addClass("hidden-dropdown");
    $("#hamburger-menu-container").removeClass("align-container-2").addClass("align-container-1");
    $("#hamburger-menu-container div").removeClass("times").addClass("hamburger");
    $("#nav-grid").addClass("shadow-filter-effect");
});

$(window).on('resize', function(){
    var win = $(this); 
    if (win.width() > 991.98) { /*set this number to a size that hamburger menu is set to display none*/
        $("#nav-item-4").removeClass("unhidden-dropdown").addClass("hidden-dropdown");
        $("#hamburger-menu-container").removeClass("align-container-2").addClass("align-container-1");
        $("#hamburger-menu-container div").removeClass("times").addClass("hamburger");
        $("#nav-grid").addClass("shadow-filter-effect");
    }
});

/* SECTION 1: HOME / LANDING PAGE */

/* SECTION 2: ABOUT */

/* SECTION 3: WORK */

/* SECTION 4: TESTIMONIALS */

/* SECTION 5: CONTACT */

/* SECTION 6: FOOTER */


});
