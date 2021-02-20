import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import ProceduresGrid from './ProceduresGrid';

const DATA = {
  title: 'Services',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed assumenda blanditiis doloribus?',
};

const ProceduresSection = () => {
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-center tracked-mega uppercase mb-4 text-primary">
          {DATA.title}
        </h2>
        <p className="text-center lead text-muted">{DATA.description}</p>

        <ProceduresGrid />
        <div>
          <div className="text-center pt-6">
            <Link
              className="btn btn-primary tracked py-2 btn-round px-7 shadow"
              to="/products"
            >
              View all procedures
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProceduresSection;
