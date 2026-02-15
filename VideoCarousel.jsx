import React, { useState } from 'react';
import './VideoCarousel.css';

const VideoCarousel = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Sample video data
    const videos = [
        {
            id: 1,
            category: 'health',
            videoUrl: 'https://billo.app/wp-content/uploads/2025/04/5-Health_Wellness_111465_Alexis_California_4.93.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=1',
            creator: 'Alexis',
            creatorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.9,
            country: '🇺🇸'
        },
        {
            id: 2,
            category: 'pets',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dog-playing-in-the-snow-3056-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=2',
            creator: 'Sarah',
            creatorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
            rating: 4.8,
            country: '🇨🇦'
        },
        {
            id: 3,
            category: 'tech',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-coding-on-laptop-4245-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=3',
            creator: 'Mike',
            creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4.7,
            country: '🇬🇧'
        },
        {
            id: 4,
            category: 'health',
            videoUrl: 'https://billo.app/wp-content/uploads/2025/04/4-Regan-UK-cosmetics.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=4',
            creator: 'Regan',
            creatorImage: 'https://randomuser.me/api/portraits/women/32.jpg',
            rating: 5.0,
            country: '🇬🇧'
        },
        {
            id: 5,
            category: 'pets',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cats-playing-together-3117-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=5',
            creator: 'Emma',
            creatorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 4.6,
            country: '🇦🇺'
        },
        {
            id: 6,
            category: 'tech',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-circuit-board-close-up-1063-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=6',
            creator: 'James',
            creatorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
            rating: 4.9,
            country: '🇺🇸'
        },
        {
            id: 7,
            category: 'health',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-exercising-at-home-714-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=7',
            creator: 'Kerry',
            creatorImage: 'https://randomuser.me/api/portraits/women/50.jpg',
            rating: 4.8,
            country: '🇺🇸'
        },
        {
            id: 8,
            category: 'pets',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-puppy-running-in-grass-1911-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=8',
            creator: 'Lucas',
            creatorImage: 'https://randomuser.me/api/portraits/men/62.jpg',
            rating: 4.7,
            country: '🇩🇪'
        },
        {
            id: 9,
            category: 'tech',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-smartphone-screen-in-the-dark-1063-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=9',
            creator: 'Sophia',
            creatorImage: 'https://randomuser.me/api/portraits/women/85.jpg',
            rating: 5.0,
            country: '🇸🇬'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Niches', icon: '🌐' },
        { id: 'health', name: 'Health & Wellness', icon: '🌿' },
        { id: 'pets', name: 'Pets', icon: '🐾' },
        { id: 'tech', name: 'Tech & Digital', icon: '💻' }
    ];

    // Filter videos based on active category
    const filteredVideos = activeCategory === 'all'
        ? videos
        : videos.filter(video => video.category === activeCategory);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="star-rating">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={i} className="star">★</span>
                ))}
                {hasHalfStar && <span className="star half">★</span>}
                <span className="rating-value">{rating}</span>
            </div>
        );
    };

    return (
        <div className="video-carousel-container">
            {/* Section Header */}
            <div className="carousel-header">
                <h2 className="carousel-title">
                    AI Creators for every<br />
                    <span className="title-highlight">Industry Niche</span>
                </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-wrapper">
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="pill-icon">{category.icon}</span>
                            <span className="pill-text">{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Video Gallery */}
            <div className="video-gallery">
                {filteredVideos.map((video, index) => (
                    <div
                        key={video.id}
                        className="video-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Video Container */}
                        <div className="video-container">
                            <video
                                className="video-element"
                                loop
                                muted
                                playsInline
                                poster={video.thumbnail}
                            >
                                <source src={video.videoUrl} type="video/mp4" />
                            </video>

                            {/* Category Badge */}
                            <div className="category-badge">
                                {categories.find(cat => cat.id === video.category)?.name.split(' &')[0] || video.category}
                            </div>

                            {/* Play Button Overlay */}
                            <div className="play-overlay">
                                <button className="play-button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 5v14l11-7z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>

                            {/* Glassmorphism Footer */}
                            <div className="video-footer">
                                <div className="creator-info">
                                    <img
                                        src={video.creatorImage}
                                        alt={video.creator}
                                        className="creator-avatar"
                                    />
                                    <div className="creator-details">
                                        <span className="creator-name">@{video.creator.toLowerCase()}</span>
                                        {renderStars(video.rating)}
                                    </div>
                                </div>
                                <span className="creator-country">{video.country}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
                <div className="empty-state">
                    <p>No videos found in this category</p>
                </div>
            )}
        </div>
    );
};

export default VideoCarousel;
