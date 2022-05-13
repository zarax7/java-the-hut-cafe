const subQuantityBtnEl = document.getElementById("sub-quantity-button");
const addQuantityBtnEl = document.getElementById("add-quantity-button");

let quantity = 1;

function subQuantity() {
  if (quantity <= 0) {
    return;
  } else {
    quantity--;
  }
  updateQuantity();
}

function addQuantity() {
  quantity++;
  updateQuantity();
}

function updateQuantity() {
  document.getElementById("input-quantity").value = quantity;
}
