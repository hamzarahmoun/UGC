// ===================================
// ADVANCED VIDEO GALLERY - Phase 1
// ===================================

class VideoGallery {
    constructor(data) {
        this.data = data;
        this.activeCategory = 'all';
        this.isMuted = localStorage.getItem('gallery_muted') === 'true';
        this.currentlyPlaying = null;

        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
        this.updateAudioState();
    }

    render() {
        const container = document.getElementById('video-gallery-container');
        if (!container) return;

        container.innerHTML = this.getHTML();
    }

    getHTML() {
        const filteredVideos = this.filterVideos();

        return `
            <section class="video-gallery-section">
                <div class="container">
                    <!-- Header -->
                    <div class="gallery-header">
                        <h2 class="gallery-title">
                            AI Creators for every<br>
                            <span class="highlight">Industry Niche</span>
                        </h2>
                    </div>

                    <!-- Category Filter -->
                    <div class="category-filter-container">
                        <div class="category-pills">
                            ${this.data.categories.map(cat => `
                                <button 
                                    class="category-pill ${this.activeCategory === cat.id ? 'active' : ''}"
                                    data-category="${cat.id}"
                                >
                                    <span class="icon">${cat.icon}</span>
                                    <span>${cat.name}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Gallery Controls -->
                    <div class="gallery-controls">
                        <button class="audio-toggle ${this.isMuted ? 'muted' : ''}" id="audio-toggle">
                            <span class="icon">${this.isMuted ? '🔇' : '🔊'}</span>
                            <span>${this.isMuted ? 'Sound Off' : 'Sound On'}</span>
                        </button>

                        <div class="nav-arrows">
                            <button class="nav-arrow nav-left" id="nav-left" aria-label="Scroll left">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                            <button class="nav-arrow nav-right" id="nav-right" aria-label="Scroll right">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Video Carousel -->
                    <div class="video-carousel-wrapper">
                        <div class="video-carousel" id="video-carousel">
                            ${filteredVideos.length > 0
                ? filteredVideos.map((video, index) => this.createVideoCard(video, index)).join('')
                : '<div class="gallery-empty"><div class="icon">📹</div><p>No videos in this category</p></div>'
            }
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    createVideoCard(video, index) {
        return `
            <div class="video-card" style="animation-delay: ${index * 0.05}s" data-video-id="${video.id}">
                <div class="video-card-inner">
                    <!-- Video Element -->
                    <video 
                        class="video-element"
                        loop
                        muted="${this.isMuted}"
                        playsinline
                        preload="metadata"
                        poster="${video.thumbnail}"
                    >
                        <source src="${video.videoUrl}" type="video/mp4">
                    </video>

                    <!-- Category Badge -->
                    <div class="video-category-badge">${video.category}</div>

                    <!-- Play Button -->
                    <button class="play-button">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>

                    <!-- Video Overlay -->
                    <div class="video-overlay">
                        <div class="video-info">
                            <div class="creator-info">
                                <img 
                                    src="${video.creatorImage}" 
                                    alt="${video.creator}"
                                    class="creator-avatar"
                                >
                                <div class="creator-details">
                                    <div class="creator-name">@${video.creator.toLowerCase()}</div>
                                    <div class="video-stats">
                                        <span class="star">★</span>
                                        <span>${video.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="video-meta">
                                <div class="video-views">${video.views} views</div>
                                <div class="video-duration">${video.duration}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    filterVideos() {
        if (this.activeCategory === 'all') {
            return this.data.videos;
        }
        return this.data.videos.filter(video => video.category === this.activeCategory);
    }

    attachEventListeners() {
        // Category pills
        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.setCategory(category);
            });
        });

        // Audio toggle
        const audioToggle = document.getElementById('audio-toggle');
        if (audioToggle) {
            audioToggle.addEventListener('click', () => {
                this.toggleAudio();
            });
        }

        // Navigation arrows
        const navLeft = document.getElementById('nav-left');
        const navRight = document.getElementById('nav-right');
        const carousel = document.getElementById('video-carousel');

        if (navLeft && navRight && carousel) {
            navLeft.addEventListener('click', () => this.scrollCarousel('left'));
            navRight.addEventListener('click', () => this.scrollCarousel('right'));

            // Update arrow states on scroll
            carousel.addEventListener('scroll', () => this.updateArrowStates());
            this.updateArrowStates();
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.scrollCarousel('left');
            } else if (e.key === 'ArrowRight') {
                this.scrollCarousel('right');
            }
        });

        // Video play/pause
        document.querySelectorAll('.video-card-inner').forEach(card => {
            const video = card.querySelector('.video-element');
            const playButton = card.querySelector('.play-button');

            playButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleVideo(video, playButton);
            });

            // Auto-play on hover (desktop only)
            if (window.innerWidth > 768) {
                card.addEventListener('mouseenter', () => {
                    if (!video.classList.contains('playing')) {
                        video.play().catch(e => console.log('Auto-play prevented'));
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (!video.classList.contains('playing')) {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
            }
        });
    }

    setCategory(category) {
        this.activeCategory = category;
        this.render();
        this.attachEventListeners();
        this.updateAudioState();
    }

    toggleAudio() {
        this.isMuted = !this.isMuted;
        localStorage.setItem('gallery_muted', this.isMuted);
        this.updateAudioState();

        // Update button
        const audioToggle = document.getElementById('audio-toggle');
        if (audioToggle) {
            audioToggle.className = `audio-toggle ${this.isMuted ? 'muted' : ''}`;
            audioToggle.innerHTML = `
                <span class="icon">${this.isMuted ? '🔇' : '🔊'}</span>
                <span>${this.isMuted ? 'Sound Off' : 'Sound On'}</span>
            `;
        }
    }

    updateAudioState() {
        // Apply mute state to all videos
        document.querySelectorAll('.video-element').forEach(video => {
            video.muted = this.isMuted;
        });
    }

    toggleVideo(video, playButton) {
        if (video.paused) {
            // Pause currently playing video
            if (this.currentlyPlaying && this.currentlyPlaying !== video) {
                this.currentlyPlaying.pause();
                this.currentlyPlaying.classList.remove('playing');
                const prevButton = this.currentlyPlaying.closest('.video-card-inner').querySelector('.play-button');
                if (prevButton) {
                    prevButton.classList.remove('playing');
                }
            }

            video.play();
            video.classList.add('playing');
            playButton.classList.add('playing');
            this.currentlyPlaying = video;

            // When video ends, show play button again
            video.addEventListener('ended', () => {
                video.classList.remove('playing');
                playButton.classList.remove('playing');
                video.currentTime = 0;
            }, { once: true });

        } else {
            video.pause();
            video.classList.remove('playing');
            playButton.classList.remove('playing');
        }
    }

    scrollCarousel(direction) {
        const carousel = document.getElementById('video-carousel');
        if (!carousel) return;

        const scrollAmount = 350; // Width of card + gap
        const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;

        carousel.scrollBy({
            left: scrollValue,
            behavior: 'smooth'
        });
    }

    updateArrowStates() {
        const carousel = document.getElementById('video-carousel');
        const navLeft = document.getElementById('nav-left');
        const navRight = document.getElementById('nav-right');

        if (!carousel || !navLeft || !navRight) return;

        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;

        // Disable left arrow if at start
        navLeft.disabled = scrollLeft <= 0;

        // Disable right arrow if at end
        navRight.disabled = scrollLeft + clientWidth >= scrollWidth - 10;
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if video-data.js is loaded
    if (typeof videoGalleryData !== 'undefined') {
        new VideoGallery(videoGalleryData);
    } else {
        console.error('Video gallery data not loaded. Make sure video-data.js is included before video-gallery.js');
    }
});

console.log('✨ Advanced Video Gallery loaded!');
