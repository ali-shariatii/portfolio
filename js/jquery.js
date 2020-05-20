$(document).ready(function(){

/* NAVIGATION */
//on scroll functions
$(window).scroll(function() {
    var scroll = $(window).scrollTop(); 
    
    var homeStart = $('#home-grid').offset().top;
    var homeEnd = $('#home-grid').height();

    var aboutStart = $('#about-grid-item-1').offset().top;
    var aboutEnd = $('#about-grid').height();

    var workStart = $('#work-grid-item-1').offset().top;
    var workEnd = $('#work-grid').height();

    var testimonialsStart = $('#testimonials-grid-shade').offset().top;
    var testimonialsEnd = $('#testimonials-grid').height();

    var contactStart = $('#contact-grid-item-1').offset().top;
    //var contactEnd = $('#contact-grid').height();

    if(scroll <= homeStart + homeEnd ){
        $('#nav-items').removeClass('dark-colored-navbar').removeClass('light-colored-navbar');
        $("ul li.active-tab").removeClass('active-tab');
        $('#home-tab').addClass('active-tab');
    }else if(scroll >= homeEnd && scroll <= aboutStart + aboutEnd){
        $('#nav-items').removeClass('dark-colored-navbar').addClass('light-colored-navbar');
        $("ul li.active-tab").removeClass('active-tab');
        $('#about-tab').addClass('active-tab');
    }else if(scroll >= aboutEnd && scroll <= workStart + workEnd){
        $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
        $("ul li.active-tab").removeClass('active-tab');
        $('#work-tab').addClass('active-tab');
    }else if(scroll >= workEnd && scroll <= testimonialsStart + testimonialsEnd){
        $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
        $("ul li.active-tab").removeClass('active-tab');
        $('#testimonials-tab').addClass('active-tab');
    }else if(scroll > testimonialsEnd){
        $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
        $("ul li.active-tab").removeClass('active-tab');
        $('#contact-tab').addClass('active-tab');        
    }
});

//on click functions
$(function(){
    $("#nav-items ul a").click(function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});

$(function(){
    $(".logo-pointer").click(function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});

$("#nav-items ul").on('click', '#home-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('dark-colored-navbar').removeClass('light-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#about-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('dark-colored-navbar').addClass('light-colored-navbar');
    $(this).addClass('active-tab');
});

$("#logo1").on('click', '#about-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('dark-colored-navbar').addClass('light-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#work-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#testimonials-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

$("#nav-items ul").on('click', '#contact-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

$("#logo2").on('click', '#contact-tab', function(){
    $("ul li.active-tab").removeClass('active-tab');
    $('#nav-items').removeClass('light-colored-navbar').addClass('dark-colored-navbar');
    $(this).addClass('active-tab');
});

/* SECTION 1: HOME / LANDING PAGE */

/* SECTION 2: ABOUT */


/* SECTION 3: WORK */

/* SECTION 4: TESTIMONIALS */


/* SECTION 5: CONTACT */


/* SECTION 6: FOOTER */


});
