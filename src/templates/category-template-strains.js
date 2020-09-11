import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplateStrains = props => {
    return <h2>CategoryTemplate</h2>
}

export const query = graphql`

query GetCategories($category: String) {
    categories: allContentfulStrains(filter: {category: {eq: $category}}) {
      nodes {
        category
        title
        rating
        price
        info {
          info
        }
      }
    }
  }
`

export default CategoryTemplateStrains
