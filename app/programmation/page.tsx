import ProgrammationSectionOne from "@/components/Programmation/ProgrammationSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions | Petit Salon",
  description: "Page des différentes sessions du Petit Salon",
  // other metadata
};

const Programmation = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sessions"
        description="Les présentations faites au Petit Salon!"
      />
        <ProgrammationSectionOne />
    </>
  );
};

export default Programmation;
