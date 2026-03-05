/**
 * GOKUL - Handcrafted Personal Portfolio
 * Simple, human-made JavaScript interactions
 * No robotic animations, no AI patterns
 */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // Navbar scroll effect - Simple threshold
    // ============================================
    const navbar = document.getElementById('navbar');
    let ticking = false;

    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 30) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ============================================
    // Mobile navigation toggle
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ============================================
    // Active nav link based on scroll position
    // ============================================
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    updateActiveNavLink();

    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Simple reveal on scroll - Intersection Observer
    // ============================================
    const revealElements = document.querySelectorAll('.sketch-card, .sketch-category, .timeline-item, .sketch-block');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        revealObserver.observe(el);
    });

    // ============================================
    // Card hover - Subtle lift effect (desktop only)
    // ============================================
    const cards = document.querySelectorAll('.sketch-card, .checklist-item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            cards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.85';
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            cards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // ============================================
    // Tag hover effect - Organic movement
    // ============================================
    const tags = document.querySelectorAll('.handwritten-tag, .role-tag');

    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const randomRotate = (Math.random() - 0.5) * 4;
            this.style.transform = `rotate(${randomRotate}deg)`;
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // ============================================
    // Timeline node pulse on scroll
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const node = entry.target.querySelector('.node-dot');
                if (node) {
                    node.style.animation = 'none';
                    setTimeout(() => {
                        node.style.animation = 'sparkle 2s ease-in-out infinite';
                    }, 10);
                }
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // ============================================
    // Add current year to footer
    // ============================================
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // ============================================
    // Keyboard navigation
    // ============================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ============================================
    // Simple button click effect - Paper press
    // ============================================
    const buttons = document.querySelectorAll('.btn-sketch, .contact-link');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Create simple ripple
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(184, 92, 56, 0.2);
                border-radius: 50%;
                transform: scale(0);
                animation: simpleRipple 0.5s ease-out;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            `;

            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);

            setTimeout(() => ripple.remove(), 500);
        });
    });

    // Add simple ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes simpleRipple {
            to {
                transform: scale(2.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // Handle resize with debounce
    // ============================================
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Just let CSS handle it - no need for JS intervention
        }, 250);
    });

    // ============================================
    // Console message - Personal touch
    // ============================================
    console.log('%c👋 Welcome to Gokul\'s Portfolio', 'color: #b85c38; font-size: 22px; font-weight: bold;');
    console.log('%cHandcrafted with care — no AI, no frameworks, just human code.', 'color: #718096; font-size: 13px;');
    console.log('%cBuilt by L. Gokul, Chennai', 'color: #5c7c8a; font-size: 12px;');

});
