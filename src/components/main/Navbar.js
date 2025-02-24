import { CiCoffeeCup } from "react-icons/ci";

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
               <div className="d-flex align-items-center justify-content-center">
                  <span className="text-info">
                     Traktir Mimin Kopi <CiCoffeeCup className="fs-3" />
                  </span>
                  <button
                     className="btn fs-5 py-0 d-none d-md-block"
                     data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvas-navbar"
                  >
                     <span className="navbar-toggler-icon"></span>
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
