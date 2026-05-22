// Theme Toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
}


// Live Clock

const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();


// Greeting Buttons

const greeting = document.getElementById("greeting");
const changeTextBtn = document.getElementById("changeTextBtn");
const resetGreetingBtn = document.getElementById("resetGreetingBtn");

changeTextBtn.addEventListener("click", function () {
    greeting.textContent = "Welcome To My Interactive Frontend Experience";
});

resetGreetingBtn.addEventListener("click", function () {
    greeting.textContent = "Hello, I'm Retaj Ali";
});


// Counter

let count = 0;

const counter = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", function () {
    if (count > 0) {
        count--;
    }

    counter.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
});


// Interactive Skills

const skillCards = document.querySelectorAll(".skill-card");
const skillMessage = document.getElementById("skillMessage");

skillCards.forEach(function (card) {
    card.addEventListener("click", function () {
        skillCards.forEach(function (item) {
            item.classList.remove("active");
        });

        card.classList.add("active");

        skillMessage.textContent = card.getAttribute("data-skill");
    });
});


// Dynamic Tips

const tips = [
    "Use semantic HTML to make your webpage meaningful and accessible.",
    "Use CSS Grid for page layouts and Flexbox for alignment.",
    "JavaScript events allow pages to respond instantly to user actions.",
    "DOM manipulation lets you update text, classes, and styles dynamically.",
    "Always test your project on desktop, tablet, and mobile screens.",
    "Small animations and hover effects can improve user experience."
];

const dynamicText = document.getElementById("dynamicText");
const tipBtn = document.getElementById("tipBtn");

tipBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * tips.length);

    dynamicText.textContent = tips[randomIndex];
});