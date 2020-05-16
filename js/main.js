/*                    NAVIGATION */


/*SECTION 1: HOME / LANDING PAGE */


/*SECTION 2: ABOUT */


/*SECTION 3: WORK */

//modal1 var
var modalOpener1 = document.getElementById("modalOpener1");
var modalCloser1 = document.getElementById("modalCloser1");
var modalFullWindow1 = document.getElementById("modalFullWindow1");

//modal2 var
var modalOpener2 = document.getElementById("modalOpener2");
var modalCloser2 = document.getElementById("modalCloser2");
var modalFullWindow2 = document.getElementById("modalFullWindow2");

//modal1 func
modalOpener1.onclick = function() {
    modalFullWindow1.style.display = "block";
}

modalCloser1.onclick = function() {
    modalFullWindow1.style.display = "none";
}

//modal2 func
modalOpener2.onclick = function() {
    modalFullWindow2.style.display = "block";
}

modalCloser2.onclick = function() {
    modalFullWindow2.style.display = "none";
}

//close all modals on window click
window.onclick = function(event) {
    if(event.target == modalFullWindow1) {
        modalFullWindow1.style.display = "none";
    } else if(event.target == modalFullWindow2) {
        modalFullWindow2.style.display = "none";
    }
}






/*SECTION 4: TESTIMONIALS */


/*SECTION 5: CONTACT */


/*SECTION 6: FOOTER */

