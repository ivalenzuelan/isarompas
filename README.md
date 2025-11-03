# Artist Portfolio

A modern, responsive web portfolio for displaying an artist's paintings. Built with Next.js 14 and optimized for Vercel deployment.

## Features

- Beautiful gallery view showcasing all paintings
- Individual painting detail pages
- Responsive design for mobile, tablet, and desktop
- Image optimization with Next.js Image component
- Fast page loads with static generation
- Smooth transitions and hover effects

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your portfolio will be deployed!

## Customization

### Adding Your Own Paintings

1. **Add your images** to the `public/paintings/` folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Use descriptive filenames (e.g., `paisaje-1.jpg`)

2. **Edit `data/paintings.ts`** to add your paintings. Each painting requires:
   - `id`: Unique identifier (e.g., '1', '2', '3')
   - `title`: Painting title
   - `year`: Year created
   - `medium`: Art medium (e.g., "Óleo sobre lienzo")
   - `dimensions`: Painting dimensions (e.g., '50 x 60 cm')
   - `imageUrl`: Path to **main image** (shown as thumbnail in gallery) starting with `/paintings/` (e.g., '/paintings/mi-pintura.jpg')
   - `additionalImages`: (Optional) Array of additional image paths that will be shown in the detail page
   - `description`: Optional description

**Example with single image:**
```typescript
{
  id: '1',
  title: 'Mi Pintura',
  year: 2024,
  medium: 'Óleo sobre lienzo',
  dimensions: '50 x 60 cm',
  imageUrl: '/paintings/mi-pintura.jpg',
  description: 'Descripción de la pintura...',
}
```

**Example with multiple images:**
```typescript
{
  id: '2',
  title: 'Mi Obra',
  year: 2024,
  medium: 'Óleo sobre lienzo',
  dimensions: '60 x 80 cm',
  imageUrl: '/paintings/obra-principal.jpg', // Main thumbnail
  additionalImages: [ // Shown in detail page
    '/paintings/obra-detalle-1.jpg',
    '/paintings/obra-detalle-2.jpg',
  ],
  description: 'Descripción de la obra...',
}
```

For detailed instructions, see [IMAGES_INSTRUCTIONS.md](./IMAGES_INSTRUCTIONS.md)

### Styling

- Global styles: `app/globals.css`
- Homepage styles: `app/page.module.css`
- Painting detail styles: `app/painting/[id]/page.module.css`

### Changing Colors

The portfolio uses a purple gradient theme. To change colors, update the CSS variables and gradient backgrounds in the module CSS files.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Next.js Image** - Optimized image loading

