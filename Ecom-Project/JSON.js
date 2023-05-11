let http = new XMLHttpRequest();
http.open("get", "products.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let product of products) {
      output += `
            <div class="product">
               <p class="title">${product.shipModel}</p>
               <img src="${product.shipPhoto}" alt="${product.shipDescription}">

               <p class="description">${product.shipDescription}</p>
               <p class="price">
                  <span>$</span>
                  <span>${product.shipPrice}</span>
               </p>
               <button type = "button" class = "add-to-cart-btn">
                <i class = "fas fa-shopping-cart"></i>Add To Cart
              </button>
            </div>
         `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
