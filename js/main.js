/*                    NAVIGATION */


/*SECTION 1: HOME / LANDING PAGE */


/*SECTION 2: ABOUT */


/*SECTION 3: WORK */

//modal1
var modalOpener1 = document.getElementById("modalOpener1");
var modalFullWindow = document.getElementsByClassName("modal-full-window")[0];
var modalCloser1 = document.getElementById("modalCloser1");

modalOpener1.onclick = function() {
    modalFullWindow.style.display = "block";
}

modalCloser1.onclick = function() {
    modalFullWindow.style.display = "none";
}

//modal2
var modalOpener2 = document.getElementById("modalOpener2");
var modalCloser2 = document.getElementById("modalCloser2");

modalOpener2.onclick = function() {
    modalFullWindow.style.display = "block";
}

modalCloser2.onclick = function() {
    modalFullWindow.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modalFullWindow) {
        modalFullWindow.style.display = "none";
    };
}






/*SECTION 4: TESTIMONIALS */


/*SECTION 5: CONTACT */


/*SECTION 6: FOOTER */

