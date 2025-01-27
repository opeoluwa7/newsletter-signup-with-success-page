const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("form-field");
const tomato = 'rgb(255,105,46)';
const pink = 'rgb(255,26,152)';
const darkSlateGrey = 'rgb(36,39,66)';
const button = document.getElementById("button");

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function onSubmit(event) {
    event.preventDefault();
    if (validateEmail(emailInput.value)) {
        errorMessage.innerText = "";
        localStorage.setItem("userEmail", emailInput.value);
        window.location.href = "success.html"
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Valid email required";
        console.log('invalid-email');
    }
}
form.addEventListener('submit', onSubmit);

button.addEventListener("focus", function() {
    button.style.backgroundImage = `linear-gradient(to left, ${tomato}, ${pink})`;
});

button.addEventListener("blur", function() {
    button.style.backgroundImage = "none";
    button.style.backgroundColor = `${darkSlateGrey}`;
    errorMessage.style.display = "none";
})

// Handle mobile taps explicitly
button.addEventListener("touchstart", function () {
    button.style.backgroundImage = `linear-gradient(to left, ${tomato}, ${pink})`;
});

button.addEventListener("touchend", function () {
    button.style.backgroundImage = "none";
    button.style.backgroundColor = darkSlateGrey;
});
