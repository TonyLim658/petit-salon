import RolesSectionOne from "@/components/Roles/RolesSectionOne";
import RolesSectionTwo from "@/components/Roles/RolesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pôles | Petit Salon",
  description: "Page des rôles et pôles du Petit Salon",
  // other metadata
};

const RolesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pôles"
        description="Page des rôles et pôles du Petit Salon, les responsables et les bénévoles seront mis à jour sur cette page."
      />
      <RolesSectionOne />
    </>
  );
};

export default RolesPage;
