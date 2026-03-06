export enum Tab {
  HOME = 'HOME',
  EXHIBITIONS = 'EXHIBITIONS',
  COLLECTIONS = 'COLLECTIONS',
  GUIDE = 'GUIDE',
  MAP = 'MAP'
}

export interface Exhibition {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  location: string;
  isSpecial: boolean;
}

export interface Artifact {
  id: string;
  name: string;
  period: string;
  image: string;
  category: string;
  baseDescription: string; // Static fallback
}

export interface MapArea {
  id: string;
  name: string;
  description: string;
  color: string;
}