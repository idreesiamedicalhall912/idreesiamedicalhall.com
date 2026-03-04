const slides = document.querySelectorAll('.slider');
const container = document.querySelector('.slider-cont');
let index = 0;

function showSlide() {
  container.style.transform = `translateX(-${index * 100}%)`;
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);
function slideForward() {
  container.style.transform = `translateX(-${index * 100}%)`;
  index = (index + 1) % slides.length;
}
function slideBack() {
  container.style.transform = `translateX(-${index * 100}%)`;
  index = (index - 1 + slides.length) % slides.length;
}


lucide.createIcons();


const navMenu = document.querySelector("nav .nav-cont>ul");
function openMenu() {
  navMenu.style.right = "0px";
}
function closeMenu() {
  navMenu.style.right = "-100%";
}


// Make Contact
function contactOptions() {
  Swal.fire({
    title: 'Contact Us',
    text: 'How would you like to reach us?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '<i class="bi bi-telephone-fill"></i> Call',
    cancelButtonText: '<i class="bi bi-whatsapp"></i> WhatsApp',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      // Call option
      window.location.href = 'tel:+923035591912'; // Replace with your number
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // WhatsApp option
      window.open('https://wa.me/923035591912', '_blank'); // Replace with your number
    }
  });
}
