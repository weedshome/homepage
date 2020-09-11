import React, { useEffect } from 'react'
import Banner from '../Banner'
import Product from './Product'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductBanner from '../ProductBanner';

const Products = ({ products, title }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <section className="posts" data-aos="flip-down">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article className="product-grid">
          {products.map(product => {
            return <Product key={product.id} {...product} />
          })}
        </article>
        <article>
          <ProductBanner />
        </article>
      </div>
    </section>
  )
}

export default Products
