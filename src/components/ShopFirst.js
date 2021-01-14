import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ShopFirst = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section data-aos="fade-right">
            <div className="second-pad">
                <div className="hero-info-2">
                    <div className="above-heading">Cannabis Strains</div>
                    <h2 className="h2-heading">Searching for reliable award-winning cannabis seeds?</h2>
                </div>
            </div>

        </section>
    )
}


export default ShopFirst