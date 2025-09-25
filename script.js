// 🌠 Image Slider with Fade Transition
const slides = document.querySelectorAll('.slider img');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active', 'fade-in');
    if (idx === i) {
      slide.classList.add('active', 'fade-in');
    }
  });
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

// 🧪 Form Validation with Email Pattern
function validateForm() {
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!email || !message) {
    alert('Please fill in all fields.');
    return false;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  alert('Message sent successfully!');
  return true;
}

// 📱 Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});
