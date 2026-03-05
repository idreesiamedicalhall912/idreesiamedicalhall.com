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



// Full or less

function showFull() {
  const productCardCont = document.getElementById("cc-c");
  productCardCont.classList.add('active');
}
function showLess() {
  const productCardCont = document.getElementById("cc-c");
  productCardCont.classList.remove('active');

}

let offers = [
  {
    id: 'HB1',
    name: 'Collagen + B-12',
    img: 'herbiotic_images/1.jpg',
    disc: '7%',

  },
  {
    id: 'HB2',
    name: 'Biotin Plus + Biotin Shampoo',
    img: 'herbiotic_images/2.png',
    disc: '5%',

  },
]



// Modal For Offer
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.transition = 'all 0.3s ease';
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
}

function modalTimer() {
  let remaining = 10;
  const timerDisplay = document.querySelector("#closeTimer");
  const timer = setInterval(() => {
    timerDisplay.textContent = "Close in " + remaining + "s";
    remaining--;
    if (remaining < 0) {
      clearInterval(timer);
      closeModal('offerModal1');
    }
  }, 1000);
}



function showRandomOffer() {
  let randomIndex = Math.floor(Math.random() * offers.length);
  let offer = offers[randomIndex];

  document.getElementById("modalImage").src = offer.img;

  let message = `Hello, I am interested in this offer:
    Offer ID: ${offer.id}
    Product: ${offer.name}
    Discount: ${offer.disc}
    image: Image: https://idreesiamedicalhall912.github.io/idreesiamedicalhall.com/herbiotic_images/${offer.img}
  `;
  document.getElementById("offerLink").href =
    "https://wa.me/923035591912?text=" + encodeURIComponent(message);
  modalTimer();
}

window.onload = showRandomOffer();