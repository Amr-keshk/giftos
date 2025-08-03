

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


