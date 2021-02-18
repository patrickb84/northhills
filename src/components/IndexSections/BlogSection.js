import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import BlogRoll from '../BlogRoll';

const BlogSection = () => {
  return (
    <section className="bg-danger py-8">
      <Container>
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              Read more
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
