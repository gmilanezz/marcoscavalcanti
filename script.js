const scenes=[
{text:"Olá, eu sou o Marcos.",slide:0},
{text:"Sou nutricionista e transformo a vida de algumas pessoas.",slide:0},
{text:"Sou movido por conhecimento e leitura.",slide:1},
{text:"Comecei a correr recentemente.",slide:2},
{text:"E estou na academia há +5 anos.",slide:3}
];
const text=document.getElementById("typeText"),slides=[...document.querySelectorAll(".hero-slide")],idx=document.getElementById("mediaIndex");let scene=0,char=0,deleting=false;
function showSlide(i){slides.forEach((el,n)=>el.classList.toggle("active",n===i));idx.textContent=String(i+1).padStart(2,"0")+" / 04"}
function type(){const c=scenes[scene];showSlide(c.slide);text.textContent=c.text.slice(0,char);if(!deleting&&char<c.text.length){char++;return setTimeout(type,42)}if(!deleting){deleting=true;return setTimeout(type,1650)}if(char>0){char--;return setTimeout(type,18)}deleting=false;scene=(scene+1)%scenes.length;setTimeout(type,260)}type();
const toggle=document.getElementById("menuToggle"),menu=document.getElementById("mobileMenu"),overlay=document.getElementById("menuOverlay"),closeBtn=document.getElementById("menuClose");
function openMenu(){menu.classList.add("open");overlay.classList.add("open");document.body.classList.add("menu-open");menu.setAttribute("aria-hidden","false")}
function closeMenu(){menu.classList.remove("open");overlay.classList.remove("open");document.body.classList.remove("menu-open");menu.setAttribute("aria-hidden","true")}
toggle.onclick=openMenu;closeBtn.onclick=closeMenu;overlay.onclick=closeMenu;document.querySelectorAll(".mobile-menu a").forEach(a=>a.onclick=closeMenu);document.getElementById("year").textContent=new Date().getFullYear();