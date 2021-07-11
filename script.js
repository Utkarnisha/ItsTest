
// Animation for Navbar

const hamburger = document.querySelector(".hamburger");
const ham = document.querySelector("#ham");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".button");

const l1= document.querySelector("#l1");
const l2= document.querySelector("#l2");
const l3= document.querySelector("#l3");

hamburger.addEventListener("click", function(){
	ham.classList.toggle("pos");
	nav.classList.toggle("open");
	l1.classList.toggle("cross1");
	l2.classList.toggle("cross2");
	l3.classList.toggle("cross3");
});




// Animation for header

gsap.timeline({
	scrollTrigger :{
		trigger:".container",
		start: "top top",
		end: "bottom top",
		// markers: true,
		scrub: 0.2
	}
})
.to(".bg", { y: 150, duration: 6})
.to(".mount", { y: -100, duration: 6}, "-=6")
.to(".bush", { y: -350, duration: 6}, '-=6')
.to(".fill", { y: -350, duration: 6}, "-=6")
.to(".next", { y: -350, duration: 6}, "-=6")
.to("#projects", { y: -350, duration: 6}, "-=6")



// Animation for about text

gsap.timeline({
	scrollTrigger :{
		trigger:".text",
		start: "-300 bottom",
		end: "bottom center"
		// markers: true
		// scrub: 0.2
	}
})
.from(".text", {y: 200, opacity:0, duration: 1.5})



// Aniamtion for svg

var $svg = $('svg').drawsvg({
	duration: 1500
});

function anim(){
	$svg.drawsvg('animate');
}

gsap.timeline({
	scrollTrigger :{
		trigger:".next",
		start: "top 90%"
		// onEnter: anim,
		// end: "bottom center"
		// markers: true
		// scrub: 0.2
	}
})
.call(anim)
.to(".cls-1", {fill: "#eeecfb", alpha: 0.92,  duration: 0.5}, "+=1.8");












// Cursor follow

// var cursor = document.querySelector("#bird-cursor");

// document.addEventListener("mousemove", function(e){
// 	var x= e.clientX;
// 	var y= e.clientY;

// 	console.log("we reached");

// 	cursor.style.left = x + "px";
// 	cursor.style.top = y + "px";
// })




// Popping Up

// gsap.timeline({
// 	scrollTrigger:{
// 		trigger: ".next",
// 		start: "top 600",
// 		end: "top 200px",
// 		// markers: true,
// 		scrub: 0.5
// 	}
// })
// .from(".box", { x: 450, y: 200, duration: 3})