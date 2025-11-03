# Paintings Images Folder

Place all your painting images in this folder.

## How to Add Images

1. **Add your image files** to this `public/paintings/` folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended: Use descriptive filenames (e.g., `paisaje-1.jpg`, `retrato-2.jpg`)

2. **Update `data/paintings.ts`** with your image paths:
   ```typescript
   imageUrl: '/paintings/nombre-de-tu-imagen.jpg'
   ```

## Example

If you have a file named `paisaje-1.jpg` in this folder, reference it in your paintings data like this:

```typescript
{
  id: '1',
  title: 'Mi Pintura',
  year: 2024,
  medium: 'Óleo sobre lienzo',
  dimensions: '50 x 60 cm',
  imageUrl: '/paintings/paisaje-1.jpg',
}
```

**Note:** The path always starts with `/paintings/` because Next.js serves files from the `public` folder at the root URL.

