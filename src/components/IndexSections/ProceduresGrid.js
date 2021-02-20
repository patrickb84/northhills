import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import { Row, Col } from 'react-bootstrap';

import img1 from '../../img/icons/cosmetic.png';
import img2 from '../../img/icons/family.png';
import img3 from '../../img/icons/invisalign.png';
import img4 from '../../img/icons/laser.png';
import img5 from '../../img/icons/implant.png';
import img6 from '../../img/icons/crowns.png';

const DATA = [
  {
    title: 'Cosmetic Dentistry',
    desc: 'You deserve a beautiful smile.',
    icon: img1,
  },
  {
    title: 'Family Dentistry',
    desc: 'Family, kids to adults.',
    icon: img2,
  },
  {
    title: 'Invisalign®',
    desc: 'Clear, simple alternative to braces for all ages.',
    icon: img3,
  },
  {
    title: 'Laser Dentistry',
    desc: 'Fast, precise & anesthesia free.',
    icon: img4,
  },
  {
    title: 'Dental Implants',
    desc: 'Replacement teeth that last',
    icon: img5,
  },
  {
    title: 'Same-Day Crowns',
    desc: 'Completed in one easy appointment.',
    icon: img6,
  },
];

const Info = ({ item }) => {
  return (
    <div className="h-100 pb-5">
      <div className="w-100 d-flex flex-column justify-content-around h-100 border px-5 py-5 hover-shadow rounded">
        <div className="mx-auto mb-3">
          <img
            src={item.icon}
            alt={item.title}
            style={{ width: 100, opacity: 0.8 }}
          />
        </div>
        <h3 className="h5 text-center text-primary">{item.title}</h3>
        <p className="text-center fw-300 py-1">{item.desc}</p>
        <small className="text-center">
          <a href="#">LEARN MORE →</a>
        </small>
      </div>
    </div>
  );
};

const ProceduresGrid = () => {
  return (
    <Row className="pt-6">
      {DATA.map(item => (
        <Col key={item.title} sm="4">
          <Info item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProceduresGrid;
