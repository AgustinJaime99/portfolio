import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="me" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="me-title text-center">
              Perdon, pero el sitio que quiere buscar no existe{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="me-cta justify-content-center">
              <Link className="cta-btn cta-btn--me" to="/">
                Volver
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
