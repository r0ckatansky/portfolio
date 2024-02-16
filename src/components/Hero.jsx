import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import Logo from "../images/logo.png";
import { Light, Dark } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--primary), var(--bs-light))"
        : "linear-gradient(135deg, var(--primary), var(--bs-dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

    .hero-img {
      width: 200px !important;
      position: relative;
      border-radius: 100%;
    }
    .hero-img.active {
      position: fixed;
      animation: spin 1s linear infinite;
    }


  @keyframes spin {
    0% {
      top: 0;
      left: 0;
      transform: rotate(0deg);
      filter: hue-rotate(0deg) contrast(1);
    }
    33% {
      top: 100%;
      left: 100%;
      transform: rotate(90deg);
      filter: hue-rotate(90deg) contrast(25);
    }
    66% {
      top: 100%;
      left: 0;
      transform: rotate(180deg);
      filter: hue-rotate(180deg) contrast(1);
    }
    100% {
      top: 0;
      left: 100%;
      transform: translate(-0%, -0%);
      transform: rotate(360deg);
      filter: hue-rotate(360deg) contrast(1);
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) center center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`;

export default function Hero() {
  const { name } = useSelector(selectData);

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="mb-3 display-3 title">{name}</h1>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <Col className="d-none d-md-block"
              onClick={(element) => {
              if (element.target.classList.contains("active")) {
                element.target.classList.remove("active");
              } else {
                element.target.classList.add("active");
              }
            }}      
          >
            <img
              src={Logo}
              alt="React Logo"
              className="w-75 mx-auto hero-img"
            />
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
