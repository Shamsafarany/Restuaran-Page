function addMenu(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
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
    content.appendChild(tabs);

    const h2 = document.createElement("h2");
    h2.innerText = "Our Menu";
    content.appendChild(h2);

   const h3 = document.createElement("h3");
   h3.innerText = "Pizza - 10$";
   content.appendChild(h3);

   const h31 = document.createElement("h3");
   h31.innerText = "Shawarma - 20$";
   content.appendChild(h31);
   const h32 = document.createElement("h3");
   h32.innerText = "Caesar Salad - 15$";
   content.appendChild(h32);

}
export {addMenu};