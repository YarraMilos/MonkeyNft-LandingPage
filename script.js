
const hamb = document.querySelector(".burger__menu__icon");
const popup = document.querySelector(".popup");
const body = document.body;


hamb.addEventListener("click", function(e) {
  e.preventDefault();
  popup.classList.toggle('open')
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});



AOS.init({
  duration: 1200,
})
