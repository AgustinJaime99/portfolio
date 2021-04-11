import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, resume, cv } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Acerca de mi" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                Desarrollador Fullstack JavaScript, apasionado por el Front-end. Realicé un bootcamp de mas de 800 hs. de estudio intensivo que me preparó para desempeñarme como desarrolador Fullstack, dentro del curso aprendi desde lo basico hasta desarrollar una aplicacion en equipo.
                </p>
                <p className="about-wrapper__info-text">
                    Me inicie en el mundo del desarrollo hace relativamente poco, quede fascinado con lo que podia crear solo escribiendo. Hoy busco oportunidades que ayuden a mi desarrollo personal. Soy una persona proactiva, siempre dispuesta, respetuosa y por sobretodo con ganas de trabajar en equipo.
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      LinkedIn
                    </a>
                  </span>
                )}
                {cv && (<span className="d-flex mt-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href= {cv}
                >
                  Descargar CV
                </a>
                </span>)}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
