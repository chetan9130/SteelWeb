# FRONTEND DEVELOPMENT PROMPT

Build a **premium, modern, highly visual frontend website** for a company that sells and manufactures **Barndominiums, Steel Buildings, Cabins, Metal Buildings and Building Kits**.

The goal is to create a website that feels **premium, trustworthy, modern and construction-industry focused**, while being visually impressive enough to immediately grab the visitor's attention.

## TECH STACK

Use:

* Next.js (latest stable version)
* TypeScript
* Tailwind CSS
* Modern reusable React components
* Lucide React or another clean icon library
* Framer Motion for subtle animations where appropriate

For now, build **FRONTEND ONLY**.

Do NOT implement:

* Database
* Authentication
* Admin panel backend
* Real payment gateway
* Real checkout
* Real AI API
* Backend APIs

Use realistic mock data wherever required.

Structure the code so backend functionality can easily be connected later.

---

# DESIGN DIRECTION

Create a **premium architectural / industrial aesthetic**.

Avoid the typical boring construction website look.

The visual style should combine:

**Modern Architecture + Luxury + Industrial Steel + American Ranch/Barndominium**

### Color Palette

Use a sophisticated dark/light combination:

* Deep Charcoal: `#111315`
* Graphite: `#1C2023`
* Warm Off-White: `#F5F2EA`
* Sand: `#D8C7A3`
* Copper/Orange Accent: `#C8753D`
* Muted Gray: `#73777A`

Use the dark charcoal as the primary visual color, warm off-white for content sections, and copper/orange as the accent.

Do not overuse the accent color.

The website should feel:

* Premium
* Strong
* Architectural
* Clean
* Trustworthy
* High-end
* Modern

---

# TYPOGRAPHY

Use a strong modern font pairing.

Recommended:

**Headings:**
Space Grotesk / Sora / Manrope

**Body:**
Inter / DM Sans

Large bold headlines with generous spacing.

Example:

> BUILD
> SOMETHING
> WORTH LIVING IN.

Use oversized typography for important hero sections.

---

# VISUAL STYLE

Use large, high-quality architectural imagery.

Prioritize:

* Large steel buildings
* Modern barndominiums
* Cabins
* Ranch-style houses
* Interior architecture
* Construction details
* Steel framing
* Dramatic exterior photography
* Aerial property shots

Images should feel cinematic and premium.

Use dark overlays where necessary to make text readable.

Use rounded corners moderately.

Avoid excessive cards everywhere.

Use **large visual sections, asymmetrical layouts, overlapping images and editorial-style compositions**.

---

# GLOBAL NAVIGATION

Create a sticky navbar.

Desktop:

```text
LOGO

Buildings
Models
Videos
About
Resources

                    Get a Quote
```

Navbar should become compact on scroll.

Mobile:

* Logo
* Hamburger menu
* Get Quote CTA

Use a dark navbar with subtle transparency/backdrop blur.

---

# HOME PAGE

Create an extremely strong hero section.

### Hero

Full-screen architectural image/video background.

Headline:

> BUILD YOUR
> VISION.

Supporting text:

> Premium steel buildings, barndominiums and custom building solutions designed around the way you live.

Buttons:

**Explore Buildings**

**Get an Instant Quote**

Add a small trust indicator:

> Built for strength. Designed for life.

Hero should have subtle entrance animations.

Add a scroll indicator.

---

# HERO VISUAL

Use an image of a stunning modern barndominium/steel building.

Create a cinematic effect:

* Dark gradient overlay
* Slow image movement
* Text reveal animation
* CTA hover animations

Do NOT make animations excessive.

---

# SECTION: FEATURED BUILDINGS

Heading:

> FIND THE RIGHT SPACE
> FOR YOUR NEXT CHAPTER.

Show 3–6 featured buildings.

Each item should be highly visual.

Example:

```text
┌───────────────────────────────┐
│                               │
│        BUILDING IMAGE         │
│                               │
│                         →     │
└───────────────────────────────┘

MODERN SERIES

Modern Barn 2400

2,400 SQ FT
3 BED • 2 BATH
```

Use image hover effects.

On hover:

* Image slightly zooms
* Arrow moves
* Details appear

---

# SECTION: WHY STEEL

Create a visually strong split section.

Left:

Large steel construction image.

Right:

> BUILT DIFFERENT.

Explain benefits:

* Strength
* Durability
* Flexible design
* Low maintenance
* Customizable
* Long-lasting construction

Use large numbered statistics:

```text
01
ENGINEERED FOR STRENGTH

02
DESIGNED FOR FLEXIBILITY

03
BUILT TO LAST
```

---

# SECTION: BUILDING CATEGORIES

Create an editorial category section.

Categories:

### Barndominiums

Modern living spaces combining home + workspace.

### Steel Buildings

Durable buildings for residential, agricultural and commercial use.

### Cabins

Compact and comfortable spaces designed for modern living.

### Building Kits

Pre-engineered building solutions.

Use large images with category names overlayed.

---

# SECTION: INSTANT QUOTE

Create a visually impressive CTA section.

Dark background.

Heading:

> KNOW WHAT
> YOUR BUILD COULD COST.

Subtext:

> Get an estimated price based on your building model, size and options.

Button:

**START YOUR QUOTE →**

Show a small visual representation of:

```text
MODEL
↓
SIZE
↓
OPTIONS
↓
ESTIMATE
```

For frontend, clicking the button should navigate to `/quote`.

---

# QUOTE PAGE

Create a beautiful multi-step quote UI.

### Step 1

Choose Building

Display selectable cards.

### Step 2

Choose Model

### Step 3

Enter Size

Example:

```text
Square Footage
[ 2400 ]
SQ FT
```

### Step 4

Choose Options

Checkboxes/cards:

* Garage
* Windows
* Doors
* Porch
* Interior package
* Insulation

### Step 5

Estimated Price

Display:

> ESTIMATED BUILD COST

Large price:

> $XXX,XXX

Add disclaimer:

> This is an estimated price. Final pricing may vary based on location, customization, engineering and other project requirements.

### Step 6

Contact Information

Fields:

* Name
* Phone
* Email
* ZIP Code

Button:

**REQUEST MY QUOTE**

For now, simulate submission and show a beautiful success state.

---

# UPLOAD YOUR FLOOR PLAN

Create a dedicated section/page.

Headline:

> ALREADY HAVE
> A PLAN?

Subheading:

> Upload your floor plan and let our team help bring your vision to life.

Create a large drag-and-drop upload area.

UI:

```text
       ↑

DROP YOUR FLOOR PLAN HERE

PDF, JPG or PNG

[ Browse Files ]
```

Below:

Project Details

* Name
* Email
* Phone
* ZIP Code
* Project description

Button:

**SUBMIT FLOOR PLAN**

Frontend only — simulate upload/submission.

---

# MODELS PAGE

Create a premium product catalog.

Include:

Filter bar:

```text
All
Barndominiums
Steel Buildings
Cabins
Kits
```

Additional filters:

* Square footage
* Bedrooms
* Bathrooms
* Price range

Product cards should show:

* Large image
* Name
* Model number
* Square footage
* Beds
* Baths
* Starting price
* CTA

Example:

```text
MODERN SERIES

THE HAWTHORNE

2,400 SQ FT
3 BED
2.5 BATH

Starting at $XXX,XXX

VIEW MODEL →
```

Use grid + editorial layouts rather than generic ecommerce cards.

---

# PRODUCT DETAIL PAGE

Create an impressive product detail page.

Hero:

Large image gallery.

Information:

> THE HAWTHORNE

> 2,400 SQ FT

> 3 BEDROOMS

> 2.5 BATHROOMS

Starting price.

Buttons:

**GET A QUOTE**

**CALL NOW**

Sections:

### Overview

### Specifications

### Floor Plan

Display floor plan image prominently.

### Features

### Gallery

### Videos

### Available Options

### Related Models

---

# VIDEOS PAGE

Create a cinematic video gallery.

Heading:

> SEE IT
> COME TO LIFE.

Categories:

* Building Tours
* Construction
* Interiors
* Customer Projects

Use large video thumbnails.

Hover:

* Play icon
* Slight image zoom
* Dark overlay

---

# ABOUT PAGE

Create an editorial-style company story.

Hero:

> BUILT ON
> BETTER IDEAS.

Sections:

* Company story
* Mission
* Building philosophy
* Quality
* Craftsmanship

Include large architectural images.

Add statistics:

```text
15+
YEARS EXPERIENCE

500+
PROJECTS

50+
DESIGNS

100%
COMMITMENT
```

Use animated counters when they enter the viewport.

---

# CONTACT PAGE

Modern contact layout.

Left:

> LET'S BUILD
> SOMETHING GREAT.

Right:

Contact form.

Fields:

* Name
* Email
* Phone
* ZIP
* Message

CTA:

**SEND MESSAGE**

Also display:

* Phone
* Email
* Location
* Business hours

---

# AI CHAT UI

Create the **frontend chatbot interface only**.

Floating button in bottom-right.

Click opens chat panel.

Example:

```text
┌─────────────────────────────┐
│ BUILD ASSISTANT         ×   │
├─────────────────────────────┤
│ Hi! I'm here to help you    │
│ find the right building.    │
│                             │
│ What are you looking for?   │
│                             │
│ [ Explore Models ]          │
│ [ Get a Quote ]             │
│ [ Ask a Question ]          │
├─────────────────────────────┤
│ Type your message...    →   │
└─────────────────────────────┘
```

Use mock responses.

Make it feel like a polished AI product, not a generic chatbot.

---

# FOOTER

Large premium footer.

Include:

Logo

Short company description.

Navigation:

* Buildings
* Models
* Videos
* About
* Contact
* Get Quote

Resources:

* FAQs
* Floor Plans
* Downloads

Contact information.

Social icons.

Newsletter signup.

Bottom:

```text
© 2026 Company Name

Privacy Policy
Terms & Conditions
```

---

# ANIMATIONS

Use Framer Motion carefully.

Include:

* Page entrance animations
* Hero text reveal
* Image fade/scale
* Scroll reveal
* Hover transitions
* Button micro-interactions
* Animated counters
* Smooth navigation transitions

Avoid:

* Excessive bouncing
* Overly flashy effects
* Slow page transitions
* Animations that hurt usability

The website should feel **premium and fast**, not like a flashy template.

---

# RESPONSIVENESS

Must work perfectly on:

### Desktop

1440px+

### Laptop

1024–1439px

### Tablet

768–1023px

### Mobile

320–767px

Pay special attention to:

* Hero typography
* Navigation
* Product grids
* Forms
* Quote wizard
* Image aspect ratios
* Touch targets
* Chat widget

---

# COMPONENT ARCHITECTURE

Create reusable components such as:

```text
components/
├── Navbar
├── Footer
├── Hero
├── SectionHeading
├── BuildingCard
├── BuildingGrid
├── CategoryCard
├── ImageGallery
├── VideoCard
├── QuoteWizard
├── QuoteStep
├── FileUpload
├── ContactForm
├── ProductSpecs
├── ProductOptions
├── ChatWidget
├── CTASection
├── Stats
└── Button
```

Do not duplicate UI code unnecessarily.

---

# MOCK DATA

Create realistic mock data for at least **8–12 buildings/models**.

Each should contain:

* Name
* Category
* Description
* Image
* Gallery
* Square footage
* Bedrooms
* Bathrooms
* Starting price
* Features
* Floor plan
* Video
* Options

Use a centralized mock-data file so it can later be replaced by API/database data.

---

# ROUTES

Create:

```text
/
 /about
 /buildings
 /buildings/[slug]
 /models
 /models/[slug]
 /videos
 /quote
 /upload-floor-plan
 /contact
```

Use dynamic routes for products/models.

---

# IMPORTANT UX REQUIREMENTS

The website should always guide users toward conversion.

Primary CTA:

**GET A QUOTE**

Secondary CTAs:

**EXPLORE MODELS**
**CONTACT US**
**CALL NOW**

Place quote CTAs strategically throughout the website.

Do not make every section look like a sales popup.

---

# QUALITY REQUIREMENTS

Before considering the frontend complete:

* No broken links
* No placeholder "Lorem ipsum"
* No console errors
* No overflowing elements
* No horizontal scrolling on mobile
* All buttons should work
* Forms should have validation
* Navigation should work
* Product pages should work
* Quote wizard should work with mock data
* Upload UI should work visually
* Chat UI should work with mock responses
* Images should be optimized
* Loading states should exist
* Empty states should exist
* 404 page should exist

---

# FINAL DESIGN GOAL

The final website should feel like a **high-end American architectural/construction brand**, not a generic contractor website.

Think:

**Apple-level simplicity + premium architecture magazine + modern industrial design.**

Use **large photography, bold typography, strong contrast, sophisticated spacing, subtle animations and copper accents** to create a memorable visual identity.

The first impression should immediately communicate:

> **"These people build premium structures."**

Build the frontend cleanly and modularly so that the backend, CMS, ecommerce, AI and lead-management functionality can be connected later without redesigning the frontend.
