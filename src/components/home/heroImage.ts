import bannerImg from '../../assets/homepage/banner-img1.png';

// Shared by HeroSection (the <Image>) and index.astro (the <link rel="preload">) so they stay in sync
export const heroImage = bannerImg;
export const heroWidths = [400, 560, 672, 800, 1152];
// Mirrors .container-x padding (px-5) and the max-w-md / lg:max-w-xl wrapper
export const heroSizes = '(min-width: 1024px) 576px, (min-width: 640px) 448px, calc(100vw - 2.5rem)';
