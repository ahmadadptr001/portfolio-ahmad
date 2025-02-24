import { CiCoffeeCup } from "react-icons/ci";
import { TbMenuDeep } from "react-icons/tb";

export default function Navbar() {
   return (
      <>
         <nav className="navbar navbar-expand-md p-3">
            <div className="container">
               <a
                  href="./"
                  className="navbar-brand fw-bold fs-2 placeholder-wave me-auto"
               >
                  Ahmad<span className="text-secondary fw-bold">Adptr</span>
               </a>
               <div className="d-flex align-items-center justify-content-center fw-bold">
                  <div>
                     <span className="text-info">
                        <CiCoffeeCup />
                     </span>{" "}
                     Traktir Mimin Kopi
                  </div>
                  <button
                     className="btn py-0 d-none d-md-block ms-2 text-light"
                     data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvas-navbar"
                  >
                     <TbMenuDeep className="fs-4" />
                  </button>
               </div>
            </div>
         </nav>

         <div className="offcanvas" id="offcanvas-navbar">
            <div className="offcanvas-body"></div>
         </div>
      </>
   );
}
