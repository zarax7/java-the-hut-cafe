const button = document.querySelectorAll(".remove");
const productItems = document.querySelectorAll(".product-items");

button.addEventListener("click", removeFunction);

function removeFunction() {
  productItems.forEach(function (e) {
    e.remove();
  });
}
