const heroData = [
  {
    text: "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.",
    image: "images/shopping-girl-1.avif"
  },
  {
    text: "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.",
    image: "images/shopping-girl-2.avif"
  },
  {
    text: "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.",
    image: "images/shopping-girl-3.avif"
  },
]


let heroHTML = ""
heroData.forEach(section => {
  heroHTML += `
    <div class="carousel swiper-slide">
      <div class="left-side">
        <h1>welcome to our gift shop</h1>
        <p class="product-detail">${section.text}</p>
        <a class="btn contact-btn" href="#">contact us</a>
      </div>
      <div class="right-side">
        <img class="shopping-girl-image" src="${section.image}" alt="shopping girl">
      </div>
    </div>
  `
})

document.querySelector(".carousel-track").innerHTML = heroHTML


try {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}catch {
  console.log("Error ⚠️ No Internet Connection")
}



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





const bars = document.querySelectorAll(".close-btn span")
const closeBtn = document.querySelector(".close-btn")
const navList = document.querySelector(".nav-list")

closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("active");
  navList.classList.toggle("mobile-active")
})




const testimonialData = [
  {
    name: "george",
    jobTitle: "Lorem ipsum dolor sit.",
    whatSaid: "editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
  },
  {
    name: "Rochak",
    jobTitle: "Lorem ipsum dolor sit.",
    whatSaid: "Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    name: "Morijorch",
    jobTitle: "Lorem ipsum dolor sit.",
    whatSaid: "editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
  },
  {
    name: "Brad Johns",
    jobTitle: "Lorem ipsum dolor sit.",
    whatSaid: "editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
  },
]

const testimonialContainer = document.querySelector(".testimonial-container")
let testimonialHTML = "";
testimonialData.forEach(testimonial => {
  testimonialHTML += `
    <div class="testimonial">
      <h4 class="testimonial-name">
        ${testimonial.name}
        <i class="fa-solid fa-quote-left"></i>
      </h4>
      <h6 class="job-title">${testimonial.jobTitle}</h6>
      <p class="what-said" >${testimonial.whatSaid}</p>
    </div>
  `
})

testimonialContainer.innerHTML = testimonialHTML;
let current = 0;
const testimonials = document.querySelectorAll(".testimonial");
const testimonialLength = testimonials.length
const prevBtn = document.querySelector(".testimonial-prev-btn");
const nextBtn = document.querySelector(".testimonial-next-btn");
let intId = 0;
const startSlider = () => {
  intId = setInterval(() => {
    moveSlider(-1)
  }, 2000)};
startSlider()

function moveSlider(sign) {
  current = ( current - sign + testimonialLength ) % testimonialLength;
  testimonialContainer.style.transform = `translateX(-${current * 100}%)`;
}
nextBtn.addEventListener("click", () => {
  clearInterval(intId);
  moveSlider(-1)
  setTimeout(() => {
    clearInterval(intId);
    startSlider()
  }, 2000)
})
prevBtn.addEventListener("click", () => {
  clearInterval(intId);
  moveSlider(1)
  setTimeout(() => {
    clearInterval(intId);
    startSlider()
  }, 3000)
})


