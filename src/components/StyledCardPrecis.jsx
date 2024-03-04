import React, { useState } from 'react';
import styled from "styled-components";
// Media
import jaune from "../images/jaune.png";
import noir from "../images/noir.png";
import rouge from "../images/rouge.png";
import orange from "../images/orange.png";
import vert from "../images/vert.png";
import bleu from "../images/bleu.png";

import proxy from "../images/proxy.png";
import raspi from "../images/raspi.png";
import infra from "../images/infra.png";
import maths from "../images/maths.png";
import cti from "../images/cti.png";
import t21 from "../images/t21.png";



// Components

import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;

const images = {
  Administrer: jaune,
  Collaborer: noir,
  Réaliser: rouge,
  Optimiser: orange,
  Gérer: vert,
  Conduire: bleu
};

const illustratif = {
  proxy: proxy,
  raspi: raspi,
  infra: infra,
  maths: maths,
  cti: cti,
  t21: t21
};



export default function StyledCard({ image, name, description, couleurs, url, demo,  }) {
  const [hoveredColors, setHoveredColors] = useState({});
  return (
    <StyledCardComponent>
      <Card style={{height: "100%"}}>
        <Card.Body className="overflow-auto text-center">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
                {couleurs && couleurs.map((couleur) => (
                  <div 
                    key={couleur} 
                    onMouseEnter={() => setHoveredColors(prevState => ({ ...prevState, [couleur]: true }))}
                    onMouseLeave={() => setHoveredColors(prevState => ({ ...prevState, [couleur]: false }))}
                  >
                    <Card.Img
                      variant="top"
                      src={images[couleur]} 
                      alt={name}
                    />
                    {/* Afficher le texte si la couleur est survolée */}
                    {hoveredColors[couleur] && (
                      <div style={{fontSize: "80%", textAlign: "center"}}>
                        <p>{couleur}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              
              <p>le corps</p>
            </div>
            <div>
              <img src={illustratif[image]} alt="about me" style={{ margin: "5%", maxWidth: "80%", height: "auto" }} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </StyledCardComponent>
  );
}
