// Polyfill imports
import 'core-js/features/object/assign';
import 'core-js/features/promise';

// Library imports
import svg4everybody from 'svg4everybody';

// Utility imports
import * as FocusUtility from './util/focus';
import * as LazyLoader from './util/lazy-loader';


// Block imports
// TODO: add code here
// Initialize libraries
svg4everybody();

// Initialize utilities
FocusUtility.init();
LazyLoader.init();


// Initialize blocks
// TODO: add code here
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("modal-content__close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("bg").style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById("bg").style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("bg").style.display = "none";
    }
}


document.getElementById("trigger").onclick = function () {
    open()
};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById('trigger').classList.toggle('close');

}
