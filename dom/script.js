const container = document.querySelector('#container');
const body = document.body

const p = document.createElement("p");
p.textContent = "Hey I'm Red";
p.style.cssText = "color: red;";
p.classList.add("par");
body.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm blue dabedi dabeda";
h3.style.cssText = "color: blue;";
h3.classList.add("h3");
body.appendChild(h3);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "solid";
div.classList.add("div1")
div.textContent = "test";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "MEE TOO!";
div.appendChild(p2);

body.appendChild(div)