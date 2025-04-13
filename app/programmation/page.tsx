import ProgrammationSectionOne from "@/components/Programmation/ProgrammationSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmation | Petit Salon",
  description: "Page de la programmation du Petit Salon",
  // other metadata
};

const Programmation = () => {
  return (
    <>
      <Breadcrumb
        pageName="Programmation"
        description="Les musicien.nes et les exposant.es que vous rencontrerez au Petit Salon!"
      />
        <ProgrammationSectionOne />
    </>
  );
};

export default Programmation;
