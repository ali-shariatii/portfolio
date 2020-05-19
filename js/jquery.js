$(document).ready(function(){

/* NAVIGATION */
$(function(){
    $("#nav-items ul a").click(function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});

$("#nav-items ul").on('click', '#home-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items.dark-colored-navbar').removeClass('dark-colored-navbar');
    $('#nav-items.light-colored-navbar').removeClass('light-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#about-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items.dark-colored-navbar').removeClass('dark-colored-navbar');
    $('#nav-items').addClass('light-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#work-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items.light-colored-navbar').removeClass('light-colored-navbar');
    $('#nav-items').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#testimonials-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items.light-colored-navbar').removeClass('light-colored-navbar');
    $('#nav-items').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#contact-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items.light-colored-navbar').removeClass('light-colored-navbar');
    $('#nav-items').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

/* SECTION 1: HOME / LANDING PAGE */
 

/* SECTION 2: ABOUT */


/* SECTION 3: WORK */


/* SECTION 4: TESTIMONIALS */


/* SECTION 5: CONTACT */


/* SECTION 6: FOOTER */


});
