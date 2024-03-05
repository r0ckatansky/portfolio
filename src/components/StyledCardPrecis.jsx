import React from 'react';
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
import { Card } from "react-bootstrap";

// les textes : 

const LesTextes =
{
  "Évolution d'une infrastructure": 
  {"Réaliser": "Déploiement dans ce projet de différents services (DNS, DHCP, Web, supervision etc.) sur des machines virtuelles et physiques.",
   "Administrer": "Tests en conditions réelles de l'infrastructure, sur des vrais serveurs, switchs et machines. Utilisation et maintenance des services.",
   "Collaborer": "Groupe final résultant de la fusion de deux groupes. Répartition des tâches, communication avec les autres membres."},

  "Modélisation mathématique": 
  {"Optimiser": "Réalisation d'algorithmes performants de traitement de l'image",
   "Collaborer": "Projet réalisé en groupe de deux."},

  "Projet Trisomie 21": 
  {"Administrer": "Mise en place d'un serveur de base de données, d'un serveur web, sur une machine distante.",
   "Gérer": "Utilisation d'une base de donné étendue pour gérer l'application entière",
   "Conduire": "Entretiens avec la cliente pour comprendre ses besoins, et lui présenter les avancées du projet et être sur de la bonne compréhension de ses besoins.",
   "Collaborer": "Travail en équipe de quatre personnes. Répartition des tâches, communication avec les autres membres."},

  "Alternance CTI toulouse": 
  {"Réaliser": "Développement d'une application pour faire du pilotage de projets à grande échelle, en utilisant les technologies web actuelles. Déploiement sur les serveurs de l'entreprise avec Docker.",
    "Optimiser": "Le code fourni doit prendre une quantité raisonable de ressources et donc être revu pour être optimisé.",
    "Administrer": "Une fois en ligne, je vais devoir administrer le service et m'assurer qu'il soit toujours en ligne. Le code doit être maintenu.",
    "Gérer": "Une base de donnée est utilisée dans le projet pour stocker toutes les informations nécéssaires.",
    "Conduire": "Entrevues hebdomadaires avec le client (ma responsable) pour lui présenter les avancées du projet et être sur de la bonne compréhension de ses besoins.",
    "Collaborer": "équipe de une seule personne, mais utilisation des méthodes agiles pour présenter des avancé lors des entrevues avec le client et pour une meilleur organisation."},
 
  "Emulation d'un routeur Wi-Fi sur un Raspi": 
  {"Réaliser": "Développement d'un routeur Wi-Fi sur un Raspberry pi, avec une interface web pour le configurer.",
   "Collaborer": "Projet réalisé en groupe de deux."},
 
  "Développement d'un proxy TCP": 
  {"Optimiser": "Développement d'un proxy TCP transparent en C, compréhension du fonctionnement des sockets, et des protocoles TCP/IP.",
   "Collaborer": "Projet réalisé en groupe de deux."},
}






// Components



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
  return (
    <StyledCardComponent>
      <Card className="no-hover-transform" style={{height: "100%"}}>
        <Card.Body className="overflow-auto text-center">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", maxHeight: "100px" }}>
                {couleurs && couleurs.map((couleur) => (
                  <div key={couleur} >
                    <Card.Img
                      variant="top"
                      src={images[couleur]} 
                      alt={name}
                    />
                    {/* Afficher le texte si la couleur est survolée */}
                   
                      <div style={{fontSize: "80%", textAlign: "center"}}>
                        <p>{couleur}</p>
                      </div>
                    
                  </div>
                ))}
              </div>
              <Card.Title style={{margin: "5%"}}>{name}</Card.Title>
              {/* <Card.Text>{description}</Card.Text> */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
              
                {
                couleurs.map((couleur) => (
                  <>
                  <p >{couleur}</p>
                  <p style={{textAlign: "left"}}>{LesTextes[name][couleur]}</p>
                  </>
                ))
                }
              </div>

              
              
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
