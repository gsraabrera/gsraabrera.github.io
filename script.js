// Initialize particles.js with configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection observer for fade-in effect
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar');
const summarySection = document.querySelector('#summary');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });

            // Change navbar background opacity when at top or in summary section
            if (entry.target.id === "summary") {
              navbar.classList.add('transparent');
            } else {
              navbar.classList.remove('transparent');
            }
    }
    console.log(window.scrollY)
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});


// Initial check to set navbar transparency
if (window.scrollY === 0) {
  console.log(window.scrollY)
  navbar.classList.add('transparent');
}


window.addEventListener('scroll', function() {
  const scrollValue = window.scrollY; // Get the number of pixels the document is currently scrolled vertically.
  // const content = document.querySelector('.content');
  
  // Adjust this value to set the scroll threshold for changing opacity
  const maxScroll = 100;
  if(maxScroll>scrollValue){
    navbar.classList.add('transparent');
  }else{
    navbar.classList.remove('transparent');
  }
  // // Calculate the new opacity
  // const newOpacity = 1 - (scrollValue / maxScroll);

  // // Set the new opacity
  // if (newOpacity >= 0) {
  //     content.style.opacity = newOpacity;
  // }
});