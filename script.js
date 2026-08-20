const typing=document.getElementById("typing");const phrases=["DIGITAL CREATOR","CODE • BUILD • CREATE","WELCOME TO THE SYSTEM"];let p=0,i=0,deleting=false;
function typeLoop(){const text=phrases[p];typing.textContent=deleting?text.slice(0,--i):text.slice(0,++i);let speed=deleting?45:85;if(!deleting&&i===text.length){deleting=true;speed=1400}else if(deleting&&i===0){deleting=false;p=(p+1)%phrases.length;speed=350}setTimeout(typeLoop,speed)}typeLoop();
const menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks");menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const particleBox=document.getElementById("particles");for(let n=0;n<45;n++){const el=document.createElement("span");el.className="particle";el.style.left=Math.random()*100+"%";el.style.animationDuration=7+Math.random()*14+"s";el.style.animationDelay=-Math.random()*18+"s";el.style.opacity=.15+Math.random()*.5;particleBox.appendChild(el)}
/* =================================
   JOKER RKS // LOADING SCREEN
   ================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loadingScreen");
    const progressBar = document.getElementById("loadingProgress");
    const status = document.getElementById("loadingStatus");
    const percent = document.getElementById("loadingPercent");

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

        progress += Math.floor(Math.random() * 7) + 4;

        if (progress >= 100) {
            progress = 100;
        }

        if (progressBar) {
            progressBar.style.width = progress + "%";
        }

        if (percent) {
            percent.textContent = progress + "%";
        }

        if (status) {
            const index = Math.min(
                Math.floor(progress / 20),
                messages.length - 1
            );

            status.textContent = messages[index];
        }

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                loader.classList.add("loaded");

                setTimeout(function () {
                    loader.style.display = "none";
                }, 900);

            }, 700);
        }

    }, 180);

});
