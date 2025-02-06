let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number =  Math.ceil(Math.random()+1 * 1500);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1500);
    console.log(number);
}
