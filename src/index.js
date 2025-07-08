import { loadPage } from "./page_load";
import "./style.css";
import {addMenu} from "./menu";
import { addHome } from "./home";
import { addContact } from "./contact";

//create tab
const content = document.querySelector("#content");
const contentTab = document.createElement("div");
contentTab.classList.add("tabs");
const tabs = document.createElement("div");
const Home = document.createElement("button");
const Menu = document.createElement("button");
const Contact = document.createElement("button");
Home.textContent = "Home";
Menu.textContent = "Menu";
Contact.textContent = "Contact";
Menu.classList.add("menu");
Contact.classList.add("contact");
Home.classList.add("home");

tabs.appendChild(Home);
tabs.appendChild(Menu);
tabs.appendChild(Contact);
contentTab.appendChild(tabs);
content.append(contentTab);

loadPage();

//event listeners
const buttonMenu = document.querySelector(".menu");
buttonMenu.addEventListener("click", addMenu);

const buttonHome = document.querySelector(".home");
buttonHome.addEventListener("click", addHome);

const buttonContact = document.querySelector(".contact");
buttonContact.addEventListener("click", addContact);