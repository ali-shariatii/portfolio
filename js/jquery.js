$(document).ready(function(){

/* MEDIA WIDOWN */

/* GLOBAL ON SCROLL ANIMATIONS */

/* NAVIGATION */
//on scroll functions
$(window).scroll(function() {
    var scroll = $(window).scrollTop(), 
    
        homeStart = $('#home-grid').offset().top,
        homeEnd = $('#home-grid').height(),

        aboutStart = $('#about-container').offset().top,
        aboutEnd = $('#about-container').height(),

        workStart = $('#work-container').offset().top,
        workEnd = $('#work-container').height(),

        testimonialsStart = $('#testimonials-container').offset().top,
        testimonialsEnd = $('#testimonials-container').height();

        var contactStart = $('#contact-container').offset().top;
        //var contactEnd = $('#contact-grid').height();

    if(scroll <= homeStart + homeEnd){
        $("#nav-grid").removeClass("dark-colored-navbar light-colored-navbar fixed-nav").addClass("hidden-fixed-nav");
        $("#nav-item-4").removeClass("dark-colored-navbar light-colored-navbar unhidden-dropdown").addClass("hidden-dropdown");
        $("#hamburger-menu-container > div").removeClass("times").addClass("hamburger");
        $("#hamburger-menu-container").removeClass("align-container-2").addClass("align-container-1");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#home-tab, #home-tab_min").addClass('active-tab');
    }else if(scroll >= homeEnd && scroll < aboutStart + aboutEnd){
        $("#nav-grid").removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav");
        $("#nav-item-4").removeClass("dark-colored-navbar").addClass("light-colored-navbar");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#about-tab, #about-tab_min").addClass('active-tab');
    }else if(scroll >= aboutEnd && scroll <= workStart + workEnd){
        $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav");
        $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar ");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#work-tab, #work-tab_min").addClass('active-tab');
    }else if(scroll >= testimonialsStart && scroll <= testimonialsStart + testimonialsEnd){
        $("#nav-grid").removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav");
        $("#nav-item-4").removeClass("dark-colored-navbar").addClass("light-colored-navbar");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#testimonials-tab, #testimonials-tab_min").addClass('active-tab');
    }else if(scroll >= contactStart){
        $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav");
        $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar");
        $("ul li a.active-tab").removeClass('active-tab');
        $("#contact-tab, #contact-tab_min").addClass('active-tab');        
    }
});

//on click functions
$(function(){
    $("#nav-item-2 ul a, #nav-item-4 ul a").click(function(){
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

$("#nav-item-2 ul, #nav-item-4 ul").on('click', '#home-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul, #nav-item-4 ul").on('click', '#about-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#logo1").on('click', '#about-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul, #nav-item-4 ul").on('click', '#work-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul, #nav-item-4 ul").on('click', '#testimonials-tab', function(){
    $("ul li a.active-tab").removeClass('active-tab');
    $(this).addClass('active-tab');
});

$("#nav-item-2 ul, #nav-item-4 ul").on('click', '#contact-tab', function(){
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
