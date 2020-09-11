import React, { useEffect } from 'react';
import './Herofront.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const GrowingFirst = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section data-aos="fade-right">
            <div className="second-pad">
                <div className="hero-info-2">
                    <div className="above-heading">Cannabis Growing</div>
                    <h2 className="h2-heading">Searching for reliable cannabis growing gear?</h2>
                </div>
            </div>

        </section>
    )
}


export default GrowingFirst