/* NAVIGATION */
//background music
var bgMusic = document.getElementById("bgMusic"),
    playBtn = document.getElementById("playBtn"),
    pauseBtn = document.getElementById("pauseBtn");

function playMusicFunc() {
    pauseBtn.classList.remove("hidden-btn");
    playBtn.classList.add("hidden-btn");
    bgMusic.play();
};

function pauseMusicFunc() {
    playBtn.classList.remove("hidden-btn");
    pauseBtn.classList.add("hidden-btn");
    bgMusic.pause();
};

//click  sound effects
var clickSnd = document.getElementById("clickSnd"),
    clickSnd2 = document.getElementById("clickSnd2");

function clickEffect() {
    clickSnd.play();
}

function clickEffect2() {
    clickSnd2.play();
}

//nagivation animation
var nav = document.getElementById("nav-grid");

/*SECTION 1: HOME / LANDING PAGE */


/*SECTION 2: ABOUT */


/*SECTION 3: WORK */

//modal1 var
var modalOpener1 = document.getElementById("modalOpener1"),
    modalCloser1 = document.getElementById("modalCloser1"),
    modalContentWindow1 = document.getElementById("modalContentWindow1"),
    modalFullWindow1 = document.getElementById("modalFullWindow1");

//modal2 var
var modalOpener2 = document.getElementById("modalOpener2"),
    modalCloser2 = document.getElementById("modalCloser2"),
    modalContentWindow2 = document.getElementById("modalContentWindow2"),
    modalFullWindow2 = document.getElementById("modalFullWindow2");

//modal1 func
modalOpener1.onclick = function() {
    modalFullWindow1.classList.remove("full-window-disappear");
    modalContentWindow1.classList.remove("content-window-disappear");
    modalFullWindow1.classList.add("full-window-appear");
    modalContentWindow1.classList.add("content-window-appear");
}

modalCloser1.onclick = function() {
    modalFullWindow1.classList.remove("full-window-appear");
    modalContentWindow1.classList.remove("content-window-appear");
    modalContentWindow1.classList.add("content-window-disappear");
    modalFullWindow1.classList.add("full-window-disappear");
}

//modal2 func
modalOpener2.onclick = function() {
    modalFullWindow2.classList.remove("full-window-disappear");
    modalContentWindow2.classList.remove("content-window-disappear");
    modalFullWindow2.classList.add("full-window-appear");
    modalContentWindow2.classList.add("content-window-appear");
}

modalCloser2.onclick = function() {
    modalFullWindow2.classList.remove("full-window-appear");
    modalContentWindow2.classList.remove("content-window-appear");
    modalContentWindow2.classList.add("content-window-disappear");
    modalFullWindow2.classList.add("full-window-disappear");
}

//close all modals on window click
window.onclick = function(event) {
    if(event.target == modalFullWindow1) {
        modalFullWindow1.classList.remove("full-window-appear");
        modalContentWindow1.classList.remove("content-window-appear");
        modalContentWindow1.classList.add("content-window-disappear");
        modalFullWindow1.classList.add("full-window-disappear");
    } else if(event.target == modalFullWindow2) {
        modalFullWindow2.classList.remove("full-window-appear");
        modalContentWindow2.classList.remove("content-window-appear");
        modalContentWindow2.classList.add("content-window-disappear");
        modalFullWindow2.classList.add("full-window-disappear");
    }
}


/*SECTION 4: TESTIMONIALS */


/*SECTION 5: CONTACT */


/*SECTION 6: FOOTER */

