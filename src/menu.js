function addMenu(){
    const content = document.querySelector("#content");
    const tabs = document.querySelector(".tabs");
    content.innerHTML = "";
    content.append(tabs);
   
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