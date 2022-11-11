const textBoxes = document.querySelectorAll(".text-block");
window.addEventListener('scroll', checktextBoxes);
checktextBoxes();
function checktextBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  textBoxes.forEach((textbox) => {
    const boxTop = textbox.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
      textbox.classList.add('show');
    } else {
      textbox.classList.remove('show');
    }
  });
}
const boxes = document.querySelectorAll(".text2-3");
window.addEventListener('scroll', checkboxes);
checkboxes();
function checkboxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
const services = document.querySelectorAll(".service");
window.addEventListener('scroll', checkservices);
checkservices();
function checkservices() {
  const triggerBottom = window.innerHeight / 5 * 4;
  services.forEach((service) => {
    const serviceTop = service.getBoundingClientRect().top;
    if(serviceTop < triggerBottom) {
      service.classList.add('show');
    } else {
      service.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', function(){
  var navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

const tl = gsap.timeline();
tl.fromTo(".section2",{xPercent:100, x:0},{xPercent:0})
.fromTo(".section2 img",{xPercent:100, x:0},{xPercent:0},0)


ScrollTrigger.create({
  animation:tl,
  trigger: ".after-before-section",
  start: "canter canter",
  end: "+=2000",
  scrub: true,
  pin: true,
  anticipatePin:1
});