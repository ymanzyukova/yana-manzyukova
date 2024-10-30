// JavaScript source code

function changeBackground(color) {
    document.body.style.background = color;
}

//window.addEventListener("load", function () { changeBackground('#beffa8') });
function firsteventhandler() {
    var myInput = prompt("What is your name?");
    var element = document.getElementById("myInput");
    element.innerText = myInput;

}
function secondeventhandler() { alert("yay"); }

function imgClick() {
    var element = document.getElementById("myImage");
    var oldWidth = element.width;
    element.style.width = (oldWidth + 40)+'px';
}

function myFunction() { document.getElementById("myDropdown").classList.toggle("show"); }

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}