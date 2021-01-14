import React, { useEffect } from 'react';
import './Business.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BusinessSecond from './BusinessSecond';


const BusinessFirst = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <section data-aos="fade-right">

      <BusinessSecond />

    </section>
  )
}


export default BusinessFirst