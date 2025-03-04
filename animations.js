document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    // Scroll Reveal Function
    function scrollReveal() {
      const reveals = document.querySelectorAll('.scroll-reveal');
  
      reveals.forEach(reveal => {
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
  
    // Add scroll reveal to additional sections
    const sectionsToReveal = [
      '#about-artist .artist-info', 
      '#products .products-grid', 
      '#contact .contact-info'
    ];
  
    sectionsToReveal.forEach(selector => {
      const section = document.querySelector(selector);
      if (section) {
        section.classList.add('scroll-reveal');
      }
    });
  
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Initial scroll reveal
    scrollReveal();
  
    // Add scroll event listener
    window.addEventListener('scroll', scrollReveal);
  });
  