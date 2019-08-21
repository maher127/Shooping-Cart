let number1 = document.querySelector(".number-1");
let number2 = document.querySelector(".number-2");
let number3 = document.querySelector(".number-3");
let price1 = document.querySelector(".price-1");
let price2 = document.querySelector(".price-2");
let price3 = document.querySelector(".price-3");
let prix1 = price1.textContent;
let prix2 = price2.textContent;
let prix3 = price3.textContent;
let tab2 = prix2.split("");
let prix22 = parseInt(tab2.filter(tab2 => tab2 != "$").join(""));
let tab3 = prix3.split("");
let prix33 = parseInt(tab3.filter(tab3 => tab3 != "$").join(""));
let tab1 = prix1.split("");
let prix11 = parseInt(tab1.filter(tab1 => tab1 != "$").join(""));
let total = prix11 + prix22 + prix33;
document.getElementById("total").innerHTML = total;
function increment1() {
  let number = number1.textContent;
  let tab = prix1.split("");
  let prix = parseInt(tab.filter(tab => tab != "$").join(""));
  number++;
  number1.textContent = number;
  price1.textContent = `$${prix * number}`;
  total += prix;
  document.getElementById("total").innerHTML = total;
}
function decrement1() {
  let number = number1.textContent;

  if (number > 1) {
    let tab = prix1.split("");
    let prix = parseInt(tab.filter(tab => tab != "$").join(""));
    number--;
    number1.textContent = number;
    price1.textContent = `$${prix * number}`;
    total -= prix;
    document.getElementById("total").innerHTML = total;
  }
}
function increment2() {
  let number = number2.textContent;
  let tab = prix2.split("");
  let prix = parseInt(tab.filter(tab => tab != "$").join(""));
  number++;
  number2.textContent = number;
  price2.textContent = `$${prix * number}`;
  total += prix;
  document.getElementById("total").innerHTML = total;
}
function decrement2() {
  let number = number2.textContent;

  if (number > 1) {
    let tab = prix1.split("");
    let prix = parseInt(tab.filter(tab => tab != "$").join(""));
    number--;
    number2.textContent = number;
    price2.textContent = `$${prix * number}`;
    total -= prix;
    document.getElementById("total").innerHTML = total;
  }
}
function increment3() {
  let number = number3.textContent;
  let tab = prix3.split("");
  let prix = parseInt(tab.filter(tab => tab != "$").join(""));
  number++;
  number3.textContent = number;
  price3.textContent = `$${prix * number}`;
  total += prix;
  document.getElementById("total").innerHTML = total;
}
function decrement3() {
  let number = number3.textContent;

  if (number > 1) {
    let tab = prix3.split("");
    let prix = parseInt(tab.filter(tab => tab != "$").join(""));
    number--;
    number3.textContent = number;
    price3.textContent = `$${prix * number}`;
    total -= prix;
    document.getElementById("total").innerHTML = total;
  }
}
function liked(ele) {
  var element = document.querySelector(".heart" + ele);
  element.classList.toggle("liked");
}
function deleted(item) {
  console.log(event);
  let element = document.getElementById("item" + item);
  element.classList.add("delete");
  if (item === 1) {
    prix1 = price1.textContent;
    tab1 = prix1.split("");
    prix11 = parseInt(tab1.filter(tab1 => tab1 != "$").join(""));
    total = total - prix11;
    document.getElementById("total").textContent = total;
  } else if (item === 2) {
    prix2 = price2.textContent;
    tab2 = prix2.split("");
    prix22 = parseInt(tab2.filter(tab2 => tab2 != "$").join(""));
    total = total - prix22;
    document.getElementById("total").textContent = total;
  } else {
    prix3 = price3.textContent;
    tab3 = prix3.split("");
    prix33 = parseInt(tab3.filter(tab3 => tab3 != "$").join(""));
    total = total - prix33;
    document.getElementById("total").textContent = total;
  }
}
