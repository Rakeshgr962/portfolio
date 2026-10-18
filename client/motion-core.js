/**
 * MOTION-CORE.JS — UNIFIED GSAP, THREE.JS, SMOOTH SCROLL & POINTER ENGINE
 * Incorporating Multi-Reference Techniques:
 * - GSAP ScrollTrigger Scroll Timelines (Scrubbing, Pinning, Mask Reveals)
 * - Custom Magnetic Pointer & Dual-Follower Cursor with Dynamic Badges
 * - Hardware Empathy Smooth Scrolling via Lenis with GSAP Synchronization
 * - Kinetic Typography Character Splitting & Viewport Stagger
 * - Seamless Route Transitions with Page Wipe & State Continuity
 * - Shared WebGL Particles & Shader Fog Integration
 */

(function () {
  'use strict';

  const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HAS_TOUCH = window.matchMedia('(hover: none) or (pointer: coarse)').matches;

  // ========================================================================
  // 1. LENIS SMOOTH SCROLL ENGINE & GSAP SCROLLTRIGGER SYNC (RESPONSIVE & IMMEDIATE)
  // ========================================================================
  let lenisInstance = null;

  function initSmoothScroll() {
    // Keep touch devices on 100% native momentum scrolling
    if (REDUCE_MOTION || HAS_TOUCH) return;
    if (typeof Lenis === 'undefined') return;

    try {
      lenisInstance = new Lenis({
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: false, // Never intercept touch events with virtual scroll
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        autoResize: true,
        infinite: false
      });

      // Synchronize Lenis scroll events with GSAP ScrollTrigger
      if (typeof ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });

        // Use natural lag smoothing instead of 0 to prevent frame freezes during heavy layouts
        gsap.ticker.lagSmoothing(500, 33);
      } else {
        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      // Immediate refresh so initial geometry is calibrated with zero delay
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    } catch (err) {
      console.warn('[MotionCore] Lenis initialization skipped:', err);
    }
  }

  // Expose Lenis instance getter/scroller helper
  window.getLenis = () => lenisInstance;

  // ========================================================================
  // 2. INTERACTIVE DUAL-FOLLOWER CUSTOM CURSOR & MAGNETIC BUTTONS
  // ========================================================================
  function initCustomCursor() {
    if (HAS_TOUCH || REDUCE_MOTION) return;

    // Check if cursor already exists
    let follower = document.querySelector('.custom-cursor-follower');
    let dot = document.querySelector('.custom-cursor-dot');

    if (!follower) {
      follower = document.createElement('div');
      follower.className = 'custom-cursor-follower';
      follower.innerHTML = '<span class="custom-cursor-label">VIEW</span>';
      document.body.appendChild(follower);
    }

    if (!dot) {
      dot = document.createElement('div');
      dot.className = 'custom-cursor-dot';
      document.body.appendChild(dot);
    }

    const label = follower.querySelector('.custom-cursor-label');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        follower.style.opacity = '1';
        dot.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      follower.style.opacity = '0';
      dot.style.opacity = '0';
      isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
      follower.style.opacity = '1';
      dot.style.opacity = '1';
      isVisible = true;
    });

    document.addEventListener('mousedown', () => {
      follower.classList.add('is-active');
    });

    document.addEventListener('mouseup', () => {
      follower.classList.remove('is-active');
    });

    // Render loop with high-precision damping
    function updateCursor() {
      if (isVisible) {
        dotX += (mouseX - dotX) * 0.75;
        dotY += (mouseY - dotY) * 0.75;
        followerX += (mouseX - followerX) * 0.16;
        followerY += (mouseY - followerY) * 0.16;

        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Contextual Hover Triggering
    const interactiveSelectors = [
      { sel: 'a, button, .chip, .les, .card, .filter-btn', label: 'EXPLORE' },
      { sel: '.project-item, .featured-project-card', label: 'DEEP DIVE' },
      { sel: '.action-download-resume, .btn-resume-nav', label: 'PDF' },
      { sel: '.code-preview, .terminal-viewport', label: 'INSPECT' }
    ];

    function attachCursorHooks() {
      interactiveSelectors.forEach(({ sel, label: customLabel }) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (el.dataset.cursorBound) return;
          el.dataset.cursorBound = 'true';

          el.addEventListener('mouseenter', () => {
            follower.classList.add('is-hovering');
            if (label) label.textContent = el.dataset.cursorText || customLabel;
          });

          el.addEventListener('mouseleave', () => {
            follower.classList.remove('is-hovering');
          });
        });
      });

      // Magnetic Buttons
      document.querySelectorAll('.btn-primary, .kage-btn-primary, .btn-secondary, .nav-burger, .kage-btn-social').forEach((btn) => {
        if (btn.dataset.magneticBound) return;
        btn.dataset.magneticBound = 'true';

        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.28;
          const deltaY = (e.clientY - centerY) * 0.28;

          btn.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate3d(0, 0, 0)';
        });
      });
    }

    attachCursorHooks();
    window.addEventListener('contentUpdated', attachCursorHooks);
  }

  // ========================================================================
  // 3. KINETIC TYPOGRAPHY & SPLIT TEXT STAGGER
  // ========================================================================
  function initKineticTypography() {
    if (REDUCE_MOTION || HAS_TOUCH) return;

    const headings = document.querySelectorAll('.editorial-headline');
    headings.forEach((heading) => {
      if (heading.dataset.kineticInitialized) return;
      if (heading.children.length > 0) return; // Preserve complex HTML structures
      heading.dataset.kineticInitialized = 'true';

      const text = heading.textContent.trim();
      const words = text.split(/\s+/);
      
      heading.classList.add('kinetic-header');
      heading.innerHTML = words.map((word) => {
        const chars = word.split('').map((char, i) => {
          return `<span class="kinetic-char" style="transition-delay: ${i * 24}ms">${char}</span>`;
        }).join('');
        return `<span style="display:inline-block; margin-right: 0.28em;">${chars}</span>`;
      }).join('');

      // Intersection Observer trigger
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add('is-in-view');
            observer.unobserve(heading);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(heading);
    });
  }

  // ========================================================================
  // 4. GSAP SCROLLTRIGGER PROGRESS & PARALLAX TIMELINES
  // ========================================================================
  function initGSAPScrollPipelines() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (REDUCE_MOTION) return;

    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveals for cards and timeline entries — only on desktop with smooth ScrollTrigger
    if (!HAS_TOUCH) {
      const revealTargets = ['.project-item', '.capability-item', '.timeline-entry', '.stat-item'];
      revealTargets.forEach((selector) => {
        const items = gsap.utils.toArray(selector);
        if (!items.length) return;

        ScrollTrigger.batch(items, {
          onEnter: (batch) => {
            gsap.fromTo(batch, 
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', overwrite: 'auto' }
            );
          },
          once: true,
          start: 'top 92%'
        });
      });
    }

    // Parallax background filament elements (desktop only)
    if (!HAS_TOUCH) {
      const parallaxImages = document.querySelectorAll('.project-media, .case-study-diagram, .peek-fr');
      parallaxImages.forEach((img) => {
        gsap.to(img, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }
  }

  // ========================================================================
  // 5. SEAMLESS ROUTE TRANSITIONS (INSTANT, CLEAN, NON-BLOCKING)
  // ========================================================================
  function initPageTransitions() {
    // Content is rendered immediately by the browser without blocking overlays.
    // If any legacy overlay element exists in DOM or cache, remove it completely.
    const overlay = document.querySelector('.page-wipe-overlay');
    if (overlay) {
      overlay.remove();
    }

    // Refresh ScrollTrigger geometry once DOM is stable
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  // ========================================================================
  // 6. INITIALIZATION & LIFECYCLE
  // ========================================================================
  function initMotionCore() {
    initSmoothScroll();
    initCustomCursor();
    initKineticTypography();
    initGSAPScrollPipelines();
    initPageTransitions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotionCore);
  } else {
    initMotionCore();
  }

  // Expose hook to global window for dynamic sub-route re-binding
  window.MotionCore = {
    refresh: () => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      window.dispatchEvent(new Event('contentUpdated'));
    }
  };
})();
