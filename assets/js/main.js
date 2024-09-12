/**
* Template Name: eNno - v4.8.1
* Template URL: https://bootstrapmade.com/enno-free-simple-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)




  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }




  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }




  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }






  document.addEventListener("DOMContentLoaded", function() {
    const mobileNavToggle = document.getElementById("mobile-menu-toggle");
    const navList = document.getElementById("nav-list");

    // Toggle the mobile menu when the button is clicked
    mobileNavToggle.addEventListener("click", function() {
        navList.classList.toggle("navbar-mobile");

        // Switch the menu icon from the hamburger (bi-list) to close (bi-x)
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
    });

    // Close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navList.classList.remove("navbar-mobile");
            mobileNavToggle.classList.add("bi-list");
            mobileNavToggle.classList.remove("bi-x");
        });
    });
});


  



  
  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });




  $(document).ready(function(){
    $('.testimonial-carousel').slick({
      infinite: true,
      slidesToShow: 3, /* Show 3 testimonials at a time */
      slidesToScroll: 1, /* Scroll one by one */
      autoplay: true, /* Auto-scroll */
      autoplaySpeed: 2000, /* Auto-scroll speed: 2000ms = 2 seconds */
      speed: 600, /* Speed of slide transition */
      arrows: true, /* Enable left and right arrows */
      dots: true, /* Enable dots for navigation */
      pauseOnHover: true, /* Pause auto-scroll when hovering */
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  

// Accordion functionality with smooth height transition
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', function () {
      const faqItem = this.parentElement;
      const faqAnswer = faqItem.querySelector('.faq-answer');

      if (faqItem.classList.contains('active')) {
          // Close the item
          faqItem.classList.remove('active');
          faqAnswer.style.maxHeight = null; // Reset the height
      } else {
          // Close other items
          document.querySelectorAll('.faq-item').forEach(otherItem => {
              const otherAnswer = otherItem.querySelector('.faq-answer');
              otherItem.classList.remove('active');
              otherAnswer.style.maxHeight = null;
          });

          // Open the clicked item
          faqItem.classList.add('active');
          faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"; // Set the height dynamically
      }
  });
});






})()














