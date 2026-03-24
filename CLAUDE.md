# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **Rollin Dough**, a mobile wood fired apizza trailer based in Guilford, CT (rollindoughct.com). The site is SEO-optimized to rank for "pizza trailer guilford ct" and related local keywords.

- **Business**: Rollin Dough Wood Fired Apizza
- **Location**: Guilford, CT (GPS: 41.288587, -72.685183)
- **Phone**: (203) 675-1306
- **Email**: rollindoughmobile@gmail.com
- **Repo**: github.com/webbersaur/rollindoughct (GitHub Pages deployment)

## Architecture

Single-page static site — no build system, no dependencies.

- `index.html` — entire landing page (hero, about, menu, gallery, packages, service area, contact)
- `css/styles.css` — all styles, CSS custom properties for theming, mobile-first responsive
- `js/main.js` — mobile nav toggle, IntersectionObserver scroll animations
- `images/` — web-optimized assets (WebP + JPG fallbacks), all geotagged with EXIF metadata

## Development

```bash
python3 -m http.server 8080
```

## Image Processing

All images in `images/` are geotagged to Guilford, CT and named with SEO keywords.

```bash
# Resize
sips -Z 1200 input.jpg --out images/output.jpg

# Convert to WebP
cwebp -q 82 input.jpg -o images/output.webp

# Geotag for Guilford CT
exiftool -overwrite_original \
  -GPSLatitude=41.288586896399956 -GPSLatitudeRef=N \
  -GPSLongitude=72.68518299618292 -GPSLongitudeRef=W \
  -IPTC:City="Guilford" -IPTC:Province-State="Connecticut" \
  -Copyright="Rollin Dough CT" image.jpg
```

## SEO Strategy

- **Primary keyword**: "pizza trailer guilford ct"
- Geo meta tags and ICBM coordinates in `<head>`
- LocalBusiness (FoodEstablishment) schema with structured pricing
- Image alt text includes location keywords naturally
- Service area section lists surrounding CT towns for geographic reach
- Image filenames are keyword-rich and hyphenated (e.g., `pizza-trailer-guilford-ct.webp`)

## Conventions

- CSS custom properties for all colors, spacing, and typography
- Fonts: Bebas Neue (display), Inter (body) via Google Fonts
- Dark theme (black/charcoal background, white text, red accents)
- Mobile-first with breakpoints at 768px and 480px
