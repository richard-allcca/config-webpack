
import style from './style.css';
import logo from "./assets/webpack-logo.svg";
import data from './data.json'
//? componentes helloWorld
import { HelloWorld } from './components/helloWorld';



const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $nav = d.createElement("nav");
$nav.classList.add("menu");

let menu = "";
let hello = new HelloWorld("TypeScript");

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add("icon");
$nav.innerHTML = menu;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
