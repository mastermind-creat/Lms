# ElimuTech - Silicon Savannah's Learning Platform

ElimuTech is a modern, responsive, and cinematically animated Learning Management System (LMS) frontend designed specifically for the African tech ecosystem. It focuses on accessibility, practical skills, and bridging the gap between talent and opportunity in the "Silicon Savannah."

## 🚀 Features

- **Modern UI/UX**:
  - **Glassmorphism**: Frosted glass effects on navigation and cards.
  - **Cinematic Animations**: Staggered fade-ins, slow zooms, and floating elements for a "live" feel.
  - **Bento Grid Layouts**: Trendy, space-efficient layouts for feature showcases.
  - **Infinite Marquee**: Smooth auto-scrolling partner logos.
  
- **Responsive Design**:
  - Mobile-first approach.
  - Adaptive Grids: 2 columns on mobile, 4 on desktop for maximum content visibility.
  - Touch-friendly carousels for testimonials.

- **Course Management**:
  - **Catalog**: Filterable course list with category tabs.
  - **Course Details**: Dedicated pages with syllabus, pricing, and instructor info.
  - **Pricing Badges**: Visual distinction between Free and Paid courses.

- **Localization**:
  - Content tailored to the Kenyan market (M-PESA, Safaricom, etc.).
  - Localized currency (KES) and context.

## 🛠️ Tech Stack

- **Core**: React 18 (via ESM)
- **Styling**: Tailwind CSS (via CDN with custom config)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Typography**: Inter (Body) & Space Grotesk (Headings) via Google Fonts
- **Build System**: No-build setup using native ES Modules and Import Maps (for rapid prototyping)

## 📂 Project Structure

```
/
├── index.html              # Entry point, Tailwind config, Import Maps
├── index.tsx               # React root mount
├── App.tsx                 # Main routing and layout
├── metadata.json           # App metadata
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Sticky glassmorphic navigation
│   ├── Hero.tsx            # Animated landing section
│   ├── FeaturedCourses.tsx # Homepage course grid
│   ├── Partners.tsx        # Infinite scroll client logos
│   ├── Testimonials.tsx    # Interactive carousel
│   └── ...
├── pages/                  # Page-level components
│   ├── Home.tsx            # Landing page composition
│   ├── AllCourses.tsx      # Full catalog with filters
│   └── CourseDetails.tsx   # Individual course view
└── data/
    └── courses.ts          # Centralized mock data interface
```

## 🚀 Getting Started

This project uses a browser-native ESM setup.

1.  **Clone the repository**.
2.  **Serve the files**: You need a static file server to handle the ES modules.
    *   VS Code: Use the "Live Server" extension.
    *   Python: `python -m http.server`
    *   Node: `npx serve`
3.  **Open in Browser**: Navigate to `localhost:your-port`.

## 🎨 Customization

### Theming
Tailwind configuration is located directly in `index.html` within the `<script>` tag. You can customize:
- `colors.brand`: Primary color palette.
- `animation`: Custom keyframes for the cinematic effects.

### Data
To add or modify courses, edit `data/courses.ts`. The UI will automatically update to reflect changes in pricing, images, or categories.

## 📄 License

MIT