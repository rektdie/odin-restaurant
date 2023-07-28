const content = document.querySelector("#content");
import "./style.css";

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const restaurantName = document.createElement("div");
    restaurantName.textContent = "Hour Cookery";
    restaurantName.classList.add("restaurant-name");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const home = document.createElement("a");
    home.textContent = "Home";
    const menu = document.createElement("a");
    menu.textContent = "Menu";
    const contacts = document.createElement("a");
    contacts.textContent = "Contacts";

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contacts);

    header.appendChild(restaurantName);
    header.appendChild(navbar);

    return header;
}


const loadHome = () => {
    content.appendChild(createHeader());
};

export {loadHome};