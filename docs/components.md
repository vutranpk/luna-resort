# 🧩 LUNA Resort & Hotel - Components

This document outlines the reusable UI components used across the LUNA Resort & Hotel landing page.

## 1. Layout & Structure
- **`Container`**: Standard `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` to keep content centered with consistent padding.
- **`Section`**: Wrapper for major page sections, typically using `py-16` or `py-24` for generous vertical whitespace.

## 2. Core Components

### `Button`
- **Primary (Dark):** `bg-neutral-900 text-white px-6 py-3 font-medium uppercase text-sm tracking-wider hover:bg-neutral-800 transition-colors`
- **Primary (Accent):** `bg-[#FAD2B3] text-neutral-900 px-6 py-3 font-medium uppercase text-sm tracking-wider hover:bg-[#f8c59c] transition-colors`
- **Split Button (CTA):** A flex container with text on a dark background and an arrow icon on the accent background.

### `SectionHeader`
- **Title:** `text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-neutral-900`
- **Subtitle/Description:** `text-gray-500 max-w-2xl mt-4`

### `ImageCard`
- Used for highlighting events, rooms, and facilities.
- **Image Wrapper:** `relative overflow-hidden rounded-2xl group`
- **Image Element:** `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`
- **Content Overlay (Optional):** Absolute positioned at the bottom, white or dark gradient, containing title and description.

### `TestimonialCard`
- **Card Wrapper:** `bg-white p-8 rounded-2xl`
- **Review Text:** `text-gray-600 mb-6 italic`
- **Author Block:** Flex container with an avatar image (`w-12 h-12 rounded-full object-cover`), name (`font-bold text-neutral-900`), and location (`text-sm text-gray-500`).
- **Rating:** 5-star icons aligned to the right.

### `VideoCard`
- Full-width or large grid image representing a video.
- **Play Button:** Absolute centered, usually a white circle with a dark play icon, adding a subtle scale on hover.
