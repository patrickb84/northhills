import React from 'react';
import { Button } from 'react-bootstrap';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ProceduresSection from '../components/IndexSections/ProceduresSection';

import logo from '../img/logo-hero.svg';
import BlogSection from '../components/IndexSections/BlogSection';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  headdescription,
  mainpitch,
  description,
  intro,
  heading,
}) => (
  <section>
    <header
      className="index__header pt-6 px-4"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="d-flex justify-content-between h-100 px-4">
        <div className="pt-6 h-100">
          <h1 className="display-1 fw-900">{title}</h1>
          <h2 className="display-4 mb-6">{subheading}</h2>
          <p className="fw-300" style={{ fontSize: 32 }}>
            {headdescription}
          </p>
          <div className="pt-5">
            <div className="d-block mb-2">
              <Button variant="primary" className="py-2 fw-400">
                Make an Appointment
              </Button>
            </div>
            <Button variant="outline-primary" className="py-2">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="d-flex align-items-end py-6 h-100">
          <img
            src={logo}
            alt="North Hills Dental"
            style={{ width: 600 }}
            className="drop-shadow-1"
          />
        </div>
      </div>
    </header>
    <ProceduresSection
      {...{
        mainpitch,
        description,
        intro,
        heading,
      }}
    />
    <BlogSection />
  </section>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        headdescription={frontmatter.headdescription}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        headdescription
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
