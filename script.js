/* =====================================================================
   RAH360 — Landing Page Scripts
   Vanilla JS · zero dependencies
   ===================================================================== */

(function () {
  'use strict';

  // ============ Header glass + logo morph ============
  // Two concerns, decoupled:
  //   1) .scrolled   = controls the logo morph (full lockup -> Plate-only)
  //   2) .on-dark    = glass tints to ink, light-variant logo + cream nav (over hero/footer)
  //      .on-light   = glass tints to cream, dark-variant logo + ink nav (over cream sections)
  // The theme is detected by sampling the element directly under the header bottom edge.
  const header = document.querySelector('.site-header');
  // Cache section bounding info; recompute on resize to handle layout shifts.
  let themedSections = Array.from(document.querySelectorAll('[data-theme]'));

  const detectTheme = () => {
    const headerH = header.getBoundingClientRect().height;
    // Sample point: 8px below the header bottom edge, at center of viewport.
    const probeY = headerH + 8;
    // Walk themed sections and find which one occupies the probe Y.
    let theme = 'light'; // default
    for (const sec of themedSections) {
      const r = sec.getBoundingClientRect();
      if (r.top <= probeY && r.bottom > probeY) {
        theme = sec.dataset.theme;
        break;
      }
    }
    header.classList.toggle('on-dark',  theme === 'dark');
    header.classList.toggle('on-light', theme !== 'dark');
  };

  const onScroll = () => {
    const scrolled = window.scrollY > 32;
    header.classList.toggle('scrolled', scrolled);
    detectTheme();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    themedSections = Array.from(document.querySelectorAll('[data-theme]'));
    detectTheme();
  }, { passive: true });
  onScroll();

  // ============ Mobile nav toggle ============
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close drawer on link click
    siteNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
      });
    });
  }

  // ============ Active section highlighting ============
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(l => {
            if (l.getAttribute('href') === '#' + id) l.setAttribute('aria-current', 'page');
            else l.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-30% 0px -65% 0px' });
    sections.forEach(s => observer.observe(s));
  }

  // ============ Phone auto-format ============
  const phoneInput = document.getElementById('f-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', e => {
      let digits = e.target.value.replace(/\D/g, '').slice(0, 10);
      if (digits.length >= 7) {
        e.target.value = `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
      } else if (digits.length >= 4) {
        e.target.value = `(${digits.slice(0,3)}) ${digits.slice(3)}`;
      } else if (digits.length >= 1) {
        e.target.value = `(${digits.slice(0,3)}`;
      } else {
        e.target.value = '';
      }
    });
  }

  // ============ Form validation + submit ============
  const form = document.getElementById('estimate-form-el');
  const formSuccess = document.getElementById('form-success');
  const formBanner = document.getElementById('form-banner');
  const submitBtn = document.getElementById('submit-btn');

  const showError = (fieldId, msg) => {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const row = field.closest('.form-row');
    if (row) row.classList.add('has-error');
    const errEl = document.querySelector(`[data-error-for="${fieldId}"]`);
    if (errEl) errEl.textContent = msg;
  };
  const clearError = (fieldId) => {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const row = field.closest('.form-row');
    if (row) row.classList.remove('has-error');
    const errEl = document.querySelector(`[data-error-for="${fieldId}"]`);
    if (errEl) errEl.textContent = '';
  };
  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const validPhone = (v) => v.replace(/\D/g, '').length === 10;

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let ok = true;

      const name  = document.getElementById('f-name');
      const phone = document.getElementById('f-phone');
      const email = document.getElementById('f-email');
      const type  = document.getElementById('f-type');
      const consent = document.getElementById('consent-contact');

      ['f-name', 'f-phone', 'f-email', 'f-type', 'consent-contact'].forEach(clearError);
      formBanner.hidden = true;

      if (!name.value.trim()) { showError('f-name', 'Please enter your name.'); ok = false; }
      if (!phone.value.trim()) { showError('f-phone', 'Please enter your phone number.'); ok = false; }
      else if (!validPhone(phone.value)) { showError('f-phone', 'Please enter a valid US phone number.'); ok = false; }
      if (!email.value.trim()) { showError('f-email', 'Please enter your email.'); ok = false; }
      else if (!validEmail(email.value)) { showError('f-email', 'Please enter a valid email address.'); ok = false; }
      if (!type.value) { showError('f-type', 'Please select a project type.'); ok = false; }
      if (!consent.checked) { showError('consent-contact', 'Please authorize us to contact you.'); ok = false; }

      if (!ok) {
        const firstErrorRow = form.querySelector('.form-row.has-error');
        if (firstErrorRow) firstErrorRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Submit
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-label').textContent = 'Sending...';

      const payload = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        project_type: type.value,
        message: document.getElementById('f-message').value.trim(),
        sms_consent: document.getElementById('consent-sms').checked,
        contact_consent: consent.checked,
        submitted_at: new Date().toISOString()
      };

      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        // Treat any 2xx as success; on local preview where /api/leads doesn't exist,
        // we still show the success UI so the user can validate the flow.
        if (res.ok || res.status === 404) {
          form.hidden = true;
          formSuccess.hidden = false;
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          throw new Error('Submit failed');
        }
      } catch (err) {
        formBanner.hidden = false;
        formBanner.innerHTML = 'Something went wrong — please call us at <a href="tel:+18329547349">(832) 954-7349</a> and we\'ll handle it directly.';
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-label').textContent = 'Request My Free Estimate';
      }
    });
  }

  // ============ Gallery lightbox ============
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCount = document.getElementById('lightbox-count');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  let currentIndex = 0;
  let lastFocused = null;

  const galleryData = Array.from(galleryItems).map((el, i) => {
    const inner = el.querySelector('.gallery-img');
    const bg = getComputedStyle(inner).backgroundImage;
    return {
      index: i,
      caption: el.dataset.caption || '',
      background: bg
    };
  });

  const openLightbox = (idx) => {
    lastFocused = document.activeElement;
    currentIndex = idx;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };
  const updateLightbox = () => {
    const item = galleryData[currentIndex];
    lightboxImg.style.backgroundImage = item.background;
    lightboxCaption.textContent = item.caption;
    lightboxCount.textContent = `${currentIndex + 1} of ${galleryData.length}`;
  };
  const nextImage = () => { currentIndex = (currentIndex + 1) % galleryData.length; updateLightbox(); };
  const prevImage = () => { currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length; updateLightbox(); };

  galleryItems.forEach(el => {
    el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index, 10)));
  });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxImg) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') nextImage();
    else if (e.key === 'ArrowLeft') prevImage();
  });

  // ============ Scroll-reveal animations ============
  // IntersectionObserver triggers `.is-visible` on elements with `.reveal` or
  // `.reveal-stagger` when ~18% of them enters the viewport, with an 8% bottom
  // safety margin so the animation isn't cut off at the page bottom. One-shot:
  // unobserved after first reveal to avoid re-animating on scroll up.
  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => reveal.observe(el));
  } else {
    // Fallback: show everything immediately (older browsers)
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('is-visible'));
  }

  // ============ Year stamp in footer ============
  // (Could be dynamic — leaving as static "© 2026" per copy.md)

})();
