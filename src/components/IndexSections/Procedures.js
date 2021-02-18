import PropTypes from 'prop-types';
import React from 'react';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { Row, Col } from 'react-bootstrap';

const ProceduresGrid = ({ gridItems }) => {
  console.log(gridItems);
  return (
    <Row>
      {gridItems.map(item => (
        <Col key={item.text} sm="6">
          <section className="w-100 d-flex flex-column justify-content-center">
            <div
              className="mx-auto"
              style={{
                width: '240px',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <p className="text-center">{item.text}</p>
          </section>
        </Col>
      ))}
    </Row>
  );
};

ProceduresGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default ProceduresGrid;
