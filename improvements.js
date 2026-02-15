// ===================================
// IMPROVEMENTS: Interactive Features
// ===================================

// Sticky Navigation
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add sticky class after scrolling 100px
    if (scrollTop > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    lastScrollTop = scrollTop;
});

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.transform = `scaleX(${scrolled / 100})`;
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
`;
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Auto-play Videos on Hover (Desktop)
document.querySelectorAll('.hero-video-card video').forEach(video => {
    const card = video.closest('.hero-video-card');

    if (window.innerWidth > 768) {
        card.addEventListener('mouseenter', () => {
            video.play().catch(e => console.log('Auto-play prevented:', e));
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});

// Lazy Loading Images/Videos
const lazyElements = document.querySelectorAll('img[data-src], video[data-src]');

const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            if (element.tagName === 'IMG') {
                element.src = element.dataset.src;
            } else if (element.tagName === 'VIDEO') {
                const source = element.querySelector('source');
                if (source) {
                    source.src = source.dataset.src;
                    element.load();
                }
            }

            element.classList.add('loaded');
            observer.unobserve(element);
        }
    });
};

const observer = new IntersectionObserver(lazyLoad, {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
});

lazyElements.forEach(element => {
    element.classList.add('lazy-load');
    observer.observe(element);
});

// Social Share Functionality
function shareToSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    } else if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Add share buttons to footer or appropriate section
const shareContainer = document.createElement('div');
shareContainer.className = 'share-buttons';
shareContainer.innerHTML = `
    <span style="font-weight: 600; margin-right: 0.5rem;">Share:</span>
    <button class="share-btn facebook tooltip" data-tooltip="Share on Facebook" onclick="shareToSocial('facebook')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </button>
    <button class="share-btn twitter tooltip" data-tooltip="Tweet this" onclick="shareToSocial('twitter')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    </button>
    <button class="share-btn linkedin tooltip" data-tooltip="Share on LinkedIn" onclick="shareToSocial('linkedin')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </button>
    <button class="share-btn copy tooltip" data-tooltip="Copy link" onclick="shareToSocial('copy')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
    </button>
`;

// Add to footer
const footer = document.querySelector('.footer .container');
if (footer) {
    const shareWrapper = document.createElement('div');
    shareWrapper.style.cssText = 'text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;';
    shareWrapper.appendChild(shareContainer);
    footer.appendChild(shareWrapper);
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .why-card, .stat-card, .bento-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';

                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
};

// Initialize animations after DOM loads
setTimeout(animateOnScroll, 300);

console.log('✨ Website improvements loaded successfully!');
