// ===================================
// HAMBURGER MENU
// ===================================
function toggleMobileMenu() {
    const overlay = document.querySelector('.mobile-menu-overlay');
    overlay.classList.toggle('active');

    const btn = document.querySelector('.mobile-menu-btn');
    btn.classList.toggle('open');
}

// ===================================
// ENHANCED HERO VIDEO CAROUSEL
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const heroShowcase = document.querySelector('.hero-ugc-showcase');

    if (!heroShowcase) return;

    const heroCards = heroShowcase.querySelectorAll('.hero-video-card');
    let currentHeroIndex = 1; // Start with middle card

    if (heroCards.length === 0) return;

    // MUTE BUTTON FUNCTIONALITY
    document.querySelectorAll('.video-mute-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.hero-video-card');
            const video = card.querySelector('.hero-video');

            // Toggle mute
            video.muted = !video.muted;
            btn.classList.toggle('muted', !video.muted);
        });
    });

    // PLAY/PAUSE VIDEO ON CLICK
    heroCards.forEach((card, index) => {
        const video = card.querySelector('.hero-video');

        card.addEventListener('click', (e) => {
            // Don't trigger if clicking mute button
            if (e.target.closest('.video-mute-btn')) return;

            // If clicking side card, scroll it to center
            if (!card.classList.contains('main')) {
                scrollToHeroCard(index);
            } else {
                // If clicking center card, toggle play/pause
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    });

    // SCROLL TO CARD FUNCTION
    function scrollToHeroCard(targetIndex) {
        if (targetIndex < 0 || targetIndex >= heroCards.length) return;

        currentHeroIndex = targetIndex;

        heroCards.forEach(c => {
            c.classList.remove('main', 'rotate-left', 'rotate-right');
            c.classList.add('small');
        });

        // Set main card
        heroCards[currentHeroIndex].classList.remove('small');
        heroCards[currentHeroIndex].classList.add('main');

        // Set left card
        if (currentHeroIndex > 0) {
            heroCards[currentHeroIndex - 1].classList.add('rotate-left');
        }

        // Set right card
        if (currentHeroIndex < heroCards.length - 1) {
            heroCards[currentHeroIndex + 1].classList.add('rotate-right');
        }

        // Scroll into view
        heroCards[currentHeroIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    // MOBILE SWIPE NAVIGATION
    if (window.innerWidth <= 768) {
        heroShowcase.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;

            if (clickX < width * 0.3) {
                scrollToHeroCard(currentHeroIndex - 1);
            } else if (clickX > width * 0.7) {
                scrollToHeroCard(currentHeroIndex + 1);
            }
        });
    }

    // CATEGORY FILTERING (if category pills exist)
    const categoryPills = document.querySelectorAll('[data-filter-category]');

    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.filterCategory;

            // Update active state
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Filter cards
            heroCards.forEach(card => {
                const cardCategory = card.dataset.category;

                if (category === 'all' || cardCategory === category) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            // Reset to first visible card
            const visibleCards = Array.from(heroCards).filter(c => c.style.display !== 'none');
            if (visibleCards.length > 0) {
                const firstVisibleIndex = Array.from(heroCards).indexOf(visibleCards[0]);
                scrollToHeroCard(firstVisibleIndex);
            }
        });
    });

    console.log('✨ Enhanced hero carousel loaded!');
});
