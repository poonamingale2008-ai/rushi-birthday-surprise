/* =========================================================
   RUSHI BIRTHDAY SURPRISE
   COMPLETE SCRIPT.JS + MUSIC
========================================================= */


/* =========================================================
   GET ALL SECTIONS
========================================================= */

const welcomeSection = document.getElementById("welcomeSection");
const birthdaySection = document.getElementById("birthdaySection");
const heartSection = document.getElementById("heartSection");
const finalSection = document.getElementById("finalSection");


/* =========================================================
   GET BUTTONS
========================================================= */

const openSurprise = document.getElementById("openSurprise");
const nextButton = document.getElementById("nextButton");
const finalButton = document.getElementById("finalButton");


/* =========================================================
   GET BACKGROUND MUSIC
========================================================= */

const birthdayMusic = document.getElementById("birthdayMusic");


/* =========================================================
   INITIAL SETUP
========================================================= */

function initializePage() {

    birthdaySection.style.display = "none";
    heartSection.style.display = "none";
    finalSection.style.display = "none";

    welcomeSection.style.display = "flex";

}


/* =========================================================
   RUN WHEN PAGE LOADS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

});


/* =========================================================
   MUSIC FUNCTION
========================================================= */

function startBirthdayMusic() {

    if (!birthdayMusic) {
        console.log("Birthday music element not found.");
        return;
    }

    birthdayMusic.volume = 0.5;

    birthdayMusic.play()
        .then(function () {

            console.log("🎵 Birthday music started!");

        })
        .catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });

}


/* =========================================================
   CHANGE SCREEN FUNCTION
========================================================= */

function showScreen(currentScreen, nextScreen) {

    currentScreen.style.opacity = "0";

    currentScreen.style.transition =
        "opacity 0.6s ease";


    setTimeout(function () {

        currentScreen.style.display = "none";


        nextScreen.style.display = "flex";

        nextScreen.style.opacity = "0";

        nextScreen.style.transition =
            "opacity 0.8s ease";


        setTimeout(function () {

            nextScreen.style.opacity = "1";

            nextScreen.classList.add(
                "screen-active"
            );


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


        }, 50);


    }, 600);

}


/* =========================================================
   SCREEN 1 → SCREEN 2
   OPEN SURPRISE + START MUSIC
========================================================= */

if (openSurprise) {

    openSurprise.addEventListener(
        "click",
        function () {


            /* =========================================
               START BIRTHDAY MUSIC
            ========================================== */

            startBirthdayMusic();


            /* =========================================
               CELEBRATION
            ========================================== */

            createHeartBurst();

            createConfetti();


            /* =========================================
               MOVE TO BIRTHDAY SCREEN
            ========================================== */

            showScreen(

                welcomeSection,

                birthdaySection

            );

        }
    );

}


/* =========================================================
   SCREEN 2 → SCREEN 3
   ONE MORE THING
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {


            createHeartBurst();


            showScreen(

                birthdaySection,

                heartSection

            );


            /* =========================================
               ANIMATE PHOTOS
            ========================================== */

            setTimeout(
                function () {

                    animatePhotos();

                },
                900
            );

        }
    );

}


/* =========================================================
   SCREEN 3 → SCREEN 4
   FINAL SURPRISE
========================================================= */

if (finalButton) {

    finalButton.addEventListener(
        "click",
        function () {


            createHeartBurst();

            createConfetti();


            showScreen(

                heartSection,

                finalSection

            );


            /* =========================================
               EXTRA CELEBRATION
            ========================================== */

            setTimeout(
                function () {

                    createFinalHearts();

                },
                800
            );

        }
    );

}


/* =========================================================
   PHOTO ANIMATION
========================================================= */

function animatePhotos() {

    const photos =
        document.querySelectorAll(
            ".photo-card"
        );


    photos.forEach(
        function (photo, index) {


            photo.style.opacity = "0";


            photo.style.transform =
                "translateY(50px) scale(0.9)";


            setTimeout(
                function () {


                    photo.style.transition =
                        "all 0.8s ease";


                    photo.style.opacity = "1";


                    photo.style.transform =
                        "translateY(0) scale(1)";


                },
                index * 250
            );

        }
    );

}


/* =========================================================
   HEART BURST
========================================================= */

function createHeartBurst() {

    const hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"

    ];


    for (let i = 0; i < 18; i++) {


        const heart =
            document.createElement("span");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            "50%";


        heart.style.top =
            "50%";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        heart.style.fontSize =
            `${Math.random() * 15 + 15}px`;


        heart.style.transition =
            "all 1.5s ease";


        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            250 +
            100;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        setTimeout(
            function () {


                heart.style.transform =
                    `translate(${x}px, ${y}px)
                     scale(1.4)`;


                heart.style.opacity =
                    "0";


            },
            50
        );


        setTimeout(
            function () {

                heart.remove();

            },
            1600
        );

    }

}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

    const confettiSymbols = [

        "✨",
        "💗",
        "💕",
        "⭐",
        "🎉",
        "💖",
        "✦"

    ];


    for (let i = 0; i < 35; i++) {


        const confetti =
            document.createElement("span");


        confetti.innerHTML =
            confettiSymbols[
                Math.floor(
                    Math.random() *
                    confettiSymbols.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() *
            100 +
            "%";


        confetti.style.top =
            "-30px";


        confetti.style.zIndex =
            "9998";


        confetti.style.pointerEvents =
            "none";


        confetti.style.fontSize =
            `${Math.random() * 15 + 12}px`;


        const duration =
            Math.random() * 3 + 3;


        confetti.style.transition =
            `transform ${duration}s linear,
             opacity ${duration}s linear`;


        document.body.appendChild(
            confetti
        );


        setTimeout(
            function () {


                confetti.style.transform =
                    `translateY(${window.innerHeight + 100}px)
                     rotate(${Math.random() * 720}deg)`;


                confetti.style.opacity =
                    "0";


            },
            100
        );


        setTimeout(
            function () {

                confetti.remove();

            },
            duration * 1000 + 500
        );

    }

}


/* =========================================================
   FINAL FLOATING HEARTS
========================================================= */

function createFinalHearts() {

    const finalSection =
        document.getElementById(
            "finalSection"
        );


    if (!finalSection) return;


    const hearts = [

        "❤️",
        "💗",
        "💕",
        "💖"

    ];


    for (let i = 0; i < 20; i++) {


        const heart =
            document.createElement("span");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "absolute";


        heart.style.left =
            Math.random() *
            100 +
            "%";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            `${Math.random() * 18 + 15}px`;


        heart.style.opacity =
            "0.7";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "1";


        const duration =
            Math.random() * 5 + 5;


        heart.style.animation =
            `finalFloatingHeart ${duration}s linear`;


        finalSection.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            duration * 1000
        );

    }

}


/* =========================================================
   ADD FINAL HEART ANIMATION
========================================================= */

const finalHeartStyle =
    document.createElement("style");


finalHeartStyle.innerHTML = `

@keyframes finalFloatingHeart {

    0% {

        transform:
            translateY(0)
            rotate(0deg)
            scale(0.7);

        opacity: 0;

    }

    15% {

        opacity: 0.8;

    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg)
            scale(1.2);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    finalHeartStyle
);


/* =========================================================
   BUTTON CLICK EFFECT
========================================================= */

const allButtons =
    document.querySelectorAll(
        ".main-button"
    );


allButtons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            function () {


                button.style.transform =
                    "scale(0.95)";


                setTimeout(
                    function () {

                        button.style.transform =
                            "";

                    },
                    150
                );

            }
        );

    }
);


/* =========================================================
   PHOTO CLICK EFFECT
========================================================= */

document.addEventListener(
    "click",
    function (event) {


        const photoCard =
            event.target.closest(
                ".photo-card"
            );


        if (!photoCard) return;


        const image =
            photoCard.querySelector(
                "img"
            );


        if (!image) return;


        image.style.transform =
            "scale(1.08)";


        setTimeout(
            function () {

                image.style.transform =
                    "";

            },
            500
        );

    }
);


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {


        if (event.key === "Enter") {


            const visibleButton =
                document.querySelector(
                    'button:not([style*="display: none"])'
                );


            if (visibleButton) {

                visibleButton.click();

            }

        }

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "❤️ Birthday Surprise for Rushi is ready!"
);


console.log(
    "🎂 Made with lots of love."
);


console.log(
    "🎵 Birthday music is connected."
);