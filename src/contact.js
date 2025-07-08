function addContact() {
  const content = document.querySelector("#content");
  const tabs = document.querySelector(".tabs");
  content.innerHTML = "";
  content.append(tabs);

  const h2 = document.createElement("h2");
  h2.innerText = "Contact Us:";
  content.appendChild(h2);

  const p = document.createElement("p");
  p.innerText = "Phone: 09543879514";
  content.appendChild(p);

  const p2 = document.createElement("p");
  p2.innerText = "Email: restuarant@gmail.com";
  content.appendChild(p2);

  const p3 = document.createElement("p");
  p3.innerText = "Location: New York - US";
  content.appendChild(p3);
}
export { addContact };
