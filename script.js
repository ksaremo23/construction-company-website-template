(function () {
  'use strict';

  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  var contactForm = document.getElementById('contactForm');
  var yearEl = document.getElementById('year');

  // Header scroll state
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader);
  updateHeader();

  // Mobile nav toggle
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });

    document.querySelectorAll('.nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form submit (demo – no backend)
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = 'Message Sent';
        contactForm.reset();
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 2000);
      }, 800);
    });
  }
})();
