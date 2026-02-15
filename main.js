// Main JS placeholder for interactivity
console.log('Nex Studio initialized.');

// Simple scroll animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Reset inline styles to reveal the element
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Target new elements from the Billo-style layout
document.querySelectorAll('.feature-card, .dashboard-mockup, .hero-title, .hero-subtitle, .bento-card, .why-card, .video-card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Video Player Logic
function togglePlay(btn) {
    const card = btn.closest('.video-player-card');
    const video = card.querySelector('video');
    const overlay = card.querySelector('.video-player-overlay');

    if (video.paused) {
        video.play();
        overlay.classList.add('playing');
        video.muted = false; // Unmute on explicit play
    } else {
        video.pause();
        overlay.classList.remove('playing');
    }

    // Allow clicking the video itself to pause called by this helper
    video.onclick = () => {
        video.pause();
        overlay.classList.remove('playing');
    }
}

// Category Data (Simulated)
const categoryData = {
    wellness: {
        video: 'https://billo.app/wp-content/uploads/2025/04/7-Health_Wellness_326618_Natalie_California_4.7.mp4',
        poster: 'https://billo.app/wp-content/uploads/2025/12/Health-Wellness-5.webp',
        creator: 'Natalie (AI)',
        tag: 'Health & Wellness',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        subtitle: 'AI Persona • English (US)'
    },
    beauty: {
        video: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-applying-mascara-to-her-eyelashes-audience-view-1240-large.mp4',
        poster: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=400&q=80',
        creator: 'Jessica K.',
        tag: 'Cosmetics & Beauty',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        subtitle: 'AI Persona • English (UK)'
    },
    fashion: {
        video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-turning-in-a-winter-outfit-39988-large.mp4',
        poster: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
        creator: 'Alex R.',
        tag: 'Apparel & Fashion',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        subtitle: 'Digital Twin • Spanish'
    },
    apps: {
        video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-holding-a-smartphone-in-the-street-41639-large.mp4',
        poster: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
        creator: 'David L.',
        tag: 'Apps & Digital',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        subtitle: 'AI Persona • German'
    },
    food: {
        video: 'https://assets.mixkit.co/videos/preview/mixkit-serving-dinner-to-guests-41559-large.mp4',
        poster: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80',
        creator: 'Mario Chef',
        tag: 'Food & Beverage',
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        subtitle: 'AI Persona • Italian'
    },
    pets: {
        video: 'https://assets.mixkit.co/videos/preview/mixkit-dog-catching-a-ball-in-slow-motion-1262-large.mp4',
        poster: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80',
        creator: 'Penny & Co',
        tag: 'Pets',
        avatar: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=100&q=80',
        subtitle: 'AI Generated • Music Only'
    }
};

// Category Switching
document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        // Toggle Active Class
        document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        // Get Data
        const category = chip.dataset.category;
        const data = categoryData[category] || categoryData['wellness'];

        // Update Video Player UI
        const playerCard = document.querySelector('.video-player-card');
        const video = playerCard.querySelector('video');
        const source = video.querySelector('source');

        // Animate Switch
        playerCard.style.opacity = '0';
        playerCard.style.transform = 'scale(0.95)';

        setTimeout(() => {
            // Update Content
            video.poster = data.poster;
            source.src = data.video;
            video.load(); // Reload video with new source

            playerCard.querySelector('.video-tag').textContent = data.tag;
            playerCard.querySelector('.creator-details h4').textContent = data.creator;
            // Update subtitle with AI persona details
            playerCard.querySelector('.creator-details span').textContent = data.subtitle;
            playerCard.querySelector('.creator-avatar').src = data.avatar;

            // Reset Overlay
            playerCard.querySelector('.video-player-overlay').classList.remove('playing');

            // Fade In
            playerCard.style.opacity = '1';
            playerCard.style.transform = 'scale(1)';
        }, 300);
    });
});
