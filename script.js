// Scroll-to-top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none";
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dark mode toggle
function toggleDark() {
  document.body.classList.toggle("dark-mode");
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  if (document.body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// Loader fade out
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if(loader) loader.style.opacity = 0;
  setTimeout(() => { if(loader) loader.style.display = 'none'; }, 600);
});

// Scroll progress bar
window.addEventListener('scroll', function() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  if(scrollProgress) scrollProgress.style.width = scrolled + '%';
});

// Typing animation
if (window.Typed) {
  new Typed('#typed', {
    strings: ["Welcome to my Portfolio", "I'm Joy Ruth", "Software Developer | Student | Dreamer"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1200,
    loop: true
  });
}

// Animate skill bars on scroll
function animateSkills() {
  document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.classList.contains('html') ? '90%' :
      bar.classList.contains('css') ? '75%' :
      bar.classList.contains('python') ? '60%' :
      bar.classList.contains('c') ? '50%' : '0';
    bar.style.width = width;
  });
}

// Fade-in sections on scroll
function revealSections() {
  document.querySelectorAll('section, .glass').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) {
      sec.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', () => {
  revealSections();
  animateSkills();
});

// Initialize particles.js
if(window.particlesJS) {
  particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json', function(){});
}

// Contact form animation
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send';
      btn.disabled = false;
      contactForm.reset();
      btn.classList.add('sent');
      setTimeout(() => btn.classList.remove('sent'), 1200);
    }, 1200);
  });
}