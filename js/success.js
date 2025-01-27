const successButton = document.getElementById("success-button");
const storedEmail = localStorage.getItem("userEmail");
const userEmailText = document.getElementById("user-email");
const tomato = 'rgb(255,105,46)';
const pink = 'rgb(255,26,152)';
const darkSlateGrey = 'rgb(36,39,66)';

userEmailText.innerText = storedEmail;

 function onDismiss() {
    window.location.href = "index.html";
}


successButton.addEventListener("click", onDismiss);

successButton.addEventListener("focus", function() {
    button.style.backgroundImage = `linear-gradient(to left, ${tomato}, ${pink})`;
});

successButton.addEventListener("blur", function() {
    button.style.backgroundImage = "none";
    button.style.backgroundColor = `${darkSlateGrey}`;
})

// Handle mobile taps explicitly
successButton.addEventListener("touchstart", function () {
    button.style.backgroundImage = `linear-gradient(to left, ${tomato}, ${pink})`;
});

