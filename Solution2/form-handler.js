// JavaScript source code
//form handler for storing data to a local storage
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //prevents page reload when submitted

        //collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            gender: document.getElementById('input[name="gender"]:checked')?.value || "",
            preferences: Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(input => input.value),
            favColor: document.getElementById("favColor").value
            message: document.getElementById("message").value
        };
        //store data on local storage
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert("Data submitted successfully");
    });
    //clear button handler
    document.getElementById("clear").addEventListener("click", () => {
        form.reset(); //clears form fields
        localStorage.removeItem("contactFormData"); //clears local storage
    });
});
//lab8
function increaseTextsize() {
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

