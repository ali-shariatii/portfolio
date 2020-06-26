$(document).ready(function(){

/* MEDIA WIDOWN */

/* GLOBAL ON SCROLL ANIMATIONS */

/* NAVIGATION */
//on scroll functions
$(window).scroll(function() {
    var scroll = $(window).scrollTop(), 
    
        homeStart = $('#home-grid').offset().top,
        homeEnd = $('#home-grid').height(),

        aboutStart = $('#about-grid-item-1').offset().top,
        aboutEnd = $('#about-grid').height(),

        workStart = $('#work-grid-item-1').offset().top,
        workEnd = $('#work-grid').height(),

        testimonialsStart = $('#testimonials-grid-shade').offset().top,
        testimonialsEnd = $('#testimonials-grid').height();

        //var contactStart = $('#contact-grid-item-1').offset().top;
        //var contactEnd = $('#contact-grid').height();

    if(scroll <= homeStart + homeEnd){
        $('#nav-grid').removeClass("dark-colored-navbar light-colored-navbar fixed-nav").addClass("hidden-fixed-nav");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#home-tab').addClass('active-tab');
    }else if(scroll >= homeEnd && scroll <= aboutStart + aboutEnd){
        $('#nav-grid').removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#about-tab').addClass('active-tab');
    }else if(scroll >= aboutEnd && scroll <= workStart + workEnd){
        $('#nav-grid').removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#work-tab').addClass('active-tab');
    }else if(scroll >= workEnd && scroll <= testimonialsStart + testimonialsEnd){
        $('#nav-grid').removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#testimonials-tab').addClass('active-tab');
    }else if(scroll > testimonialsEnd){
        $('#nav-grid').removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav");
        $("ul li a.active-tab").removeClass('active-tab');
        $('#contact-tab').addClass('active-tab');        
    }
});

//on click functions
$(function(){
    $("#nav-item-2 ul a").click(function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 850);
    });
});

$(function(){
    $(".logoPointer").click(function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 850);
    });
});

$("#nav-item-2 ul").on('click', '#home-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul").on('click', '#about-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#logo1").on('click', '#about-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul").on('click', '#work-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul").on('click', '#testimonials-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul").on('click', '#contact-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#logo2").on('click', '#contact-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

/* SECTION 1: HOME / LANDING PAGE */

/* SECTION 2: ABOUT */

/* SECTION 3: WORK */

/* SECTION 4: TESTIMONIALS */

/* SECTION 5: CONTACT */

/* SECTION 6: FOOTER */


});
