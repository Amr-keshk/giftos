

const productsData = [
  { status: "new",
    imageURL: "images/product-images/ring-1.png",
    name: "ring",
    price: "360",
  },
  { status: "new",
    imageURL: "images/product-images/watch-1.png",
    name: "watch",
    price: 330,
  },
  { status: "new",
    imageURL: "images/product-images/teddy-1.png",
    name: "teddy bear",
    price: 110,
  },
  { status: "new",
    imageURL: "images/product-images/flower-1.png",
    name: "flower bouquet",
    price: 45,
  },
  { status: "new",
    imageURL: "images/product-images/teddy-2.png",
    name: "teddy bear",
    price: 95,
  },
  { status: "new",
    imageURL: "images/product-images/flower-2.png",
    name: "flower bouquet",
    price: 70,
  },
  { status: "new",
    imageURL: "images/product-images/watch-2.png",
    name: "watch",
    price: "400",
  },
  { status: "new",
    imageURL: "images/product-images/ring-2.png",
    name: "ring",
    price: "450",
  },

];



let productsHTML = "";
productsData.forEach(product => {
  productsHTML += `
    <div class="product">
      <span class="product-status">${product.status}</span>
      <img class="product-image" src="${product.imageURL}" alt="${product.name}">
      <div class="product-details">
        <h6 class="product-name">${product.name}</h6>
        <h6 class="product-price">
          price
          <span class="price">$${product.price}</span>
        </h6>
      </div>
    </div>
  `
});

document.querySelector(".products").innerHTML = productsHTML;
