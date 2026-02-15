// ===================================
// VIDEO GALLERY DATA - 30 Videos
// ===================================

const videoGalleryData = {
    categories: [
        { id: 'all', name: 'All Niches', icon: '🌐' },
        { id: 'health', name: 'Health & Wellness', icon: '🌿' },
        { id: 'cosmetics', name: 'Cosmetics & Beauty', icon: '💄' },
        { id: 'apparel', name: 'Apparel & Fashion', icon: '👔' },
        { id: 'apps', name: 'Apps & Digital', icon: '📱' },
        { id: 'food', name: 'Food & Beverage', icon: '🍔' },
        { id: 'pets', name: 'Pets', icon: '🐾' }
    ],

    videos: [
        // HEALTH & WELLNESS (5 videos)
        {
            id: 'health_001',
            category: 'health',
            title: 'Morning Yoga Routine',
            creator: 'Alexis',
            creatorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.9,
            views: '2.3M',
            duration: '2:45',
            videoUrl: 'https://billo.app/wp-content/uploads/2025/04/5-Health_Wellness_111465_Alexis_California_4.93.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=1'
        },
        {
            id: 'health_002',
            category: 'health',
            title: 'Healthy Smoothie Bowl',
            creator: 'Kerry',
            creatorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
            rating: 4.8,
            views: '1.8M',
            duration: '1:30',
            videoUrl: 'https://billo.app/wp-content/uploads/2025/04/8-Home_Lifestyle_139191_Kerry_Pennsylvania_4.97.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=2'
        },
        {
            id: 'health_003',
            category: 'health',
            title: 'Meditation for Beginners',
            creator: 'Emma',
            creatorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 4.7,
            views: '1.5M',
            duration: '3:20',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-exercising-at-home-714-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=3'
        },
        {
            id: 'health_004',
            category: 'health',
            title: 'Home Workout Essentials',
            creator: 'Sofia',
            creatorImage: 'https://randomuser.me/api/portraits/women/85.jpg',
            rating: 5.0,
            views: '3.1M',
            duration: '2:10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-in-nature-4260-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=4'
        },
        {
            id: 'health_005',
            category: 'health',
            title: 'Stress Relief Techniques',
            creator: 'Mia',
            creatorImage: 'https://randomuser.me/api/portraits/women/50.jpg',
            rating: 4.9,
            views: '2.0M',
            duration: '1:45',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-zen-garden-meditation-4261-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=5'
        },

        // COSMETICS & BEAUTY (5 videos)
        {
            id: 'cosmetics_001',
            category: 'cosmetics',
            title: 'Everyday Makeup Tutorial',
            creator: 'Regan',
            creatorImage: 'https://randomuser.me/api/portraits/women/32.jpg',
            rating: 4.9,
            views: '4.2M',
            duration: '3:15',
            videoUrl: 'https://billo.app/wp-content/uploads/2025/04/4-Regan-UK-cosmetics.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=6'
        },
        {
            id: 'cosmetics_002',
            category: 'cosmetics',
            title: 'Skincare Night Routine',
            creator: 'Olivia',
            creatorImage: 'https://randomuser.me/api/portraits/women/45.jpg',
            rating: 4.8,
            views: '3.5M',
            duration: '2:30',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-face-cream-3127-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=7'
        },
        {
            id: 'cosmetics_003',
            category: 'cosmetics',
            title: 'Bold Lip Color Guide',
            creator: 'Isabella',
            creatorImage: 'https://randomuser.me/api/portraits/women/62.jpg',
            rating: 4.7,
            views: '2.8M',
            duration: '1:50',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-putting-on-lipstick-3128-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=8'
        },
        {
            id: 'cosmetics_004',
            category: 'cosmetics',
            title: 'Natural Glow Makeup',
            creator: 'Ava',
            creatorImage: 'https://randomuser.me/api/portraits/women/55.jpg',
            rating: 5.0,
            views: '5.1M',
            duration: '2:45',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=9'
        },
        {
            id: 'cosmetics_005',
            category: 'cosmetics',
            title: 'Eyeliner Hacks',
            creator: 'Charlotte',
            creatorImage: 'https://randomuser.me/api/portraits/women/72.jpg',
            rating: 4.6,
            views: '2.2M',
            duration: '1:30',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-eye-makeup-3129-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=10'
        },

        // APPAREL & FASHION (5 videos)
        {
            id: 'apparel_001',
            category: 'apparel',
            title: 'Summer Fashion Trends',
            creator: 'Harper',
            creatorImage: 'https://randomuser.me/api/portraits/women/28.jpg',
            rating: 4.8,
            views: '3.9M',
            duration: '2:20',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-in-white-dress-walking-1229-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=11'
        },
        {
            id: 'apparel_002',
            category: 'apparel',
            title: 'Capsule Wardrobe Essentials',
            creator: 'Amelia',
            creatorImage: 'https://randomuser.me/api/portraits/women/38.jpg',
            rating: 4.9,
            views: '4.5M',
            duration: '3:00',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-3130-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=12'
        },
        {
            id: 'apparel_003',
            category: 'apparel',
            title: 'Accessorizing Tips',
            creator: 'Ella',
            creatorImage: 'https://randomuser.me/api/portraits/women/42.jpg',
            rating: 4.7,
            views: '2.6M',
            duration: '1:40',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-with-shopping-bags-3131-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=13'
        },
        {
            id: 'apparel_004',
            category: 'apparel',
            title: 'Vintage Style Guide',
            creator: 'Luna',
            creatorImage: 'https://randomuser.me/api/portraits/women/52.jpg',
            rating: 5.0,
            views: '3.3M',
            duration: '2:50',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-vintage-fashion-shoot-3132-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=14'
        },
        {
            id: 'apparel_005',
            category: 'apparel',
            title: 'Athleisure Styling',
            creator: 'Aria',
            creatorImage: 'https://randomuser.me/api/portraits/women/75.jpg',
            rating: 4.8,
            views: '3.7M',
            duration: '2:15',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sporty-woman-in-park-3133-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=15'
        },

        // APPS & DIGITAL (5 videos)
        {
            id: 'apps_001',
            category: 'apps',
            title: 'Productivity App Review',
            creator: 'Mike',
            creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4.7,
            views: '2.1M',
            duration: '2:30',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-coding-on-laptop-4245-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=16'
        },
        {
            id: 'apps_002',
            category: 'apps',
            title: 'Social Media Growth',
            creator: 'James',
            creatorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
            rating: 4.9,
            views: '4.8M',
            duration: '3:10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-using-smartphone-4246-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=17'
        },
        {
            id: 'apps_003',
            category: 'apps',
            title: 'Digital Marketing Tools',
            creator: 'Lucas',
            creatorImage: 'https://randomuser.me/api/portraits/men/62.jpg',
            rating: 4.8,
            views: '3.4M',
            duration: '2:45',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-team-4247-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=18'
        },
        {
            id: 'apps_004',
            category: 'apps',
            title: 'Web Design Trends 2026',
            creator: 'Ethan',
            creatorImage: 'https://randomuser.me/api/portraits/men/55.jpg',
            rating: 5.0,
            views: '5.2M',
            duration: '3:25',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-web-designer-working-4248-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=19'
        },
        {
            id: 'apps_005',
            category: 'apps',
            title: 'App Monetization Strategies',
            creator: 'Noah',
            creatorImage: 'https://randomuser.me/api/portraits/men/72.jpg',
            rating: 4.6,
            views: '2.9M',
            duration: '2:20',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-entrepreneur-presentation-4249-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=20'
        },

        // FOOD & BEVERAGE (5 videos)
        {
            id: 'food_001',
            category: 'food',
            title: 'Quick Pasta Recipe',
            creator: 'Chef Marco',
            creatorImage: 'https://randomuser.me/api/portraits/men/28.jpg',
            rating: 4.9,
            views: '6.1M',
            duration: '2:15',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-cooking-pasta-3134-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=21'
        },
        {
            id: 'food_002',
            category: 'food',
            title: 'Coffee Latte Art',
            creator: 'Barista Sam',
            creatorImage: 'https://randomuser.me/api/portraits/men/38.jpg',
            rating: 4.8,
            views: '4.3M',
            duration: '1:45',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-making-latte-3135-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=22'
        },
        {
            id: 'food_003',
            category: 'food',
            title: 'Baking Perfect Cookies',
            creator: 'Baker Lisa',
            creatorImage: 'https://randomuser.me/api/portraits/women/35.jpg',
            rating: 5.0,
            views: '5.7M',
            duration: '3:30',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-baking-cookies-3136-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=23'
        },
        {
            id: 'food_004',
            category: 'food',
            title: 'Sushi Rolling Tutorial',
            creator: 'Chef Yuki',
            creatorImage: 'https://randomuser.me/api/portraits/women/48.jpg',
            rating: 4.9,
            views: '3.8M',
            duration: '2:50',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sushi-chef-preparing-3137-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=24'
        },
        {
            id: 'food_005',
            category: 'food',
            title: 'Cocktail Mixing Guide',
            creator: 'Mixologist Jake',
            creatorImage: 'https://randomuser.me/api/portraits/men/65.jpg',
            rating: 4.7,
            views: '4.5M',
            duration: '2:10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bartender-mixing-cocktail-3138-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=25'
        },

        // PETS (5 videos)
        {
            id: 'pets_001',
            category: 'pets',
            title: 'Puppy Training Basics',
            creator: 'Sarah',
            creatorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
            rating: 4.8,
            views: '3.2M',
            duration: '2:40',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dog-playing-in-the-snow-3056-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=26'
        },
        {
            id: 'pets_002',
            category: 'pets',
            title: 'Cat Care Essentials',
            creator: 'Emily',
            creatorImage: 'https://randomuser.me/api/portraits/women/78.jpg',
            rating: 4.9,
            views: '2.9M',
            duration: '2:25',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cats-playing-together-3117-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=27'
        },
        {
            id: 'pets_003',
            category: 'pets',
            title: 'Dog Grooming Tips',
            creator: 'Lucas',
            creatorImage: 'https://randomuser.me/api/portraits/men/42.jpg',
            rating: 4.7,
            views: '2.1M',
            duration: '3:05',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-puppy-running-in-grass-1911-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=28'
        },
        {
            id: 'pets_004',
            category: 'pets',
            title: 'Pet-Friendly Recipes',
            creator: 'Zoe',
            creatorImage: 'https://randomuser.me/api/portraits/women/82.jpg',
            rating: 5.0,
            views: '4.1M',
            duration: '2:15',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dog-eating-treats-3139-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=29'
        },
        {
            id: 'pets_005',
            category: 'pets',
            title: 'Aquarium Setup Guide',
            creator: 'Oliver',
            creatorImage: 'https://randomuser.me/api/portraits/men/58.jpg',
            rating: 4.8,
            views: '1.8M',
            duration: '3:20',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-colorful-fish-swimming-3140-large.mp4',
            thumbnail: 'https://picsum.photos/400/700?random=30'
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = videoGalleryData;
}
