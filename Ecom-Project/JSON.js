let http = new XMLHttpRequest();
http.open("get", "products.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      output += `
            <div class="product">
               <p class="title">${item.shipModel}</p>
               <img src="${item.shipPhoto}" alt="${item.shipDescription}">
               <p class="description">${item.shipDescription}</p>
               <p class="price">
                  <span>$</span>
                  <span>${item.shipPrice}</span>
               </p>
               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};
