import React, { useState } from 'react';
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import jaune from "../images/jaune.png";
import noir from "../images/noir.png";
import rouge from "../images/rouge.png";
import orange from "../images/orange.png";
import vert from "../images/vert.png";
import bleu from "../images/bleu.png";

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


export default function StyledCard({ image, name, description, couleurs, url, demo,  }) {
  const [hoveredColors, setHoveredColors] = useState({});
  return (
<StyledCardComponent>
      <Card>
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
                // className="mx-auto w-50"
              />
              {/* Afficher le texte si la couleur est survolée */}
              {hoveredColors[couleur] && (
                <div style={{}}>
                  {couleur}
                </div>
              )}
            </div>
          ))}
        </div>
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {demo !== "" && demo !== null ? (
            <Card.Link href={demo}>
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"Voir sur GitHub     "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}
