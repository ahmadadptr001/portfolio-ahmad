import InfiniteScroll from "../components-animasi/InfiniteScroll";
import FuzzyText from "../components-animasi/FuzzyText ";

export default function Pendidikan() {
   return (
      <>
         <div className="my-5 py-5 d-flex align-items-center justify-content-center">
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
               <div className="card border p-2 px-3 rounded">
                  <h3>
                     <strong>Kuliah</strong>
                  </h3>
                  <img
                     className="rounded-2 img-fluid"
                     src="./kampus.jfif"
                     alt="kampus"
                     style={{ aspectRatio: "16/9", objectFit: "cover" }}
                  />
                  <span className="mt-2">
                     Jurusan teknik informatika di Universitas Nahdlatul Ulama
                     Sulawesi Tenggara (2013 - sekarang).
                  </span>
               </div>
               <div className="card border p-2 px-3 rounded">
                  <h3>
                     <strong>Sekolah Dasar (SD)</strong>
                  </h3>
                  Pernah bersekolah di SDN 01 LAEYA pada tahun 2012 - 2017
               </div>
               <div className="card border p-2 px-3 rounded">
                  <h3>
                     <strong>Sekolah Menengah Pertama (SMP)</strong>
                  </h3>
                  Pernah bersekolah di SMPN 02 KONSEL Periode 2017 - 2020
               </div>
               <div className="card border p-2 px-3 rounded">
                  <h3>
                     <strong>Sekolah Menengah Akhir (SMA)</strong>
                  </h3>
                  Pernah bersekolah di SMAN 17 KONSEL Periode 2020 - 2023
               </div>
            </div>

            <div className="">
               <div style={{ height: "500px", position: "relative" }}>
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
                     autoplaySpeed={0.1}
                     autoplayDirection="down"
                     pauseOnHover={true}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
