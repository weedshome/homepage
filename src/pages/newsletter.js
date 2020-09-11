import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <h1>Productos</h1>

    <div className="filters">
      <label key="product">
        <input
          className='filters-available-size'
          type="checkbox"
          value="category"
        />
        <span className="checkmark">
          Vaporizer
        </span>
      </label>
    </div>

  </Layout>
}

export default NewsLetter
