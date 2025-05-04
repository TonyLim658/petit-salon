import SessionSection from "@/components/Session/SessionSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions | Petit Salon",
  description: "Page des différentes sessions du Petit Salon",
  // other metadata
};

const Sessions = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sessions"
        description="Les présentations faites au Petit Salon!"
      />
        <SessionSection />
    </>
  );
};

export default Sessions;
