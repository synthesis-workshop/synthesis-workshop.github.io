import React from "react";

export default () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <strong>
              Synthesis Workshop is an open access video podcast exploring the
              field of organic synthesis. Through four complementary modules -
              Total Synthesis, Named Reactions, Research Spotlights, and Culture
              of Chemistry - we investigate advances in many areas of the field
              and delve into the “human aspects” of having a career in
              chemistry.
            </strong>
          </div>

          <div className="row">
            <div className="col-lg-7 d-flex align-items-center justify-content-center">
              <img
                style={{ height: "100%" }}
                src="img/structures.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-5 pt-4 pt-lg-0">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Chemists today face an overwhelming amount of new
                    information on a daily basis. Every day in the literature,
                    there are new methodologies, reagents, catalysts, and
                    syntheses added to the repertoire of what a “well-versed
                    researcher” needs to be aware of. While these advances may
                    have the potential for far reaching impacts, students and
                    researchers in the field are under mounting pressure to
                    publish their own work and hardly have time to stay up to
                    date with all the latest literature while simultaneously
                    maintaining a healthy work-life balance. To begin to address
                    this issue of how we can improve our collective awareness of
                    important advances in an increasingly efficient manner,
                    Synthesis Workshop takes a three pronged approach:
                  </p>
                  <ol className="card-text" style={{ textAlign: "justify" }}>
                    <li>
                      Total Synthesis and Named Reaction episodes work to make
                      innovative areas of chemical space accessible to a broader
                      audience
                    </li>
                    <li>
                      Research Spotlight episodes get researchers involved in
                      presenting their own recently published work in an
                      open-access format
                    </li>
                    <li>
                      Culture of Chemistry episodes investigate the “human side”
                      of this career path, which presents other types of
                      challenges.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-7 pt-4 pt-lg-0">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Who We Are</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Dr. Matthew Horwitz obtained his B.A. in Biochemistry from
                    Columbia University in 2013 and studied computational
                    chemistry under the supervision of Dr. Charles Doubleday. He
                    then moved to the University of North Carolina at Chapel
                    Hill for his doctoral work in organocatalysis and total
                    synthesis under Prof. Jeffrey Johnson. During this period,
                    he worked in the laboratories of Prof. Takashi Ooi at Nagoya
                    University, studying asymmetric Bronsted base catalysis, and
                    Prof. Xiaoming Feng at Sichuan University, studying{" "}
                    <em>N,N</em>'-dioxide metal-ligand complexes. After
                    completing his doctoral work in 2017, he studied synthetic
                    photochemistry in the laboratory of Prof. Paolo Melchiorre
                    at the Institute of Chemical Research of Catalonia (ICIQ) as
                    a postdoctoral researcher, before moving to Oxford in 2018
                    to work in the Gouverneur group. In 2020, he was awarded a
                    Marie Skłodowska-Curie Individual Fellowship and a Junior
                    Research Fellowship at Kellogg College (University of
                    Oxford). In 2021, he became a Scientist at Janssen
                    Pharmaceutical Companies of Johnson & Johnson in Chemical
                    Process Research & Development (CPRD) in Belgium. He
                    currently serves on the Advisory Board of{" "}
                    <a href="https://www.thieme-connect.com/products/ejournals/journal/10.1055/s-00000084">
                      Synthesis
                    </a>{" "}
                    and the Early Career Advisory Board of{" "}
                    <a href="https://www.sciencedirect.com/journal/tetrahedron">
                      Tetrahedron
                    </a>{" "}
                    and{" "}
                    <a href="https://www.sciencedirect.com/journal/tetrahedron-letters">
                      Tetrahedron Letters
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <img src="img/MH_Headshot.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
