import {loadHome, clearSite, loadMenu, loadContacts} from "./page-load.js";

let page = "Home";
loadHome();

let navLinks = Array.from(document.querySelectorAll(".navlink"));

function loadPage(){
    let target = this;
    if (this.tagName === "BUTTON"){
        target = navLinks[1];
    }
    
    page = target.innerHTML;

    clearSite();
    
    if (page === "Home") {
        loadHome();
    } else if (page === "Menu"){
        loadMenu();
    } else if (page === "Contacts"){
        loadContacts();
    }
    
    navLinks.forEach(navlink => {
        navlink.style.color = "#DBD4D3";
    });
    target.style.color = "orange";
}

navLinks.forEach(link => {
    link.addEventListener("click", loadPage)
});

export {loadPage};