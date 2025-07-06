import { Session } from "@/types/Session";

const sessionData: Session[] = [
  {
    id: 1,
    nom: "#1 le 23 Mars 2025",
    description: "Michaël Zerbib au piano 🎹",
    video: "https://www.youtube.com/embed/oNsOQ7d3stY?si=lz83WmajBoDI8Bne",
    presentations: [
      "Benjamin Vayrac - La Théorie de l'Evolution",
      "Tony Lim - Le Cambodge",
      "Michaël Zerbib - Musique & Emotions",
      "Angèle Delaporte - Les Low Tech",
    ]
  },
  {
    id: 2,
    nom: "#2 le 4 Mai 2025",
    description: "Gabriel Bejanin à la guitare 🎸",
    video: "https://www.youtube.com/embed/c6E1Qw4HmjM?si=Sh5w3yKQKk_lhKNt",
    presentations: [
      "Benjamin Vayrac - Le Véganisme",
      "Tony Lim - Cook un Site Web",
      "Louna Denis Dancale - Les Podcasts",
      "Yseult Veschambre - La Culture Pop",
    ]
  },
  {
    id: 3,
    nom: "#3 le 15 Juin 2025",
    description: "Michaël Zerbib au piano 🎹",
    video: "https://www.youtube.com/embed/zmHTSViDPZA?si=r6IFHgfEf00ghU8O",
    presentations: [
      "Camille Labattut - L'Archéométrie",
      "François Simonin - Animation : Faire rêver l'Enfant et parler à l'Adulte",
      "Melvin Le Nevé - La Poissonnerie et la Taille des Poissons",
      "Natalène Sylvestre - La Sémiotique",
    ]
  },
  {
    id: 4,
    nom: "#4 le 13 Juillet 2025",
    description: "Laurine au Violon 🎻",
    presentations: [
      "(Ordre à définir)",
      "Ursula",
      "Aëla Ollivier",
      "Enora Motton",
      "Raphaëlle Cordes - "
    ]
  },
];
export default sessionData;
