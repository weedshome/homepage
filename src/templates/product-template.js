import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProductTemplate = ({ data }) => {
    const { mdx: { frontmatter: { title, category, image, date }, body } } = data
    return (<Layout>
        <Hero />
        <Wrapper>

            <article>
                <div className="product-grid">
                    <div className="post-info">
                        <span>{category}</span>
                        <h2>{title}</h2>
                        <p>{date}</p>
                        <div className="underline"></div>
                    </div>
                    <Image fluid={image.childImageSharp.fluid} />
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </div>
            </article>

            <article>
                <Banner />
            </article>

        </Wrapper>
    </Layout>
    )
}

export const query = graphql`

query GetSingleProduct($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        readTime
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }


`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1px 1px;
    column-gap: 1.5rem;
    margin-bottom: 16rem;
  }
`

export default ProductTemplate
