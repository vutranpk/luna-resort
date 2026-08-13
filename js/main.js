// GSAP Animations & Interactions
window.addEventListener('load', () => {
    // Ensure GSAP is loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // 1. Polaroid Parallax & Morph Transition (Hero to Section 2)
        const polaroid = document.getElementById('polaroid-img');
        const target = document.getElementById('polaroid-target');

        if (polaroid && target) {
            gsap.set(polaroid, { transformOrigin: "top left" });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    endTrigger: target,
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });

            tl.to(polaroid, {
                x: () => {
                    const pRect = polaroid.getBoundingClientRect();
                    const tRect = target.getBoundingClientRect();
                    const currentLeft = pRect.left - gsap.getProperty(polaroid, "x");
                    return tRect.left - currentLeft;
                },
                y: () => {
                    const pRect = polaroid.getBoundingClientRect();
                    const tRect = target.getBoundingClientRect();
                    const currentTop = pRect.top - gsap.getProperty(polaroid, "y");
                    return tRect.top - currentTop;
                },
                scale: () => target.offsetWidth / polaroid.offsetWidth,
                rotation: 0,
                ease: "none"
            });
        }

        // 2. Sticky Booking Bar Reveal
        const bookingBar = document.getElementById('booking-bar');
        const heroSection = document.querySelector('section'); // The first section is the Hero
        if (bookingBar && heroSection) {
            ScrollTrigger.create({
                trigger: heroSection,
                start: "bottom center", // When bottom of hero hits center of viewport
                onEnter: () => bookingBar.classList.remove('translate-y-full'),
                onLeaveBack: () => bookingBar.classList.add('translate-y-full'),
            });
        }

        // 3. Cinematic Text Reveal for Headings
        const revealHeadings = document.querySelectorAll('h2');
        revealHeadings.forEach(heading => {
            gsap.fromTo(heading, 
                { opacity: 0, y: 80, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
                { 
                    opacity: 1, 
                    y: 0, 
                    clipPath: 'polygon(0% -20%, 100% -20%, 100% 120%, 0% 120%)',
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 90%", // Trigger when top of heading hits 90% from top of viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 4. Image Parallax (Subtle depth without gaps)
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Skip polaroid and hero images, and skip horizontally scrolling villa images
            if(img.closest('#polaroid-img') || img.closest('#polaroid-target') || img.closest('.hero-arch') || img.closest('#villas-container')) return;
            
            const parent = img.parentElement;
            if (parent) {
                parent.style.overflow = 'hidden';
            }
            
            // Wrap the image to separate GSAP transform from CSS hover transform
            const wrapper = document.createElement('div');
            wrapper.style.width = '100%';
            wrapper.style.height = '100%';
            wrapper.style.display = 'block';
            parent.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            
            // Scale up the wrapper enough to hide the -10% to +10% vertical movement
            gsap.set(wrapper, { scale: 1.2, transformOrigin: "center center" });
            gsap.fromTo(wrapper, 
                { yPercent: -10 },
                {
                    yPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: parent,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

        // 5. Dynamic Footer Curtain Reveal
        const footer = document.querySelector('footer');
        const mainWrapper = document.getElementById('main-wrapper');
        if (footer && mainWrapper) {
            function updateFooterMargin() {
                const footerHeight = footer.offsetHeight;
                mainWrapper.style.marginBottom = `${footerHeight}px`;
            }
            window.addEventListener('resize', updateFooterMargin);
            // Wait a tick for fonts/layout to settle before initial calculation
            setTimeout(updateFooterMargin, 100);
        }

        // 6. Horizontal Scroll for Villas (Desktop only)
        const villasSection = document.getElementById('villas-section');
        const villasContainer = document.getElementById('villas-container');
        
        // MatchMedia to only pin on desktop (so mobile remains swipeable/scrollable naturally or via CSS)
        let mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            if (villasSection && villasContainer) {
                // Calculate total distance to scroll horizontally
                // Subtract the padding (e.g., pl-32 is 8rem = 128px, plus right gap)
                // We use scrollWidth - window.innerWidth to get the exact scrollable distance
                const paddingEnd = 128;
                const scrollWidth = villasContainer.scrollWidth - window.innerWidth + paddingEnd;
                if (scrollWidth > 0) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: villasSection,
                            start: "top top",
                            end: () => `+=${scrollWidth + window.innerHeight}`,
                            pin: true,
                            scrub: 1,
                            invalidateOnRefresh: true
                        }
                    });
                    
                    const subWrapper = document.getElementById('villa-sub-wrapper');
                    
                    // 1. Subtitle fades in and slides up
                    tl.fromTo(subWrapper, 
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
                    )
                    // 2. Pause slightly
                    .to({}, {duration: 0.5})
                    // 3. Horizontal Scroll
                    .to(villasContainer, {
                        x: -scrollWidth,
                        ease: "none",
                        duration: 8 // Make horizontal scroll take the majority of the scroll distance
                    });
                }      
            }
        });

        // 7. Global Entrance Animations (Fade Up)
        const fadeUpElements = document.querySelectorAll('p, h3, button, .text-\\[20vw\\], .text-\\[25vw\\]');
        fadeUpElements.forEach(el => {
            // Exclude elements inside the booking bar, villas section, or hero section
            if(el.closest('#booking-bar') || el.closest('#villas-section') || el.closest('section:first-of-type')) return;
            
            gsap.fromTo(el, 
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 8. Footer "L U N A" Staggered Reveal
        const footerSpans = document.querySelectorAll('footer .font-heading > span');
        if (footerSpans.length > 0) {
            gsap.fromTo(footerSpans, 
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: "footer",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

    }
});
