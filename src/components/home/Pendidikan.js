import InfiniteScroll from "../components-animasi/InfiniteScroll";
import FuzzyText from "../components-animasi/FuzzyText ";

export default function Pendidikan() {
   return (
      <>
         <div
            id="pendidikan"
            className="my-5 py-5 d-flex align-items-center justify-content-center"
         >
            <FuzzyText
               baseIntensity={0.2}
               hoverIntensity={0.2}
               enableHover={0.5}
            >
               WELCOME
            </FuzzyText>
         </div>
         <div
            className="container position-relative mt-5 py-4 pt-5"
            style={{ borderTop: "3px solid white" }}
         >
            <div
               className="tag-title position-absolute bg-dark fw-bold fs-2 px-3"
               style={{ left: "20px", top: "-30px" }}
            >
               Pendidikan
            </div>

            <div
               id="pendidikan-information"
               className="d-grid gap-3 bg-transparent"
            >
               <div className="accordion">
                  <div className="accordion-item">
                     <h3 className="accordion-header">
                        <button
                           className="accordion-button"
                           data-bs-toggle="collapse"
                           data-bs-target="#item-kuliah"
                           aria-expanded="true"
                        >
                           <strong>Kuliah</strong>
                        </button>
                     </h3>
                     <div
                        id="item-kuliah"
                        className="accordion-collapse collapse show"
                     >
                        <div className="accordion-body">
                           <img
                              className="rounded-2 img-fluid"
                              src="./kampus.jfif"
                              alt="kampus"
                              style={{
                                 aspectRatio: "16/9",
                                 objectFit: "cover",
                              }}
                           />
                           <div className="mt-2">
                              Jurusan teknik informatika di Universitas
                              Nahdlatul Ulama Sulawesi Tenggara (2013 -
                              sekarang).
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="accordion">
                  <div className="accordion-item">
                     <h3 className="accordion-header">
                        <button
                           className="accordion-button"
                           data-bs-toggle="collapse"
                           data-bs-target="#item-sd"
                           aria-expanded="true"
                        >
                           <strong>Sekolah Dasar (SD)</strong>
                        </button>
                     </h3>
                     <div
                        className="accordion-collapse collapse show"
                        id="item-sd"
                     >
                        <div className="accordion-body">
                           Pernah bersekolah di SDN 01 LAEYA pada tahun 2012 -
                           2017
                        </div>
                     </div>
                  </div>
               </div>

               <div className="accordion">
                  <div className="accordion-item">
                     <h3 className="accordion-header">
                        <button
                           className="accordion-button"
                           data-bs-toggle="collapse"
                           data-bs-target="#item-smp"
                           aria-expanded="true"
                        >
                           <strong>Sekolah Menengah Pertama (SMP)</strong>
                        </button>
                     </h3>
                     <div
                        className="accordion-collapse collapse show"
                        id="item-smp"
                     >
                        <div className="accordion-body">
                           Pernah bersekolah di SMPN 02 KONSEL Periode 2017 -
                           2020
                        </div>
                     </div>
                  </div>
               </div>

               <div className="accordion">
                  <div className="accordion-item">
                     <h3 className="accordion-header">
                        <button
                           className="accordion-button"
                           data-bs-toggle="collapse"
                           data-bs-target="#item-sma"
                           aria-expanded="false"
                        >
                           <strong>Sekolah Menengah Akhir (SMA)</strong>
                        </button>
                     </h3>
                     <div className="accordion-collapse collapse" id="item-sma">
                        <div className="accordion-body">
                           Pernah bersekolah di SMAN 17 KONSEL Periode 2020 -
                           2023
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="">
               <div style={{ height: "400px", position: "relative" }}>
                  <InfiniteScroll
                     items={[
                        { content: "Nama - Ahmad Bagas Adiputra" },
                        { content: "Umur - 20 Tahun" },
                        { content: "Hobi - Scroll Fesnuk" },
                        { content: "Pekerjaan - Nganggur" },
                     ]}
                     isTilted={true}
                     tiltDirection="left"
                     autoplay={true}
                     autoplaySpeed={0.2}
                     autoplayDirection="down"
                     pauseOnHover={true}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
