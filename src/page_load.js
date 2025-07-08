//get elements
//function
function loadPage(){
    const content = document.querySelector("#content");
    const h2 = document.createElement("h2");
    h2.innerText = "Welcome to Restaurant!";
    content.appendChild(h2);

    const p = document.createElement("p");
    p.innerText = "Tastes beyond imagination!!";
    content.appendChild(p);
}
export {loadPage};

