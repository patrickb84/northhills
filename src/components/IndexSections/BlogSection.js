import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import BlogRoll from '../BlogRoll';

const BlogSection = () => {
  return (
    <section className="bg-light py-8">
      <Container>
        <div>
          <h2 className="tracked-mega text-primary text-center mb-6">LATEST STORIES</h2>
          <BlogRoll />
          <div className="text-center">
            <Link className="btn btn-primary btn-round py-2 px-6 tracked">Read more</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
