import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

interface interfaceData {
    name: string;
    surname: string;
    position: string;
    email: string;
    phone: string;
    links: Array<{[key: string]: string}>;
    experience?: Array<{ description: string; year: string }>;
    education?: Array<{ description: string; year: string }>;
}
const personalData: interfaceData  = {
    name: "Piotr",
    surname: "Rosiak",
    position: "Frontend developer",
    email: "roosiu@gmail.com",
    phone: "+48 723 920 567",
    links: [{linkedin: "https://linkedin.com/in/piotr-rosiak-roosiu/"}, {website: "https://piotrrosiak.pl/"}],
    experience: [{description: "AGENCJA ARTYSTYCZNO-REKLAMOWA DEJAVU-ART. - GRAFIK KOMPUTEROWY / WEBDESIGNER", year: "2016"}]
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <section>
        <div className="left-sidebar">
            <div className="photo">
                <img alt={"photo"} src={"src/assets/cv_photo.png"} className={"cv_photo"}/>
            </div>
            <div className={'name-surname'}>
                { personalData.name } { personalData.surname}
            </div>
            <div className={'position'}>
                { personalData.position }
            </div>
            <div className="personal-data-link">
               E-mail:
                <p>
                    <a href={`mailto:${personalData.email}`}>
                        {personalData.email}
                    </a>
                </p>
            </div>
            <div className="personal-data-link">
                Phone:
                <p>
                    <a href={`tel:${personalData.phone}`}>
                        {personalData.phone}
                    </a>
                </p>
            </div>
            <div className="personal-data-link">
                LinkedIn:
                <p>
                    <a href={personalData.links[0].linkedin}>
                        {personalData.links[0].linkedin}
                    </a>
                </p>
            </div>
            <div className="personal-data-link">
                Website:
                <p>
                    <a href={personalData.links[1].website}>
                        {personalData.links[1].website}
                    </a>
                </p>
            </div>
        </div>
          <div className="right-sidebar">
              <div className="experience">
                  <h3>Experience</h3>
                  { personalData.experience && personalData.experience.map((item, index) => (
                      <div key={index}>
                          <p>{item.description}</p>
                          <p>{item.year}</p>
                      </div>
                  )) }
              </div>
          </div>
      </section>
    </>
  </React.StrictMode>
);
