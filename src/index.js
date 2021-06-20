
import style from './style.css';
import logo from "./assets/webpack-logo.svg";
import women from './assets/women.jpg'
import data from './data.json'
//? componentes helloWorld
import { HelloWorld } from './components/helloWorld';


const arg = [1, 2, 3],
  ESNext = () => console.log(...arg);

console.log('hola mundo sin configuración con web pack 😱');

ESNext();

// document.getElementById("app").innerHTML = `<img src="${logo}" alt="">`

const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $img = d.createElement("img"),
  $nav = d.createElement("nav");
$nav.classList.add("menu");

let menu = "";
let hello = new HelloWorld("Vanilla JS");

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add("icon");
$img.src = women;
$nav.innerHTML = menu;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($img);
