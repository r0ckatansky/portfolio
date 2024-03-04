import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

import { useRef } from 'react';



export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

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
                    html_url,
                    homepage,
                  }) {
                    return (
                      <Col key={id}>
                        <StyledCard
                          image={image}
                          name={name}
                          description={description}
                          url={html_url}
                          demo={homepage}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </>
            )}
          </Container>
        </section>
      </Element>
    </div>  
  );
}
