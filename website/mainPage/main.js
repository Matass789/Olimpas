// Headeris
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// ----

// Komanda (Karuselė)
$('.team-slider').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout:5000,
  smartSpeed: 450,
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    991: {
      items: 3
    },
    1200: {
      items: 3
    },
    1920: {
      items: 3
    }
  }
});

// ----  

// Rėmėjai

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

// ----