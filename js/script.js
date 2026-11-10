const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function() {
    welcomeMessage.textContent = "Welcome to HavenKey Realty! We're happy to help you find your dream home.";

    welcomeButton.textContent = "Thank You!";

    welcomeButton.style.backgroundColor = "green";

    welcomeButton.disabled = true;
});