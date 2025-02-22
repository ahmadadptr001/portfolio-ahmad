import { MdOutlineSettings } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";

export default function Navbar() {
   return (
      <>
         <nav className="navbar navbar-expand-md p-3">
            <div className="container d-flex justify-between">
               <a
                  href="./"
                  className="navbar-brand fw-bold fs-2 placeholder-wave"
               >
                  Ahmad<span className="text-secondary fw-bold">Adptr</span>
               </a>
               <div className="d-flex align-items-center justify-content-center">
                  <span className="text-info d-none d-sm-block">
                     Traktir Mimin Kopi <CiCoffeeCup />
                  </span>
                  <div className="dropdown">
                     <button
                        className="btn fs-3"
                        data-bs-target="#dropdown-menu-navbar"
                        data-bs-toggle="dropdown"
                     >
                        <MdOutlineSettings />
                     </button>
                     <ul
                        id="dropdown-menu-navbar"
                        className="dropdown-menu"
                        tabIndex={-1}
                     >
                        <li>
                           <a href="./" className="dropdown-item disabled">
                              Pilih Tema:
                           </a>
                        </li>
                        <li>
                           <a href="./" className="dropdown-item actiev">
                              Otomatis
                           </a>
                        </li>
                        <li>
                           <a href="./" className="dropdown-item">
                              Gelap
                           </a>
                        </li>
                        <li>
                           <a href="./" className="dropdown-item">
                              Terang
                           </a>
                        </li>
                     </ul>
                  </div>
                  <button
                     className="btn fs-4 p-0 d-none d-md-block"
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
