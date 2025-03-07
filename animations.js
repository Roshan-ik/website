document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Scroll Reveal Function
  function scrollReveal() {
    document.querySelectorAll('.scroll-reveal').forEach(reveal => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Initial scroll reveal
  scrollReveal();
  window.addEventListener('scroll', scrollReveal);
});

// Image Gallery Modal
// Global variables to track current modal state
let currentImages = [];
let currentImageIndex = 0;

// Function to open the modal with product images
function openModal(title, images) {
  // Get modal elements
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');

  // Set modal title
  modalTitle.textContent = title;

  // Store images and reset index
  currentImages = images;
  currentImageIndex = 0;

  // Set first image
  if (currentImages.length > 0) {
    modalImage.src = currentImages[0];
    modal.style.display = 'flex';
  }

  // Toggle modal navigation buttons based on image count
  const prevButton = document.querySelector('.modal-nav .prev');
  const nextButton = document.querySelector('.modal-nav .next');
  
  if (currentImages.length <= 1) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('productModal');
  modal.style.display = 'none';
}

// Function to navigate to previous image
function prevImage() {
  if (currentImages.length <= 1) return;

  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = currentImages.length - 1;
  }
  
  const modalImage = document.getElementById('modalImage');
  modalImage.src = currentImages[currentImageIndex];
}

// Function to navigate to next image
function nextImage() {
  if (currentImages.length <= 1) return;

  currentImageIndex++;
  if (currentImageIndex >= currentImages.length) {
    currentImageIndex = 0;
  }
  
  const modalImage = document.getElementById('modalImage');
  modalImage.src = currentImages[currentImageIndex];
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  const modal = document.getElementById('productModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
});