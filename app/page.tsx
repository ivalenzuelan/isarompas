import Link from 'next/link';
import Image from 'next/image';
import { paintings } from '@/data/paintings';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Irene Sarompas Martí</h1>
        <p className={styles.subtitle}>Pinturas</p>
        <div className={styles.actions}>
          <a href="#portfolio" className={styles.aboutButton}>Portafolio</a>
          <a href="#about" className={styles.aboutButton}>Sobre la artista</a>
        </div>
      </header>

      <main className={styles.main}>
        <div id="portfolio" className={styles.gallery}>
          {paintings.map((painting) => (
            <Link
              key={painting.id}
              href={`/painting/${painting.id}`}
              className={styles.paintingCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.imageUrl}
                  alt={painting.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  priority={painting.id === '1'}
                />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>{painting.title}</h2>
                <p className={styles.cardYear}>{painting.year}</p>
              </div>
            </Link>
          ))}
        </div>

        <section id="about" className={styles.introduction}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h3 className={styles.aboutTitle}>Sobre la artista</h3>
              <p className={styles.introText}>
                Irene Sarompas Martí, nació en Melilla donde aprendió dibujo con María Gallo. Posteriormente se traslado a Madrid, donde curso estudios de Bellas Artes. Ha pintado en el Taller del Prado y de Rosa Calduch, exponiendo periódicamente en España, Estados Unidos y China.
              </p>
              <p className={styles.introText}>
                Sin apartarse de su formación académica, enfoca sus trabajos actuales aplicando las técnicas pictóricas mas variadas sobre todo tipo de bases y con distintos pigmentos.
              </p>
              <p className={styles.introText}>
                Su pintura refleja momentos cuando el espíritu está sereno, ubicado en los sentimientos y conforme con ellos, tanto pintando un rincón del estudio como evocando momentos recién salidos de la mano del Creador.
              </p>
            </div>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/paintings/2A9253F2-73CD-4E09-AC97-397AB84A183D.jpeg"
                alt="Retrato de Irene Sarompas Martí"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.aboutImage}
                priority={false}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Irene Sarompas Martí. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

