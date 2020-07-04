// (`_`) _/ 


/* NAVIGATION */
//background music
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

var bgMusic = document.getElementById("bgMusic"),
    musicBtn = document.getElementById("musicBtn"),
    music = false;

function toggleMusic() {
    if (music) {
        bgMusic.pause()
    } else {
        bgMusic.play();
    }
};

bgMusic.onplaying = function() {
    musicBtn.classList.remove("playBtn");
    musicBtn.classList.add("pauseBtn");
    music = true;
};

bgMusic.onpause = function() {
    musicBtn.classList.remove("pauseBtn");
    musicBtn.classList.add("playBtn");
    music = false;
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

//hamburger/dropdown menu
var hamburgerIcon = document.getElementById("hamburgerIcon"),
    hamburgerContainer = document.getElementById("hamburger-menu-container"),
    hamMenuCont = document.getElementById("hamburger-menu-container"),
    dropDownMenu = document.getElementById("nav-item-4"),
    navGrid = document.getElementById("nav-grid");

hamburgerContainer.onclick = function() {
    if(hamburgerIcon.classList.contains("hamburger")) {
        hamburgerIcon.classList.replace("hamburger", "times");
        hamMenuCont.classList.replace("align-container-1", "align-container-2");
        dropDownMenu.classList.replace("hidden-dropdown","unhidden-dropdown");
        navGrid.classList.remove("shadow-filter-effect");
    }else {
        hamburgerIcon.classList.replace("times","hamburger");
        hamMenuCont.classList.replace("align-container-2", "align-container-1");
        dropDownMenu.classList.replace("unhidden-dropdown","hidden-dropdown");
        navGrid.classList.add("shadow-filter-effect");
    }
};

/*SECTION 1: HOME / LANDING PAGE */
function skyCity() {
    for( var i=0; i < 400; i++) {
        console.log();
        var header = document.getElementById("home-grid"),
            cityLight = document.createElement("i"),
            x = Math.floor(Math.random() * window.innerWidth * .98),
            y = Math.floor(Math.random() * window.innerHeight),
            size = Math.random() * 1.5;
            animate = Math.random() * 50;

        cityLight.style.left = x + 'px';
        cityLight.style.top = y + 'px';
        cityLight.style.width = size + 1.5 + 'px';
        cityLight.style.height = size + 1.5 + 'px';
        cityLight.style.opacity = Math.random();
        cityLight.style.animationDuration = 10 + animate + 's';
        //cityLight.style.animationDelay = animate + 's';


        header.appendChild(cityLight);

    }
}
skyCity();

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

var body = document.getElementById("body");

//modal1 func
modalOpener1.onclick = function() {
    modalFullWindow1.classList.remove("full-window-disappear");
    modalContentWindow1.classList.remove("content-window-disappear");
    modalFullWindow1.classList.add("full-window-appear");
    modalContentWindow1.classList.add("content-window-appear");
    body.classList.add("noscroll");
}

modalCloser1.onclick = function() {
    modalFullWindow1.classList.remove("full-window-appear");
    modalContentWindow1.classList.remove("content-window-appear");
    modalContentWindow1.classList.add("content-window-disappear");
    modalFullWindow1.classList.add("full-window-disappear");
    body.classList.remove("noscroll");
}

//modal2 func
modalOpener2.onclick = function() {
    modalFullWindow2.classList.remove("full-window-disappear");
    modalContentWindow2.classList.remove("content-window-disappear");
    modalFullWindow2.classList.add("full-window-appear");
    modalContentWindow2.classList.add("content-window-appear");
    body.classList.add("noscroll");
}

modalCloser2.onclick = function() {
    modalFullWindow2.classList.remove("full-window-appear");
    modalContentWindow2.classList.remove("content-window-appear");
    modalContentWindow2.classList.add("content-window-disappear");
    modalFullWindow2.classList.add("full-window-disappear");
    body.classList.remove("noscroll");
}

//close all modals on window click
window.onclick = function(event) {
    if(event.target == modalFullWindow1) {
        modalFullWindow1.classList.remove("full-window-appear");
        modalContentWindow1.classList.remove("content-window-appear");
        modalContentWindow1.classList.add("content-window-disappear");
        modalFullWindow1.classList.add("full-window-disappear");
        body.classList.remove("noscroll");
    } else if(event.target == modalFullWindow2) {
        modalFullWindow2.classList.remove("full-window-appear");
        modalContentWindow2.classList.remove("content-window-appear");
        modalContentWindow2.classList.add("content-window-disappear");
        modalFullWindow2.classList.add("full-window-disappear");
        body.classList.remove("noscroll");
    }

}

/*SECTION 4: TESTIMONIALS */


/*SECTION 5: CONTACT */


/*SECTION 6: FOOTER */

