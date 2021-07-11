
let head1= document.querySelector(".head1");
let head2= document.querySelector(".head2");
let heading= document.querySelector(".heading");
scroll= window.pageYOffset;

document.addEventListener("scroll", function(e){
	var offset= window.pageYOffset;
	scroll=offset;

	head1.style.top = (scroll/10) + "%";

	head2.style.top = (scroll/25) + "%";

	// heading.style.top = (scroll/10) + "%";

})

