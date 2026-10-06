/* ========================================
   SPRING BARNAUL
   Main JavaScript
======================================== */


/* ==============================
   MOBILE MENU
============================== */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });


    // Закрываем меню после нажатия на ссылку

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


/* ==============================
   CURRENT YEAR
============================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ==============================
   AGE / COOKIE NOTICE
============================== */

const cookie = document.getElementById("cookie");
const cookieButton = document.getElementById("cookieButton");

if (cookie && cookieButton) {

    // Проверяем, закрывал ли пользователь уведомление

    const accepted = localStorage.getItem("springAgeNotice");

    if (accepted === "true") {
        cookie.style.display = "none";
    }


    cookieButton.addEventListener("click", function () {

        localStorage.setItem(
            "springAgeNotice",
            "true"
        );

        cookie.style.display = "none";

    });

}


/* ==============================
   SMOOTH SCROLL
============================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==============================
   SIMPLE SCROLL ANIMATION
============================== */

const animatedElements = document.querySelectorAll(
    ".feature, .card, .contact-card, .gallery-item"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* ==============================
   CONSOLE MESSAGE
============================== */

console.log(
    "Spring Barnaul website loaded successfully."
);
