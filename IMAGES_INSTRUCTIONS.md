# Cómo Añadir tus Pinturas

## Paso 1: Añadir las Imágenes

1. Coloca todas tus imágenes de pinturas en la carpeta:
   ```
   public/paintings/
   ```

2. Formatos soportados:
   - `.jpg` / `.jpeg`
   - `.png`
   - `.webp`

3. Nombres de archivo recomendados:
   - Usa nombres descriptivos como: `paisaje-1.jpg`, `retrato-2.jpg`, etc.
   - Evita espacios en los nombres, usa guiones (`-`) o guiones bajos (`_`)

## Paso 2: Actualizar los Datos de las Pinturas

1. Abre el archivo: `data/paintings.ts`

2. Para cada pintura, actualiza:
   - `id`: Un identificador único (ej: '1', '2', '3'...)
   - `title`: El título de la pintura
   - `year`: El año de creación
   - `medium`: La técnica utilizada (ej: 'Óleo sobre lienzo')
   - `dimensions`: Las dimensiones (ej: '50 x 60 cm')
   - `imageUrl`: La ruta de la imagen **principal** (mostrada como miniatura en la galería) empezando con `/paintings/` (ej: '/paintings/mi-pintura.jpg')
   - `additionalImages`: (Opcional) Un array con rutas de imágenes adicionales que se mostrarán en la página de detalle (ej: ['/paintings/detalle-1.jpg', '/paintings/detalle-2.jpg'])
   - `description`: Descripción opcional de la pintura

## Ejemplo

### Pintura con una sola imagen:

Si tienes un archivo llamado `paisaje-madrid.jpg` en la carpeta `public/paintings/`:

```typescript
{
  id: '1',
  title: 'Paisaje de Madrid',
  year: 2024,
  medium: 'Óleo sobre lienzo',
  dimensions: '50 x 60 cm',
  imageUrl: '/paintings/paisaje-madrid.jpg',
  description: 'Una vista de Madrid desde el Retiro.',
}
```

### Pintura con imagen principal y adicionales:

Si tienes una imagen principal y varias imágenes adicionales:

```typescript
{
  id: '2',
  title: 'Mi Obra',
  year: 2024,
  medium: 'Óleo sobre lienzo',
  dimensions: '60 x 80 cm',
  imageUrl: '/paintings/obra-principal.jpg', // Esta se muestra en la galería
  additionalImages: [ // Estas se muestran en la página de detalle
    '/paintings/obra-detalle-1.jpg',
    '/paintings/obra-detalle-2.jpg',
    '/paintings/obra-detalle-3.jpg',
  ],
  description: 'Descripción de la obra...',
}
```

**Nota:** La `imageUrl` es la imagen principal que se muestra como miniatura en la galería. Las `additionalImages` son opcionales y solo se muestran cuando entras a ver los detalles de la pintura.

## Notas Importantes

- Las rutas de imágenes siempre empiezan con `/paintings/` porque Next.js sirve los archivos de la carpeta `public` en la raíz del sitio
- No incluyas `public` en la ruta, solo `/paintings/tu-imagen.jpg`
- Después de añadir imágenes nuevas, reinicia el servidor de desarrollo (`npm run dev`)

## Optimización de Imágenes

Para mejores resultados:
- Usa imágenes con una resolución razonable (no más de 2000px de ancho)
- Comprime las imágenes antes de subirlas (herramientas online como TinyPNG)
- Next.js optimizará automáticamente las imágenes en producción

