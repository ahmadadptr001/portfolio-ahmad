import { FaFacebookMessenger, FaGithubAlt, FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import GlitchText from "../components-animasi/GlitchText";
import CircularText from "../components-animasi/CircularText";
import Squares from "../components-animasi/Squares";

export default function Hero() {
   return (
      <div
         className="container-fluid position-relative"
         style={{ minHeight: "85vh" }}
      >
         <Squares
            speed={0.1}
            squareSize={80}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="red"
            hoverFillColor="red"
            className="position-absolute w-100 h-100 top-0 start-0"
         />
         <div className="support position-absolute d-flex align-items-start justify-content-center gap-3 flex-column h-100">
            <a
               href="https://facebook.com/ahmadadptr"
               className="support-icon py-1 px-3 facebook"
            >
               Facebook <FaFacebookMessenger />
            </a>
            <a
               href="https://instagram.com/ahmadadptr"
               className="support-icon py-1 px-3 instagram"
            >
               Instagram <IoLogoInstagram />
            </a>
            <a
               href="https://github.com.ahmadadptr"
               className="support-icon py-1 px-3 github"
            >
               Github <FaGithubAlt />
            </a>
            <a
               href="https://whatsapp.com"
               className="support-icon py-1 px-3 whatsapp"
            >
               Whatsapp <FaWhatsapp />
            </a>
         </div>

         <div
            id="hero-content"
            className="container px-4 mt-4 d-grid gap-3 pt-4"
         >
            <div className="d-flex justify-content-center align-items-center">
               <div id="hero-content-image" className="position-relative">
                  <img
                     src="./profile.jfif"
                     alt="profile"
                     id="hero-content-image"
                     style={{ objectFit: "cover" }}
                     className="position-absolute img-fluid rounded-circle"
                  />
                  <CircularText
                     id="CircularText"
                     text="AHMAD*BAGAS*ADIPUTRA*"
                     onHover="speedUp"
                     spinDuration={20}
                     className="custom-class position-absolute"
                  />
               </div>
            </div>
            <div className="ps-4 p-ms-1">
               <GlitchText
                  speed={1}
                  enableShadows={true}
                  enableOnHover={false}
                  className="custom-class"
               >
                  I AM FULL-STACK
               </GlitchText>
               <span className="fw-bold">
                  Hi, saya adalah seorang full-stach sekaligus designer.
                  Silahkan eksplore lebih dalam mengenai saya melalui web
                  portoflio ini!
               </span>
            </div>
         </div>
      </div>
   );
}
