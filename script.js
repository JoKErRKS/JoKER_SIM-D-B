const typing = document.getElementById("typing");
const phrases = ["DIGITAL CREATOR", "CODE • BUILD • CREATE", "WELCOME TO THE SYSTEM"];
let p = 0, i = 0, deleting = false;

function typeLoop(){
  const text = phrases[p];
  typing.textContent = deleting ? text.slice(0, --i) : text.slice(0, ++i);
  let speed = deleting ? 45 : 85;
  if(!deleting && i === text.length){ deleting = true; speed = 1400; }
  else if(deleting && i === 0){ deleting = false; p = (p + 1) % phrases.length; speed = 350; }
  setTimeout(typeLoop, speed);
}
typeLoop();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const particleBox = document.getElementById("particles");
for(let n=0;n<45;n++){
  const el=document.createElement("span");
  el.className="particle";
  el.style.left=Math.random()*100+"%";
  el.style.animationDuration=(7+Math.random()*14)+"s";
  el.style.animationDelay=(-Math.random()*18)+"s";
  el.style.opacity=(.15+Math.random()*.5);
  particleBox.appendChild(el);
}
