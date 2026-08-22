/* =================================
   JOKER RKS // MAIN SCRIPT
   ================================= */

/* ---------- TYPING EFFECT ---------- */

const typing = document.getElementById("typing");

if (typing) {
    const phrases = [
        "DIGITAL CREATOR",
        "CODE • BUILD • CREATE",
        "WELCOME TO THE SYSTEM"
    ];

    let p = 0;
    let i = 0;
    let deleting = false;

    function typeLoop() {
        const text = phrases[p];

        if (deleting) {
            i--;
            typing.textContent = text.slice(0, i);
        } else {
            i++;
            typing.textContent = text.slice(0, i);
        }

        let speed = deleting ? 45 : 85;

        if (!deleting && i === text.length) {
            deleting = true;
            speed = 1400;
        } else if (deleting && i === 0) {
            deleting = false;
            p = (p + 1) % phrases.length;
            speed = 350;
        }

        setTimeout(typeLoop, speed);
    }

    typeLoop();
}


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });

    document.querySelectorAll("#navLinks a").forEach(function (a) {
        a.addEventListener("click", function () {
            navLinks.classList.remove("open");
        });
    });

}


/* ---------- PARTICLES ---------- */

const particleBox = document.getElementById("particles");

if (particleBox) {

    for (let n = 0; n < 45; n++) {

        const el = document.createElement("span");

        el.className = "particle";

        el.style.left =
            Math.random() * 100 + "%";

        el.style.animationDuration =
            7 + Math.random() * 14 + "s";

        el.style.animationDelay =
            -Math.random() * 18 + "s";

        el.style.opacity =
            0.15 + Math.random() * 0.5;

        particleBox.appendChild(el);
    }

}


/* =================================
   JOKER RKS // PREMIUM LOADING
   ================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loader =
        document.getElementById("loadingScreen");

    const progressBar =
        document.getElementById("loadingProgress");

    const status =
        document.getElementById("loadingStatus");

    const percent =
        document.getElementById("loadingPercent");

    const music =
        document.getElementById("welcomeMusic");


    /* Loading screen doesn't exist */
    if (!loader) return;


    let progress = 0;


    const messages = [
        "CONNECTING TO SYSTEM...",
        "LOADING JOKER RKS...",
        "INITIALIZING DIGITAL WORLD...",
        "CHECKING SYSTEM STATUS...",
        "JOKER RKS IS LIVE NOW"
    ];


    const timer = setInterval(function () {

        progress +=
            Math.floor(Math.random() * 7) + 4;


        if (progress >= 100) {
            progress = 100;
        }


        /* Progress bar */

        if (progressBar) {
            progressBar.style.width =
                progress + "%";
        }


        /* Percentage */

        if (percent) {
            percent.textContent =
                progress + "%";
        }


        /* Status text */

        if (status) {

            const index =
                Math.min(
                    Math.floor(progress / 20),
                    messages.length - 1
                );

            status.textContent =
                messages[index];
        }


        /* ---------- LOADING COMPLETE ---------- */

        if (progress >= 100) {

            clearInterval(timer);


            /* Welcome message */

            if (status) {
                status.textContent =
                    "WELCOME TO MY DIGITAL WORLD";
            }


            /* ---------- MUSIC ---------- */

            if (music) {

                music.volume = 0.12;

                music.currentTime = 0;


                music.play().catch(function () {

                    /*
                     Mobile browser autoplay protection.
                     Music starts after user touches/clicks.
                    */

                    function startMusic() {

                        music.volume = 0.12;

                        music.play().catch(function () {});

                        document.removeEventListener(
                            "click",
                            startMusic
                        );

                        document.removeEventListener(
                            "touchstart",
                            startMusic
                        );
                    }


                    document.addEventListener(
                        "click",
                        startMusic,
                        { once: true }
                    );

                    document.addEventListener(
                        "touchstart",
                        startMusic,
                        { once: true }
                    );

                });

            }


            /* ---------- REMOVE LOADING SCREEN ---------- */

            setTimeout(function () {

                loader.classList.add("loaded");


                setTimeout(function () {

                    loader.style.display =
                        "none";

                }, 900);

            }, 1600);

        }

    }, 180);

});
