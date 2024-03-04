import React from "react";

import { Element } from "react-scroll";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title, } from "./globalStyledComponents";
import StyledCard from "./StyledCardAcademique";
import StyledCardPrecis from "./StyledCardPrecis";
import { useRef } from 'react';



export default function Projects() {
  const mainProjects = [
    { id: 1, name: "Évolution d'une infrastructure", image: "infra", description: "C'est la SAE de Mr. Kandi",  liste: ["Réaliser", "Administrer", "Collaborer"]}, // SAE but 3
    { id: 2, name: "Modélisation mathématique", image: "maths", description: "Parler du projet de maths", liste: ["Optimiser", "Collaborer"]}, // projet de maths
    { id: 3, name: "Projet Trisomie 21", image: "t21", description: "La sae de l'année dernière", liste: ["Administrer", "Gérer", "Conduire", "Collaborer"]}, // SAE but 2
    { id: 4, name: "Alternance CTI toulouse", image: "cti", description: "Alternance CTI toulouse", liste: ["Réaliser", "Optimiser", "Administrer", "Gérer", "Conduire", "Collaborer"]}, // alternance
    { id: 5, name: "Emulation d'un routeur Wi-Fi sur un Raspi", image: "raspi", description: "Emulation d'un routeur Wi-Fi sur un Raspi", liste: ["Réaliser", "Collaborer"]}, // projet raspi
    { id: 6, name: "Développement d'un proxy TCP", description: "Développement d'un proxy transparent TCP", image: "proxy", liste: ["Optimiser", "Collaborer"]}, // proxy tcp
  ];

  const sectionRef = useRef(null);


  return (
    <div  ref={sectionRef}>
      <Element name={"Projets_perso"} id="Projets_perso">
        <section className="section">
          <Container>
            <Container className="d-flex">
              <Title>
                <h2>Projets (académiques)</h2>
                <div className="underline"></div>
              </Title>
            </Container>
            {mainProjects.length !== 0 && (
              <>
                <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                  {mainProjects.map(function ({
                    id,
                    image,
                    name,
                    description,
                    liste,
                    homepage,
                  }) {
                    return (
                      <Col key={id}>
                        <Element id={name}>
                        <StyledCard
                          image={image}
                          name={name}
                          description={description}
                          url={null}
                          demo={null}
                          couleurs={liste}
                        />
                        </Element>
                      </Col>
                    );
                  })}
                </Row>
              </>
            )}
          </Container>
        </section>
      </Element>



      <Element name={"ListeProjet"} id="ListeProjet">
        <section className="section">
          <Container>
            <Container className="d-flex">
              <Title>
                <h2>Présentation des projets</h2>
                <div className="underline"></div>
              </Title>
            </Container>
            {mainProjects.length !== 0 && (
              <>
                  {mainProjects.map(function ({
                    id,
                    image,
                    name,
                    description,
                    liste,
                    homepage,
                  }) {
                    return (
                        <Element id={name+"precis"} style={{margin: "5%"}}>
                        <StyledCardPrecis
                          image={image}
                          name={name}
                          description={description}
                          url={null}
                          demo={null}
                          couleurs={liste}  
                        />
                        </Element>
                    );
                  })}
              </>
            )}
          </Container>
        </section>
      </Element>
    </div>  
  );
}
