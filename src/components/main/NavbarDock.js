import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

import Dock from "../components-animasi/Dock";

export default function NavbarDock() {
   function scrollToID(idElement) {
      const el = document.getElementById(idElement);
      el.scrollIntoView({ behavior: "smooth" });
   }

   return (
      <>
         <Dock
            className="sticky sticky-bottom bottom-0 d-flex d-sm-none"
            items={[
               {
                  icon: <FaHome size={18} />,
                  label: "Beranda",
                  onClick: () => scrollToID("hero-content"),
               },
               {
                  icon: <FaGraduationCap size={18} />,
                  label: "Pendidikan",
                  onClick: () => scrollToID("pendidikan"),
               },
               {
                  icon: <FaTools size={18} />,
                  label: "Projek",
                  onClick: () => alert("Profile!"),
               },
               {
                  icon: <FaHeadphones size={18} />,
                  label: "Kontak",
                  onClick: () => alert("Settings!"),
               },
            ]}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
         />
      </>
   );
}
