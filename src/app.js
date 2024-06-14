/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generator() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird ", "My cat "];
  let action = ["ate ", "peed ", "crushed ", "broke ", "burned "];
  let what = ["my homework ", "my phone ", "the car ", "my house "];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];
  //write your code here
  console.log("Hello Rigo from the console!");

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let parrafo = document.querySelector("#text");
  parrafo.innerHTML =
    who[whoIndex] + action[actionIndex] + what[whatIndex] + when[whenIndex];
  document.getElementById("boton").addEventListener("click", generator);
};
