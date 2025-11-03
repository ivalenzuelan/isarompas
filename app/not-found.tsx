import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Pintura no encontrada</h2>
      <p className={styles.description}>
        La pintura que buscas no existe o ha sido removida.
      </p>
      <Link href="/" className={styles.button}>
        Volver a la galería
      </Link>
    </div>
  );
}

