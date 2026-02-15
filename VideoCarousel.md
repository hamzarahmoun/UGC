# Filterable Video Carousel Component

## Overview
A fully-featured React component for displaying and filtering video content with a premium, modern UI.

## Features

### ✅ Core Functionality
- **Category Filtering**: Click pill buttons to filter videos by category (Health, Pets, Tech, or All)
- **Smooth Animations**: Fade-in animations when switching categories
- **Touch-Swipe Enabled**: Native horizontal scrolling with snap-to-center on mobile
- **9:16 Aspect Ratio**: Portrait video cards optimized for mobile content

### 🎨 Design Features
- **Glassmorphism Footer**: Frosted glass effect with blur backdrop
- **Play Button Overlay**: Appears on hover with subtle animation
- **Category Badge**: Floating badge at top of each card
- **Star Ratings**: Visual rating display with creator info
- **Premium Aesthetics**: Modern, clean design with subtle shadows and gradients

### 📱 Responsive Design
- **Desktop**: Full-width cards with hover effects
- **Mobile**: 
  - Touch-swipe carousel
  - Collapsed category pills (icon-only except active)
  - Scaled-down footer elements
  - Optimized card sizes (70vw on small screens)

## Installation

### 1. Install Dependencies
```bash
npm install react react-dom
```

### 2. Add Component Files
- `VideoCarousel.jsx` - Main component
- `VideoCarousel.css` - Styles

### 3. Import and Use
```jsx
import VideoCarousel from './VideoCarousel';

function App() {
  return (
    <div className="App">
      <VideoCarousel />
    </div>
  );
}
```

## Component Structure

```
VideoCarousel
├── Header (Title with gradient highlight)
├── Category Filter (Horizontal pill buttons)
├── Video Gallery (Scrollable card grid)
│   └── Video Cards
│       ├── Video Element
│       ├── Category Badge
│       ├── Play Overlay
│       └── Glassmorphism Footer
│           ├── Creator Avatar
│           ├── Creator Name
│           ├── Star Rating
│           └── Country Flag
└── Empty State (No results message)
```

## Customization

### Adding More Categories
Edit the `categories` array in `VideoCarousel.jsx`:

```jsx
const categories = [
    { id: 'all', name: 'All Niches', icon: '🌐' },
    { id: 'health', name: 'Health & Wellness', icon: '🌿' },
    { id: 'pets', name: 'Pets', icon: '🐾' },
    { id: 'tech', name: 'Tech & Digital', icon: '💻' },
    // Add new category:
    { id: 'food', name: 'Food & Beverage', icon: '🍔' }
];
```

### Adding More Videos
Add objects to the `videos` array:

```jsx
{
    id: 10,
    category: 'food',
    videoUrl: 'https://example.com/video.mp4',
    thumbnail: 'https://example.com/thumb.jpg',
    creator: 'Chef Alex',
    creatorImage: 'https://example.com/avatar.jpg',
    rating: 4.9,
    country: '🇮🇹'
}
```

### Styling Customization

**Color Scheme:**
```css
/* Primary accent color */
.title-highlight {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

/* Card hover effect */
.category-pill:hover {
    border-color: #fbbf24; /* Change to your brand color */
}
```

**Card Dimensions:**
```css
.video-card {
    width: 280px; /* Adjust desktop width */
}

@media (max-width: 768px) {
    .video-card {
        width: 220px; /* Adjust mobile width */
    }
}
```

## Performance Tips

1. **Lazy Load Videos**: Add `loading="lazy"` to video elements
2. **Optimize Thumbnails**: Use properly sized poster images
3. **Limit Initial Load**: Consider pagination for large video sets
4. **Use CDN**: Host videos on a CDN for faster load times

## Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile Safari/Chrome

**Note**: Glassmorphism effects require `backdrop-filter` support (not available in older browsers)

## Accessibility

- Keyboard navigation supported
- Semantic HTML structure
- Alt text for images
- ARIA labels can be added for buttons

## Next Steps

Consider adding:
- Video playback controls
- Full-screen mode
- Like/favorite functionality
- Share buttons
- Load more pagination
- Search functionality

## License
MIT
