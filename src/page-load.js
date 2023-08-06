const content = document.querySelector("#content");
import "./style.css";
import {loadPage} from "./index.js";

import imgCheeseBurger from "./images/cheese burger.png";
import imgChickenBasket from "./images/chicken basket.png";
import imgChickenSandwich from "./images/chicken sandwich.png";
import imgHotdog from "./images/hotdog.png";

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
    home.classList.add("navlink");
    const menu = document.createElement("a");
    menu.textContent = "Menu";
    menu.classList.add("navlink");
    const contacts = document.createElement("a");
    contacts.textContent = "Contacts";
    contacts.classList.add("navlink");

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contacts);

    header.appendChild(restaurantName);
    header.appendChild(navbar);

    return header;
}

function createHomeMain() {
    const main = document.createElement("div");
    main.classList.add("main");

    const hero = document.createElement("div");
    hero.textContent = "Visit our restaurant full of delicious food!";
    hero.classList.add("hero");

    const small = document.createElement("div");
    small.textContent = "Cheap and tasty!";
    small.classList.add("small");

    const order = document.createElement("button");
    order.textContent = "Order Now";
    order.setAttribute("id", "order");
    order.addEventListener("click", loadPage);

    main.appendChild(hero);
    main.appendChild(small);
    main.appendChild(order);

    return main;
}

function createHomeInfo() {
    const info = document.createElement("div");
    info.classList.add("info");

    const location = document.createElement("div");
    location.classList.add("location");

    const address1 = document.createElement("div");
    address1.textContent = "160 Sherman Court";

    const address2 = document.createElement("div");
    address2.textContent = "New York, NY 10031";

    const hours = document.createElement("div");
    hours.classList.add("hours");

    const hours1 = document.createElement("div");
    hours1.textContent = "Mon-Thurs: 7am-7pm";

    const hours2 = document.createElement("div");
    hours2.textContent = "Fri-Sun: 7am-10pm";

    hours.appendChild(hours1);
    hours.appendChild(hours2);

    location.appendChild(address1);
    location.appendChild(address2);

    info.appendChild(location);
    info.appendChild(hours);

    return info;
}

const createFood = (name, price, ingridients, image) => {
    return {name, price, ingridients, image};
}

const foods = [
    createFood("Cheese Burger", "3", "Homestyle Patty: Beef, Encapsulated Salt, Spice, Toasted Bun", imgCheeseBurger),
    createFood("Chicken Sandwich", "2,6", "Nice Chicken Strips", imgChickenSandwich),
    createFood("Hot Dog", "2,2", "Classic Delicious Hotdog", imgHotdog),
    createFood("Chicken Basket", "4", "White meat seasoned chicken strips are served with crispy fries", imgChickenBasket)
]


function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    for (let i = 0; i < 4; i++) {
        const currentFood = foods[i];

        const foodDiv = document.createElement("div");
        foodDiv.classList.add("food");

        const foodName = document.createElement("div");
        foodName.classList.add("food-name");
        foodName.textContent = currentFood.name;

        const container = document.createElement("div");
        container.classList.add("container");

        const ingridients = document.createElement("div");
        ingridients.classList.add("ingridients");
        ingridients.textContent = currentFood.ingridients;

        const imgFood = document.createElement("img");
        imgFood.classList.add("img-food");
        imgFood.setAttribute("src", currentFood.image);

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = currentFood.price + " $";

        container.appendChild(imgFood);
        container.appendChild(price);

        foodDiv.appendChild(foodName);
        foodDiv.appendChild(container);
        foodDiv.appendChild(ingridients);

        menu.appendChild(foodDiv);
    }

    return menu;
}

function createContacts() {
    const contactsInfo = document.createElement("div");
    contactsInfo.classList.add("contactsInfo");

    const phoneNumber = document.createElement("h2");
    phoneNumber.textContent = "(302) 123-1234";

    const email = document.createElement("h2");
    email.textContent = "hourcookery@gmail.com";

    contactsInfo.appendChild(phoneNumber);
    contactsInfo.appendChild(email);

    return contactsInfo;
}

const loadHome = () => {
    content.appendChild(createHomeMain());
    content.appendChild(createHomeInfo());
};

const loadMenu = () => {
    content.appendChild(createMenu());
};

const loadContacts = () => {
    content.appendChild(createContacts());
};

const clearSite = () => {
    for (let i = 1; i <= content.childElementCount; i++) {
        content.removeChild(content.lastElementChild);
    }
}

content.appendChild(createHeader());

export {loadHome, clearSite, loadMenu, loadContacts};