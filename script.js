let currentSlide = 1;
const totalSlides = 6;

function goToSlide(n){

if(n<1 || n>totalSlides) return;

document.getElementById("slide"+currentSlide).classList.remove("active");

setTimeout(()=>{
document.getElementById("slide"+n).classList.add("active");
currentSlide=n;

if(n===5) startTypewriter();

},400);
}


/* RUNAWAY NO BUTTON */

const noBtn=document.getElementById("noButton");

noBtn.addEventListener("mouseover",()=>{

noBtn.style.position="absolute";

noBtn.style.top=Math.random()*300+"px";
noBtn.style.left=Math.random()*300+"px";

});


/* TYPEWRITER */

const text=`Thank you for being my safe place,
my biggest cheerleader,
and my forever favorite person 💖
I choose you — today and always.`;

let i=0;

function startTypewriter(){

const el=document.getElementById("letterText");
el.innerHTML="";

function type(){

if(i<text.length){

if(text[i]==="\n"){
el.innerHTML+="<br>";
}else{
el.innerHTML+=text[i];
}

i++;
setTimeout(type,40);
}

}

type();
}
