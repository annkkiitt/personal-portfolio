# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features a beautiful bento grid layout with smooth animations and dark theme.

## 🚀 Features

- **Bento Grid Layout**: Modern card-based navigation with responsive grid system
- **Dark Theme**: Beautiful dark theme enabled by default
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Fully responsive across all devices
- **Modular Architecture**: Clean component structure with reusable components
- **TypeScript**: Full type safety throughout the application
- **shadcn/ui**: Modern UI components with consistent design system

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
personal-portfolio/
├── app/
│   ├── about/
│   │   ├── background/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── projects/
│   │   ├── web-apps/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── BentoGrid.tsx
├── lib/
│   └── utils.ts
└── package.json
```

## 🎨 Design Features

### Bento Grid Layout
- Responsive grid system with different card sizes (sm, md, lg)
- Hover animations with scaling and glowing borders
- Smooth transitions between sections
- Consistent spacing and typography

### Navigation Flow
- Main landing page with 4 main sections
- Each section opens dedicated pages with sub-content
- Breadcrumb navigation with back buttons
- Smooth page transitions

### Visual Design
- Dark theme with subtle gradients
- Soft shadows and rounded corners
- Consistent color scheme using CSS variables
- Modern typography with proper hierarchy

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Content Updates

1. **Main Grid Items**: Edit `components/BentoGrid.tsx` to modify the main navigation cards
2. **Page Content**: Update individual page files in the `app/` directory
3. **Styling**: Modify `app/globals.css` for theme customization
4. **Animations**: Adjust Framer Motion variants in components

### Adding New Sections

1. Create a new directory in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file with your content
3. Update the main grid items in `BentoGrid.tsx`
4. Add navigation links as needed

### Theme Customization

The project uses CSS custom properties for theming. Key variables can be found in `app/globals.css`:

- `--background`: Main background color
- `--foreground`: Text color
- `--primary`: Primary accent color
- `--card`: Card background color
- `--border`: Border colors

## 🎯 Key Components

### BentoGrid Component
- Reusable grid layout component
- Supports different card sizes
- Built-in animations and hover effects
- Responsive design

### Card Components
- shadcn/ui Card components
- Consistent styling and spacing
- Hover animations
- Icon support

### Navigation
- Breadcrumb navigation
- Back button functionality
- Smooth transitions
- Consistent header design

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## 🎨 Animation System

### Framer Motion Variants
- **Container**: Staggered entrance animations
- **Items**: Individual card animations
- **Hover**: Interactive hover effects
- **Page Transitions**: Smooth page navigation

### Animation Features
- Staggered card entrance
- Hover scaling and color transitions
- Smooth page transitions
- Loading states

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Component-based architecture

### Best Practices
- Server Components by default
- Client Components only when needed
- Proper TypeScript types
- Consistent naming conventions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. Custom domain support
4. Edge functions and CDN

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub or contact the maintainer.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
