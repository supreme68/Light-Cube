//I HATE GLOBAL VARIABLE
let dragged;

//DragStart
document.addEventListener("dragstart", function (event) {
    dragged = event.target;
} ,false);

//DragEnd
document.addEventListener("dragend", function (event) {

    event.dataTransfer.dropEffect = "copy";

} ,false);

//Dragover
document.addEventListener("dragover", function (event) {
    //Prevents default behavior of the browser to allow drop
    event.preventDefault();
}, false);

//DragEnter
document.addEventListener("dragenter", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "red";
    }
}, false);

//DragLeave
document.addEventListener("dragleave", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }
}, false);

//Drop
document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.appendChild(dragged);
    }
}, false);
