import React, { useEffect } from 'react';
import './Business.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Newsletter = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section data-aos="flip-left">


            <div class="grid-container-newsletter">
                <div class="newsletter">
                    <div class="newsletter-inside">
                        <section className="newsletter-page">
                            <div className="page-center">
                                <div className="above-heading">NEWSLETTER</div>
                                <h2 className="newsletter-title">Get all the latest stories to your inbox</h2>
                                <form className="contact-form" name="test-contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/success">
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="testing-contact" />
                                    <input type="text" name="name" placeholder="Your name" className="form-control" />
                                    <input type="email" name="email" placeholder="Your email" className="form-control" />
                                    <button type="submit" className="btn form-control submit-btn"> subscribe</button>
                                </form>
                                <h4 className="newsletter-terms">I've read and agree to Weed's Home written <a href="/">Privacy Policy</a> and <a href="/">Terms Conditions.</a></h4>
                            </div>
                        </section>

                    </div>
                </div>
            </div>


        </section>
    )
}



export default Newsletter