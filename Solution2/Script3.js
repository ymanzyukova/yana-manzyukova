// JavaScript source code
function increaseTextSize() {
    document.body.style.fontSize = "1.2em";
}
function toggleColors() {
    document.body.classList.toggle('high-contrast');
}
function displayAltText() {
    alert(document.getElementById(img1).alt + "\n" +
        document.getElementById(img2).alt + "\n" +
        document.getElementById(img3).alt);
}
