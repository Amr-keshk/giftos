const bars = document.querySelectorAll(".close-btn span")
const closeBtn = document.querySelector(".close-btn")
const navList = document.querySelector(".nav-list")

closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("active");
  navList.classList.toggle("mobile-active")
})
