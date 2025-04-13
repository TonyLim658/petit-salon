import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Project from "@/components/Hero/Project";
import Join from "@/components/Hero/Join";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | Petit Salon",
  description: "Page d'accueil de la Petit Salon",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Project />
      <Join />
    </>
  );
}
