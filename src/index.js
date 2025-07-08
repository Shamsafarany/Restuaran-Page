import { loadPage } from "./page_load";
import "./style.css";
import {addMenu} from "./menu";

//create tab
const content = document.querySelector("#content");
const contentTab = document.createElement("div");
const tabs = document.createElement("div");
const Home = document.createElement("button");
const Menu = document.createElement("button");
const Contact = document.createElement("button");
Home.textContent = "Home";
Menu.textContent = "Menu";
Contact.textContent = "Contact";
Menu.classList.add("menu");

tabs.appendChild(Home);
tabs.appendChild(Menu);
tabs.appendChild(Contact);
contentTab.appendChild(tabs);
content.append(contentTab);

loadPage();

//event listeners
const buttonMenu = document.querySelector(".menu");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu")) {
    addMenu();
  }
});