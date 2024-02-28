import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

import { Link } from "react-scroll";
import { Icon } from "@iconify/react";




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

import c00 from "../images/c00.png";


export default function Skills() {

    const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">

      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Compétences</h2>
            <p>Cliquer sur le dernier niveau de chaque compétence renvoie vers un projet illustratif</p>
            <div className="underline"></div>
          </Title>
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
            <div>
                <img src={c22} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c23} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c24} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c25} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c26} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>

            <Link to={"Projects"} className="link-icons">
                <img  src={c31} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </Link>
           
            <div>
                <img src={c00} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c33} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c00} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
                <img src={c00} alt="about me" style={{ margin: "5%", maxWidth: "90%", height: "auto" }} />
            </div>
            <div>
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