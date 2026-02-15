// UGC Video Data - 5 videos per category
const ugcVideoData = {
    health: [
        { id: 1, videoUrl: 'https://billo.app/wp-content/uploads/2025/04/8-Health_Wellness_169096_Andrew_Michigan_4.94.mp4', thumbnail: 'https://billo.app/wp-content/uploads/2025/12/Health-Wellness-1.webp', category: 'Health & Wellness' },
        { id: 2, videoUrl: 'https://billo.app/wp-content/uploads/2025/08/Health_Wellness_Rosh_Canada_5.mp4', thumbnail: 'https://billo.app/wp-content/uploads/2025/12/Health-Wellness-2.webp', category: 'Health & Wellness' },
        { id: 3, videoUrl: 'https://billo.app/wp-content/uploads/2025/04/2-Health_Wellness_247363_-Chelsea_California_4.95.mp4', thumbnail: 'https://billo.app/wp-content/uploads/2025/12/Health-Wellness-3.webp', category: 'Health & Wellness' },
        { id: 4, videoUrl: 'https://billo.app/wp-content/uploads/2025/04/4-Health_Wellness_319965_-Jonah_Nebraska_5.mp4', thumbnail: 'https://billo.app/wp-content/uploads/2025/12/Health-Wellness-4.webp', category: 'Health & Wellness' },
        { id: 5, videoUrl: 'https://billo.app/wp-content/uploads/2025/04/3-Health_Wellness_-284323_-Brie_Tennessee_4.84.mp4', thumbnail: 'https://billo.app/wp-content/uploads/2025/12/Health-Wellness-5.webp', category: 'Health & Wellness' }
    ],
    cosmetics: [
        { id: 6, thumbnail: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=400', category: 'Cosmetics & Beauty' },
        { id: 7, thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400', category: 'Cosmetics & Beauty' },
        { id: 8, thumbnail: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400', category: 'Cosmetics & Beauty' },
        { id: 9, thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', category: 'Cosmetics & Beauty' },
        { id: 10, thumbnail: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', category: 'Cosmetics & Beauty' }
    ],
    apparel: [
        { id: 11, thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', category: 'Apparel & Fashion' },
        { id: 12, thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400', category: 'Apparel & Fashion' },
        { id: 13, thumbnail: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400', category: 'Apparel & Fashion' },
        { id: 14, thumbnail: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400', category: 'Apparel & Fashion' },
        { id: 15, thumbnail: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', category: 'Apparel & Fashion' }
    ],
    apps: [
        { id: 16, thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400', category: 'Apps & Digital' },
        { id: 17, thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400', category: 'Apps & Digital' },
        { id: 18, thumbnail: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400', category: 'Apps & Digital' },
        { id: 19, thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400', category: 'Apps & Digital' },
        { id: 20, thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400', category: 'Apps & Digital' }
    ],
    food: [
        { id: 21, thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', category: 'Food & Beverage' },
        { id: 22, thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', category: 'Food & Beverage' },
        { id: 23, thumbnail: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400', category: 'Food & Beverage' },
        { id: 24, thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', category: 'Food & Beverage' },
        { id: 25, thumbnail: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', category: 'Food & Beverage' }
    ],
    pets: [
        { id: 26, thumbnail: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400', category: 'Pets' },
        { id: 27, thumbnail: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400', category: 'Pets' },
        { id: 28, thumbnail: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400', category: 'Pets' },
        { id: 29, thumbnail: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400', category: 'Pets' },
        { id: 30, thumbnail: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400', category: 'Pets' }
    ]
};

// UGC Gallery with Carousel Navigation
class UGCGallery {
    constructor() {
        this.currentCategory = 'health';
        this.currentIndex = 0;
        this.videos = [];
        this.init();
    }

    init() {
        this.videos = ugcVideoData[this.currentCategory];
        this.renderVideos();
        this.attachCategoryListeners();
        this.attachNavigationListeners();
        this.attachVideoClickListeners();
    }

    renderVideos() {
        const container = document.querySelector('.ugc-videos-grid');

        if (!container) return;

        // Clear existing videos
        container.innerHTML = '';

        // Render 5 videos in carousel positions
        for (let i = 0; i < 5; i++) {
            const videoIndex = (this.currentIndex + i) % this.videos.length;
            const video = this.videos[videoIndex];

            const videoCard = document.createElement('div');
            videoCard.className = 'ugc-video-card';
            videoCard.dataset.carouselIndex = i;
            videoCard.dataset.videoId = video.id;
            videoCard.innerHTML = `
                <div class="video-thumbnail">
                    ${video.videoUrl ? `
                        <video class="video-element" muted loop playsinline poster="${video.thumbnail}">
                            <source src="${video.videoUrl}" type="video/mp4">
                        </video>
                    ` : `
                        <img src="${video.thumbnail}" alt="${video.category}">
                    `}
                    
                    <!-- Large Play Button (Center) -->
                    <div class="video-play-btn">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    
                    <!-- Volume Button (Top Right) -->
                    <button class="video-volume-btn" aria-label="Toggle Sound">
                        <svg class="volume-on" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M11 5L6 9H2v6h4l5 4V5z" stroke-width="2"/>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke-width="2"/>
                        </svg>
                        <svg class="volume-off" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="display:none;">
                            <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" stroke-width="2"/>
                        </svg>
                    </button>
                    
                    <div class="video-badge">${video.category}</div>
                </div>
            `;
            container.appendChild(videoCard);
        }

        // Add video controls
        this.addVideoControls();
    }

    addVideoControls() {
        const centerCard = document.querySelector('.ugc-video-card:nth-child(1)');
        if (!centerCard) return;

        const video = centerCard.querySelector('.video-element');
        const playBtn = centerCard.querySelector('.video-play-btn');
        const volumeBtn = centerCard.querySelector('.video-volume-btn');

        if (!video) return;

        // Play/Pause functionality
        // Play/Pause functionality
        const togglePlay = () => {
            if (video.paused) {
                // Unmute and play video
                video.muted = false;
                video.play();
                if (playBtn) playBtn.style.opacity = '0';

                // Update volume icon to show sound is ON
                if (volumeBtn) {
                    const volumeOn = volumeBtn.querySelector('.volume-on');
                    const volumeOff = volumeBtn.querySelector('.volume-off');
                    volumeOn.style.display = 'block';
                    volumeOff.style.display = 'none';
                }
            } else {
                video.pause();
                if (playBtn) playBtn.style.opacity = '1';
            }
        };

        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });

            // Sync state listeners
            video.addEventListener('play', () => {
                playBtn.style.opacity = '0';
            });

            video.addEventListener('pause', () => {
                playBtn.style.opacity = '1';
            });
        }

        // Allow clicking the video itself to toggle play/pause
        video.addEventListener('click', togglePlay);

        // Volume/Mute functionality
        if (volumeBtn) {
            const volumeOn = volumeBtn.querySelector('.volume-on');
            const volumeOff = volumeBtn.querySelector('.volume-off');

            volumeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                video.muted = !video.muted;

                if (video.muted) {
                    volumeOn.style.display = 'none';
                    volumeOff.style.display = 'block';
                } else {
                    volumeOn.style.display = 'block';
                    volumeOff.style.display = 'none';
                }
            });
        }
    }

    rotateCarousel(direction) {
        // direction: 1 for right, -1 for left
        if (direction === 1) {
            // Rotate right (next)
            this.currentIndex = (this.currentIndex + 1) % this.videos.length;
        } else {
            // Rotate left (prev)
            this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
        }

        // Fade and re-render
        const container = document.querySelector('.ugc-videos-grid');
        container.style.opacity = '0.5';

        setTimeout(() => {
            this.renderVideos();
            this.attachVideoClickListeners();
            container.style.opacity = '1';
        }, 200);
    }

    attachNavigationListeners() {
        const prevBtn = document.querySelector('.carousel-nav.prev');
        const nextBtn = document.querySelector('.carousel-nav.next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.rotateCarousel(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.rotateCarousel(1));
        }
    }

    attachVideoClickListeners() {
        const cards = document.querySelectorAll('.ugc-video-card');

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                // If not center card, rotate to center
                if (index !== 0) {
                    // Calculate rotation needed
                    if (index === 1) {
                        // Left card - rotate left
                        this.rotateCarousel(-1);
                    } else if (index === 2) {
                        // Right card - rotate right
                        this.rotateCarousel(1);
                    } else if (index === 3) {
                        // Far left - rotate left twice
                        this.rotateCarousel(-1);
                        setTimeout(() => this.rotateCarousel(-1), 300);
                    } else if (index === 4) {
                        // Far right - rotate right twice
                        this.rotateCarousel(1);
                        setTimeout(() => this.rotateCarousel(1), 300);
                    }
                }
            });
        });
    }

    attachCategoryListeners() {
        const categoryBtns = document.querySelectorAll('.category-pill');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all
                categoryBtns.forEach(b => b.classList.remove('active'));

                // Add active to clicked
                btn.classList.add('active');

                // Get category
                const category = btn.dataset.category;

                // Update current category and reset index
                this.currentCategory = category;
                this.currentIndex = 0;
                this.videos = ugcVideoData[category];

                // Render videos with fade animation
                const container = document.querySelector('.ugc-videos-grid');
                container.style.opacity = '0';

                setTimeout(() => {
                    this.renderVideos();
                    this.attachVideoClickListeners();
                    container.style.opacity = '1';
                }, 300);
            });
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new UGCGallery();
});
