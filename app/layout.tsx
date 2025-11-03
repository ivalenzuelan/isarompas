import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Irene Sarompas Martí - Paintings Collection',
  description: 'Paintings by Irene Sarompas Martí - A collection of beautiful artworks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

