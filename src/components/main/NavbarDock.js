import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

import Dock from "../components-animasi/Dock";

export default function NavbarDock() {
   return (
      <>
         <Dock
            className="sticky sticky-bottom bottom-0 d-flex d-sm-none"
            items={[
               {
                  icon: <FaHome size={18} />,
                  label: "Beranda",
                  onClick: () => alert("Home!"),
               },
               {
                  icon: <FaUserCircle size={18} />,
                  label: "Tentang",
                  onClick: () => alert("Archive!"),
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
