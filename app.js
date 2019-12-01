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
console.log(likeButtons);
for (let i=0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function() {
		likeButtons.style.backgroundColor = '#2c71b8';

	} )
}