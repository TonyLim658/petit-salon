import PateEpinardSection from "@/components/PateEpinard/PateEpinardSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions | Pâte Épinard",
  description: "Page des différentes sessions de Pâte Épinard",
  // other metadata
};

const Sessions = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pâte Épinard"
        description="Les discussions des Pâte Épinard!"
      />
        <PateEpinardSection />
    </>
  );
};

export default Sessions;
