'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface ImageGalleryProps {
  title: string;
  mainImageUrl: string;
  additionalImages?: string[];
}

export default function ImageGallery({ title, mainImageUrl, additionalImages = [] }: ImageGalleryProps) {
  const allImages = [mainImageUrl, ...additionalImages];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeUrl = allImages[activeIndex];

  return (
    <div className={styles.imageSection}>
      <div className={styles.mainImageWrapper}>
        <Image
          src={activeUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className={styles.mainImage}
          priority
        />
      </div>

      {allImages.length > 1 && (
        <div className={styles.additionalImagesSection}>
          <h3 className={styles.additionalImagesTitle}>Imágenes adicionales</h3>
          <div className={styles.additionalImagesGrid}>
            {allImages.map((url, index) => (
              <button
                key={`${url}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={styles.additionalImageWrapper}
                aria-pressed={activeIndex === index}
                title={index === 0 ? 'Imagen principal' : `Vista ${index}`}
              >
                <Image
                  src={url}
                  alt={index === 0 ? `${title} (principal)` : `${title} - Vista ${index}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.additionalImage}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


