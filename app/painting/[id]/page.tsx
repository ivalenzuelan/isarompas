import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from './ImageGallery';
import { paintings } from '@/data/paintings';
import styles from './page.module.css';

export async function generateStaticParams() {
  return paintings.map((painting) => ({
    id: painting.id,
  }));
}

export default function PaintingPage({ params }: { params: { id: string } }) {
  const painting = paintings.find((p) => p.id === params.id);

  if (!painting) {
    notFound();
  }

  const currentIndex = paintings.findIndex((p) => p.id === params.id);
  const nextPainting = paintings[currentIndex + 1];
  const prevPainting = paintings[currentIndex - 1];

  // Combine main image with additional images
  const allImages = [painting.imageUrl, ...(painting.additionalImages || [])];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          ← Volver a la galería
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <ImageGallery
            title={painting.title}
            mainImageUrl={painting.imageUrl}
            additionalImages={painting.additionalImages}
          />

          <div className={styles.infoSection}>
            <h1 className={styles.title}>{painting.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Año:</span>
                <span className={styles.metaValue}>{painting.year}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Técnica:</span>
                <span className={styles.metaValue}>{painting.medium}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Dimensiones:</span>
                <span className={styles.metaValue}>{painting.dimensions}</span>
              </div>
            </div>
            {painting.description && (
              <p className={styles.description}>{painting.description}</p>
            )}

            <div className={styles.navigation}>
              {prevPainting ? (
                <Link href={`/painting/${prevPainting.id}`} className={styles.navButton}>
                  ← Anterior
                </Link>
              ) : (
                <div className={styles.navButtonDisabled} />
              )}
              {nextPainting ? (
                <Link href={`/painting/${nextPainting.id}`} className={styles.navButton}>
                  Siguiente →
                </Link>
              ) : (
                <div className={styles.navButtonDisabled} />
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Irene Sarompas Martí. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
