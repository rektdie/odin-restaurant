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

const loadHome = () => {
    content.appendChild(createHeader());
    content.appendChild(createHomeMain());
    content.appendChild(createHomeInfo());
};

export {loadHome};