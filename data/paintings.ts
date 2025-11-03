export interface Painting {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  imageUrl: string; // Main image shown as thumbnail in gallery
  additionalImages?: string[]; // Optional additional images shown in detail page
  description?: string;
}

export const paintings: Painting[] = [
  // Generated from public/paintings/* folders. Update titles/metadata as desired.
  {
    id: '1',
    title: 'Pintura 1',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/1/1A2BAC92-36EB-400E-9511-6F2628948C42.jpeg',
  },
  {
    id: '2',
    title: 'Pintura 2',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/2/3AC28873-9661-4AD4-A9DF-40DBEE4F9F8B.jpeg',
  },
  {
    id: '3',
    title: 'Pintura 3',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/3/5CAC46BB-5932-4251-93F1-9757E67EF41F.jpeg',
  },
  {
    id: '4',
    title: 'Pintura 4',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/4/6FA47F77-BA54-4CE0-963E-686FB03CDBFF.jpeg',
    additionalImages: [
      '/paintings/4/7AB46FA4-DE82-4ACA-8381-987410133D4A.jpeg',
      '/paintings/4/90C07C91-AD74-441D-96FD-5F82C79A679A.jpeg',
    ],
  },
  {
    id: '5',
    title: 'Pintura 5',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/5/60E4D13E-DF31-4EF6-8553-45B370A15837.jpeg',
  },
  {
    id: '6',
    title: 'Pintura 6',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/6/63C01394-F0C9-4993-9E47-015D003A2425.jpeg',
    additionalImages: [
      '/paintings/6/33815E70-F67C-4E84-8F99-5213613A31FE.jpeg',
    ],
  },
  {
    id: '7',
    title: 'Pintura 7',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/7/63ECACC1-82FD-45F1-B477-54D668EF0497.jpeg',
  },
  {
    id: '9',
    title: 'Pintura 9',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/9/299ACAD5-FB3F-4732-A958-9E791DC80B4A.jpeg',
  },
  {
    id: '10',
    title: 'Pintura 10',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/10/329D8DE5-189F-4334-9723-E20B42E84CD7.jpeg',
  },
  {
    id: '11',
    title: 'Pintura 11',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/11/1941F11B-BBC9-4D24-B002-32EA678E279E.jpeg',
  },
  {
    id: '12',
    title: 'Pintura 12',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/12/2983C631-9FF3-4C29-927C-09FEDB415315.jpeg',
  },
  {
    id: '13',
    title: 'Pintura 13',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/13/A4B63750-121A-413F-BD92-385A0328EEC6_1_201_a.jpeg',
    additionalImages: [
      '/paintings/13/E658F9BC-16CC-4A07-AA01-11E4A6CBB1AA.jpeg',
      '/paintings/13/6737A2E6-B204-4C62-BE23-04B1732607ED.jpeg',
    ],
  },
  {
    id: '14',
    title: 'Pintura 14',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/14/A6A27F0C-AE06-4021-BE4F-5658485D4A84.jpeg',
  },
  {
    id: '15',
    title: 'Pintura 15',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '50 x 60 cm',
    imageUrl: '/paintings/15/FD8CE703-F45C-4AAD-B44F-B077B806C807.jpeg',
  },
];
