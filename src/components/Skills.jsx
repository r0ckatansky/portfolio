
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

import { Element, scroller } from 'react-scroll';
import "./anim.css"

import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";

import c11 from "../images/c11.png";
import c12 from "../images/c12.png";
import c13 from "../images/c13.png";
import c14 from "../images/c14.png";
import c15 from "../images/c15.png";
import c16 from "../images/c16.png";

import c21 from "../images/c21.png";
import c22 from "../images/c22.png";
import c23 from "../images/c23.png";
import c24 from "../images/c24.png";
import c25 from "../images/c25.png";
import c26 from "../images/c26.png";

import c31 from "../images/c31.png";
import c33 from "../images/c33.png";
import c36 from "../images/c36.png";



export default function Skills() {


    const handleClick = (names) => {
        names.forEach(id => {
            const target = document.getElementById(id);
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
          });
        // Défilement animé jusqu'à l'élément cible
        scroller.scrollTo('Projets_perso', {
            duration: 400,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    

    }
    

  return (
    
    <Element name={"Skills"} id="skills">

      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Compétences</h2>
            <div className="underline"></div>
          </Title>
            <p>Cliquer sur le dernier niveau de chaque compétence renvoie vers un projet illustratif</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
            <div>
                <img src={c1} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c2} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c3} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c4} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c5} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c6} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>

            <div>
                <img src={c11} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c12} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c13} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c14} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c15} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c16} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>

            <div>
                <img src={c21} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
             {/* Optimiser */}
            <div 
                className="link-icons" 
                style={{ cursor: "pointer" }} 
                onClick={() => handleClick(["Modélisation mathématique", "Développement d'un proxy TCP", "Alternance CTI toulouse"])}     
                onMouseEnter={(e) => { e.currentTarget.style ='transform: scale(1.1);' }} 
                onMouseLeave={(e) => { e.currentTarget.style = 'transform: scale(1)'; }}
                >    
                <img src={c22} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c23} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
             {/* Gérer */}
            <div 
                className="link-icons" 
                style={{ cursor: "pointer" }} 
                onClick={() => handleClick(["Projet Trisomie 21", "Alternance CTI toulouse"])}     
                onMouseEnter={(e) => { e.currentTarget.style ='transform: scale(1.1);' }} 
                onMouseLeave={(e) => { e.currentTarget.style = 'transform: scale(1)'; }}
                >    
                <img src={c24} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
             {/* Conduire */}
            <div 
                className="link-icons" 
                style={{ cursor: "pointer" }} 
                onClick={() => handleClick(["Projet Trisomie 21", "Alternance CTI toulouse", "Projet Trisomie 21"])}     
                onMouseEnter={(e) => { e.currentTarget.style ='transform: scale(1.1);' }} 
                onMouseLeave={(e) => { e.currentTarget.style = 'transform: scale(1)'; }}
                >    
                <img src={c25} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c26} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            {/* Réaliser */}
            <div 
                className="link-icons" 
                style={{ cursor: "pointer" }} 
                onClick={() => handleClick(["Évolution d'une infrastructure", "Alternance CTI toulouse", "Emulation d'un routeur Wi-Fi sur un Raspi"])}     
                onMouseEnter={(e) => { e.currentTarget.style ='transform: scale(1.1);' }} 
                onMouseLeave={(e) => { e.currentTarget.style = 'transform: scale(1)'; }}
                >                
                <img  src={c31} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
           
            <div>
            </div>
             {/* Administrer */}
            <div 
                className="link-icons" 
                style={{ cursor: "pointer" }} 
                onClick={() => handleClick(["Évolution d'une infrastructure", "Alternance CTI toulouse", "Projet Trisomie 21"])}     
                onMouseEnter={(e) => { e.currentTarget.style ='transform: scale(1.1);' }} 
                onMouseLeave={(e) => { e.currentTarget.style = 'transform: scale(1)'; }}
                >
                <img src={c33} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
            </div>
            <div>
            </div>
            {/* Collaborer */}
            <div 
                className="link-icons" 
                style={{ cursor: "pointer" }} 
                onClick={() => handleClick(["Évolution d'une infrastructure", "Alternance CTI toulouse", "Modélisation mathématique", "Projet Trisomie 21", "Emulation d'un routeur Wi-Fi sur un Raspi", "Développement d'un proxy TCP"])}
                onMouseEnter={(e) => { e.currentTarget.style ='transform: scale(1.1);' }} 
                onMouseLeave={(e) => { e.currentTarget.style = 'transform: scale(1)'; }}
                >
                <img src={c36} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>

            

          </div>
            
          </Container>
      </section>
    </Element>
  );
}


// {skillData.map((skills) => {
//   return (
//     <Col xs={4} key={skills.id} className="my-md-5">
//       <figure>
//         {skills.skill}
//         <figcaption>{skills.name}</figcaption>
//       </figure>
//     </Col>
//   );
// })}