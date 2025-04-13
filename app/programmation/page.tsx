import ProgrammationSectionOne from "@/components/Programmation/ProgrammationSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmation | Poule Party",
  description: "Page de la programmation de la Poule Party",
  // other metadata
};

const Programmation = () => {
  return (
    <>
      <Breadcrumb
        pageName="Programmation"
        description="Les musicien.nes et les exposant.es que vous rencontrerez à la Poule Party!"
      />
        <ProgrammationSectionOne />
    </>
  );
};

export default Programmation;
