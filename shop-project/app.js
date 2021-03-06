let productsCountEl = document.getElementById("products-count");

let addToCartButtons = document.querySelectorAll(".add-to-cart");

let productQuantityEl = document.querySelectorAll(".product-quantity");

for (let i=0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener ('click', function (){
		productsCountEl.textContent = +productsCountEl.textContent + +productQuantityEl[i].value;
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

let decrementButton = document.querySelectorAll(".decrement");

let incrementButton = document.querySelectorAll(".increment");

for (let i=0; i<productQuantityEl.length; i++) {

function toggleButtonState (count) {
	if (count <= 1) {
		decrementButton[i].disabled = true;
	} else if (count >= 29) {
		incrementButton[i].disabled = true; 
	}
	 else { 
	 	decrementButton[i].disabled = false;
	 	incrementButton[i].disabled = false;
	}
}

 
	const currentValue = +productQuantityEl[i].value;
	toggleButtonState(currentValue);

incrementButton[i].addEventListener("click", function() {
	// let currentValue = +productQuantityEl.value;
	// let nextValue = currentValue +1;
	// productQuantityEl.value = nextValue;
	productQuantityEl[i].value = +productQuantityEl[i].value + 1;
	toggleButtonState(productQuantityEl[i].value);

})

decrementButton[i].addEventListener("click", function() {
	// let currentValue = +productQuantityEl.value;
	// let nextValue = currentValue -1;
	// productQuantityEl.value = nextValue;
	productQuantityEl[i].value = +productQuantityEl[i].value -1;
	toggleButtonState(productQuantityEl[i].value);
})
}

let price = document.querySelector('.price');