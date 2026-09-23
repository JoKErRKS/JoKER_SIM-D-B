/* =================================
   JOKER RKS // MAIN SCRIPT
   ================================= */


/* =================================
   TYPING EFFECT
   ================================= */

const typing = document.getElementById("typing");

if (typing) {

    const phrases = [
        "DIGITAL CREATOR",
        "CODE • BUILD • CREATE",
        "WELCOME TO THE SYSTEM"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {

        const text = phrases[phraseIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typing.textContent = text.slice(0, charIndex);

        let speed = deleting ? 45 : 85;

        if (!deleting && charIndex >= text.length) {

            deleting = true;
            speed = 1400;

        } else if (deleting && charIndex <= 0) {

            deleting = false;
            phraseIndex =
                (phraseIndex + 1) % phrases.length;

            speed = 350;
        }

        setTimeout(typeLoop, speed);
    }

    typeLoop();
}


/* =================================
   MOBILE MENU
   ================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });


    document
        .querySelectorAll("#navLinks a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

            });

        });
}


/* =================================
   PARTICLES
   ================================= */

const particleBox =
    document.getElementById("particles");

if (particleBox) {

    for (let n = 0; n < 45; n++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            7 + Math.random() * 14 + "s";

        particle.style.animationDelay =
            -Math.random() * 18 + "s";

        particle.style.opacity =
            0.15 + Math.random() * 0.5;

        particleBox.appendChild(particle);
    }
}


/* =================================
   JOKER RKS // SAFE PREMIUM LOADER
   ================================= */

(function () {

    function startLoader() {

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


        /* No loader = nothing to do */
        if (!loader) {
            return;
        }


        /* Prevent background scrolling */
        document.documentElement.style.overflowY =
            "hidden";

        document.body.style.overflowY =
            "hidden";


        let progress = 0;
        let finished = false;


        const messages = [
            "CONNECTING TO SYSTEM...",
            "LOADING JOKER RKS...",
            "INITIALIZING DIGITAL WORLD...",
            "CHECKING SYSTEM STATUS...",
            "JOKER RKS IS LIVE NOW"
        ];


        function finishLoader() {

            if (finished) {
                return;
            }

            finished = true;


            /* Stop progress */
            if (timer) {
                clearInterval(timer);
            }


            /* Final message */
            if (status) {
                status.textContent =
                    "WELCOME TO MY DIGITAL WORLD";
            }

            if (progressBar) {
                progressBar.style.width = "100%";
            }

            if (percent) {
                percent.textContent = "100%";
            }


            /* Try music.
               It NEVER blocks the loader. */

            if (music) {

                try {

                    music.volume = 0.12;
                    music.currentTime = 0;

                    const playPromise =
                        music.play();

                    if (
                        playPromise &&
                        typeof playPromise.catch === "function"
                    ) {

                        playPromise.catch(function () {

                            /* Browser autoplay protection */

                            const startMusic =
                                function () {

                                    try {

                                        music.volume = 0.12;

                                        music.play()
                                            .catch(function () {});

                                    } catch (e) {}

                                };

                            document.addEventListener(
                                "click",
                                startMusic,
                                {
                                    once: true
                                }
                            );

                            document.addEventListener(
                                "touchstart",
                                startMusic,
                                {
                                    once: true
                                }
                            );

                        });
                    }

                } catch (e) {}

            }


            /* Fade loader out */

            setTimeout(function () {

                loader.classList.add("loaded");

            }, 700);


            /* Completely remove loader */

            setTimeout(function () {

                loader.style.display = "none";

                document.documentElement.style
                    .overflowY = "";

                document.body.style
                    .overflowY = "";

            }, 1700);

        }


        /* Progress animation */

        const timer =
            setInterval(function () {

                progress +=
                    Math.floor(
                        Math.random() * 8
                    ) + 5;


                if (progress >= 100) {
                    progress = 100;
                }


                if (progressBar) {

                    progressBar.style.width =
                        progress + "%";

                }


                if (percent) {

                    percent.textContent =
                        progress + "%";

                }


                if (status) {

                    const index =
                        Math.min(
                            Math.floor(
                                progress / 20
                            ),
                            messages.length - 1
                        );

                    status.textContent =
                        messages[index];

                }


                if (progress >= 100) {

                    finishLoader();

                }

            }, 180);


        /* =================================
           FAILSAFE
           If anything goes wrong, loader
           disappears automatically.
           ================================= */

        setTimeout(function () {

            if (!finished) {

                progress = 100;

                finishLoader();

            }

        }, 7000);

    }


    /* Script is already loaded at the bottom
       of body, but this also works safely
       if browser timing changes. */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startLoader,
            {
                once: true
            }
        );

    } else {

        startLoader();

    }

})();
