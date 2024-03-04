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
import { scroller } from 'react-scroll';

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


  
  const handleClick = (name) => {
    const target = document.getElementById(name);
    if (target) {
      // Ajoute la classe "highlight" à l'élément cible
      target.classList.add('highlight');
      // Supprime l'animation actuelle pour la réinitialiser
      target.style.animation = 'none';
      // Attendre un certain temps avant de faire l'animation
      setTimeout(() => {
          target.style.animation = 'scaleAnimation 1s forwards';
      }, 500);
    }
      
    // Défilement animé jusqu'à l'élément cible
    scroller.scrollTo(name, {
        duration: 400,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight / 4 // Décalage de la moitié de la hauteur de la fenêtre
    });


}


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
          <Card.Link onClick={() => {handleClick(name+"precis")}}>
            {"Voir plus d'informations     "}
            
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}
