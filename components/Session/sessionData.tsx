import { Session } from "@/types/Session";

const sessionData: Session[] = [
  {
    id: 1,
    nom: "#1",
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
    nom: "#2",
    description: "Gabriel Bejanin à la guitare 🎸",
    video: "https://www.youtube.com/embed/c6E1Qw4HmjM?si=Sh5w3yKQKk_lhKNt",
    presentations: [
      "Benjamin Vayrac - Le Véganisme",
      "Tony Lim - Cook un Site Web",
      "Louna Denis Dancale - Les Podcasts",
      "Yseult Veschambre - La Culture Pop",
    ]
  },
];
export default sessionData;
