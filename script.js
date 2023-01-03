function selectCollegeName() {
    let e = document.querySelector("#college");
    let text = e.options[e.selectedIndex].text;
    document.querySelector("#selected_college").innerHTML = text;
}

selectCollegeName();

document.querySelector("#college").addEventListener("click", function(){
    selectCollegeName();
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

for(i=0; i<4; i++){
  let branchBox = ["civil", "computer", "electronics", "mechanical"];
  let branchBoxName= branchBox[i];
  let idBBN= "#"+branchBoxName+"_box";
  let classBBN = "#"+branchBoxName+"_card";
  console.log(idBBN);
  console.log(classBBN);
  document.querySelector(idBBN).addEventListener("click", function(){
    document.querySelector(classBBN).classList.toggle("hidden");
    $(".branch_box_card:not("+classBBN+")").addClass("hidden");
  })
}



// Selecting the html class and
// convert it to an object

const sharebtn =
	document.querySelector('.sharebtn')

// Creating a bool variable for changing
// the image of share button
let bool = 0

// Adding an event listener
sharebtn.addEventListener('click', () => {

	// As we clicked the mouse over
	// the share button the bool value.
	// get flipped and then working of
	// if-else loop get starts
	bool = !bool
	
	if (bool == 0) {
		sharebtn.innerHTML =
			'<i class="far fa-share-square"></i>'
	} else {
		sharebtn.innerHTML =
			'<i class="fas fa-times"></i>'
	}
})
