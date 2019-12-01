let productsCountEl = document.getElementById("products-count");

let addToCartButtons = document.querySelectorAll(".add-to-cart");

for (let i=0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener ('click', function (){
		productsCountEl.textContent = +productsCountEl.textContent + 1;
		// let prevProductsCount = +productsCountEl.textContent;
		// productsCountEl.textContent = prevProductsCount + 1;
	}
	)
}

let likeButtons = document.querySelectorAll(".like_btn");
for (let i=0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function() {
		likeButtons[i].classList.toggle("liked");
		/*if(likeButtons[i].classList.contains("liked")) {
			likeButtons[i].classList.remove("liked")
		} else {
			likeButtons[i].classList.add("liked")
		}
*/
	} )
}

$('.slider').slick({
	dots:true,
	autoplay:true,
	autoplaySpeed: 2000,
} )

function toggleButtonState (count) {
	if (count <= 1) {
		decrementButton.disable = true;
	} else decrementButton.disable = false;
}

let decrementButton = document.querySelector(".decrement");
let productQuantityEl = document.querySelector(".product-quantity");
let incrementButton = document.querySelector(".increment");

incrementButton.addEventListener("click", function() {
	let currentValue = +productQuantityEl.value;
	let nextValue = currentValue +1;
	productQuantityEl.value = nextValue;
})

decrementButton.addEventListener("click", function() {
	let currentValue = +productQuantityEl.value;
	let nextValue = currentValue -1;
	productQuantityEl.value = nextValue;
})