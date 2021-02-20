import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';

import logo from '../../img/logo-hero.svg';

const HeaderHero = ({ image, title, subheading, headdescription }) => {
  return (
    <header
      className="index__header pt-6 px-4"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <Row className="h-100">
        <Col lg="7" className="order-2 order-lg-1">
          <div className="pt-6 h-100 pl-lg-3">
            <h1 className="display-1 fw-900 font-special d-none d-lg-block">
              {title}
            </h1>
            <h2 className="display-4 mb-6 font-special text-center text-lg-left">
              {subheading}
            </h2>
            <h3 className="fw-300 text-white text-center text-lg-left">
              {headdescription}
            </h3>
            <div className="pt-5">
              <div className="d-block mb-2">
                <Button variant="primary" className="py-2 fw-400 btn-round">
                  Make an Appointment
                </Button>
              </div>
              <Button variant="dark" className="py-2 btn-round">
                Contact Us
              </Button>
            </div>
          </div>
        </Col>
        <Col className="order-lg-2 order-1">
          <div className="d-flex align-items-end py-lg-6 h-100 w-100">
            <img
              src={logo}
              alt="North Hills Dental"
              style={{ width: 600, maxWidth: '100%' }}
              className="drop-shadow-1 ml-auto"
            />
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderHero;
