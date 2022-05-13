const smallBtnEl = document.getElementById("small-size");
const mediumBtnEl = document.getElementById("medium-size");
const largeBtnEl = document.getElementById("large-size");
const cupTextSmallEl = document.getElementById("cup-text-small");
const cupTextMediumEl = document.getElementById("cup-text-medium");
const cupTextLargeEl = document.getElementById("cup-text-large");
const priceEl = document.getElementById("price");
const mediumPriceEl = document.getElementById("price-medium");
const largePriceEl = document.getElementById("price-large");

let isClicked = false;

function smallClickHandler() {
  if ((isClicked = true)) {
    cupTextSmallEl.style.color = "red";
    cupTextMediumEl.style.color = "black";
    cupTextLargeEl.style.color = "black";
  }
}

function mediumClickHandler() {
  if ((isClicked = true)) {
    cupTextMediumEl.style.color = "red";
    cupTextSmallEl.style.color = "black";
    cupTextLargeEl.style.color = "black";
    priceEl.value = mediumPriceEl.value;
  }
}

function largeClickHandler() {
  if ((isClicked = true)) {
    cupTextLargeEl.style.color = "red";
    cupTextSmallEl.style.color = "black";
    cupTextMediumEl.style.color = "black";
    priceEl.value = largePriceEl.value;
  }
}
