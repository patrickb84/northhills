import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import ProceduresGrid from '../IndexSections/Procedures';

const ProceduresSection = ({ mainpitch, heading, description, intro }) => {
  console.log(intro);
  return (
    <section className="py-8">
      <Container style={{ maxWidth: 1000 }}>
        <h1 className="">{mainpitch.title}</h1>
        <h3 className="">{mainpitch.description}</h3>
        <h3 className="">{heading}</h3>
        <p>{description}</p>

        <ProceduresGrid gridItems={intro.blurbs} />
        <div>
          <div className="text-center pt-6">
            <Link className="btn btn-primary px-6" to="/products">
              View all procedures
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProceduresSection;
