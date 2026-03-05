/* ============================================
   BuySignal — Interactions & Animations
   ============================================ */

(function () {
  'use strict';

  // ---------- Navigation Scroll Effect ----------
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ---------- Mobile Menu ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Scroll-triggered Animations ----------
  var animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    animatedElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ---------- Pricing Billing Toggle ----------
  var billingToggle = document.getElementById('billingToggle');
  var monthlyLabel = document.getElementById('monthlyLabel');
  var annualLabel = document.getElementById('annualLabel');
  var isAnnual = false;

  if (billingToggle) {
    billingToggle.addEventListener('click', function () {
      isAnnual = !isAnnual;
      billingToggle.classList.toggle('active', isAnnual);
      monthlyLabel.classList.toggle('active', !isAnnual);
      annualLabel.classList.toggle('active', isAnnual);

      // Update prices
      document.querySelectorAll('.pricing-price[data-monthly]').forEach(function (el) {
        var amount = el.querySelector('.price-amount');
        if (amount) {
          var price = isAnnual
            ? el.getAttribute('data-annual')
            : el.getAttribute('data-monthly');
          amount.textContent = price;
        }
      });

      // Update period text
      document.querySelectorAll('.period-text').forEach(function (el) {
        el.textContent = isAnnual ? 'per year' : 'per month';
      });
    });
  }

  // ---------- FAQ Accordion ----------
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(function (other) {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Open clicked (if wasn't already open)
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80; // nav height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---------- Waitlist (mailto link, no form handler needed) ----------
})();
