import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from 'styled-components'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ContactForm from "../components/ContactForm"

const Contact = ({
    data: {
        page: {
            title,
            body,
        },
    },
}) => {
    return (
        <Layout>
            <Wrapper>
                <div className="search-text" style={{ textAlign: "left" }}>
                </div>
                <section className="posts">
                    <article className="height-page">
                        <div className="post-info">
                            <h2 className="page-title">{title}</h2>
                            <div className="underline"></div>
                        </div>
                        {documentToReactComponents(body.json)}
                    </article>
                    <ContactForm />
                </section>
            </Wrapper>
        </Layout >
    )
}

export const query = graphql`
query GetSinglePageContact {
    page: contentfulPage(title: {eq: "Contact"}) {
      title
      body {
        json
      }
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding-top: 15px;
  .page-title {
      font-weight: 700 !important;
      font-size: 35px !important;
  }
  @media screen and (max-width: 767px) {
    padding-top: 4rem;
    .height-page {
        width: auto !important;
        padding-top: 0px !important;
      }
  }
  .height-page {
    max-width: 1050px;
    padding: 25px;
    padding-top: 3rem;
    width: 700px;
    margin: 0 auto;
  }
  .post-info {
    text-align: center;
    padding-bottom: 2rem;
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

  button {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #102a42;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-top: 1rem;
}

  input#fromEmail {
    border: solid 2px #102a42;
    padding: 10px;
}
input#subject {
    border: solid 2px #102a42;
    padding: 10px;
}
input#website {
    border: solid 2px #102a42;
    padding: 10px;
}
textarea#body {
    border: solid 2px #102a42;
}
form {
    margin: 0 auto;
}
label {
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    border-radius: var(--radius);
    padding-top: 2rem;
}
`

export default Contact



