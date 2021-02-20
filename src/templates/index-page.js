import React from 'react';
import { Button } from 'react-bootstrap';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ProceduresSection from '../components/IndexSections/ProceduresSection';

import BlogSection from '../components/IndexSections/BlogSection';
import HeaderHero from '../components/IndexSections/HeaderHero';

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
    <HeaderHero {...{ image, title, subheading, headdescription }} />
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
