export type Artiste = {
  id: number;
  groupe: string;
  nom: string;
  logo?: string;
  description?: string;
  style: string;
  image: string;
  production: string;
  productionType: string;
  passage?: string;
  reseau: string[];
  reseauType: string[];
};

export type productionType = "Spotify" | "Youtube" | "Soundcloud" | "localFile" | "NA";
