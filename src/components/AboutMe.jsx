import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
import img from "../images/cv.jpg";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
  .cv {
    height: 70rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>À propos de moi</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container className="">
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
                {<img src={img} alt="about me" className="cv" />}
              </Container>
            </Col>
            </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
