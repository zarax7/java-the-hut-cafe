const subButtonCreamEl = document.getElementById("sub-cream");
const addButtonCreamEl = document.getElementById("add-cream");
const subButtonMilkEl = document.getElementById("sub-milk");
const addButtonMilkEl = document.getElementById("add-milk");
const subButtonSugarEl = document.getElementById("sub-sugar");
const addButtonSugarEl = document.getElementById("add-sugar");

let totalCream = 0;
let totalMilk = 0;
let totalSugar = 0;

// add/sub cream
function subCreamTotal() {
  if (totalCream <= 0) {
    return;
  } else {
    totalCream--;
  }
  updateCountDisplay();
}

function addCreamTotal() {
  totalCream++;
  updateCountDisplay();
}

// add/sub milk
function subMilkTotal() {
  if (totalMilk <= 0) {
    return;
  } else {
    totalMilk--;
  }
  updateCountDisplay();
}

function addMilkTotal() {
  totalMilk++;
  updateCountDisplay();
}

// add/sub sugar
function subSugarTotal() {
  if (totalSugar <= 0) {
    return;
  } else {
    totalSugar--;
  }
  updateCountDisplay();
}

function addSugarTotal() {
  totalSugar++;
  updateCountDisplay();
}

function updateCountDisplay() {
  document.getElementById("input-cream").value = totalCream;
  document.getElementById("input-milk").value = totalMilk;
  document.getElementById("input-sugar").value = totalSugar;
}
