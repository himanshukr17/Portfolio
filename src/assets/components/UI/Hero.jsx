import React from 'react';
// import heroImg from '../../images/hero.svg';
// import frontimageImg from '../../images/frontimage.svg';
import pp from '../../images/pp.jpg';
import team from "../../images/team.png"
// import nodedotjsImg from '../../images/nextdotjs.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faMap } from '@fortawesome/free-solid-svg-icons';

import CountUp from 'react-countup';


const Hero = () => {
    const [title, setTitle] = React.useState("Samishti Infotech Pvt. Ltd.");
    React.useEffect(() => {

        setTitle(document.title = title);

    }, [window.onload])

    return (
        
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between mr-[-900] sm:flex-col md:flex-row'>
                    {/* her left start */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600]
                        text-[25px]'>Hi,
                        </h5>

                        <h1 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[800]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-5'>We are Samishti Infotech<br /> Proven Experts in Consulting Services
                        </h1>

                        <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='150' className='flex items-center gap-6 mt-7'>
                            {/* <a href='#contact'><button className='flex items-center gap-2 bg-black text-white font-[600] border border-solid
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor ease-in duration-100'><i class='ri-mall-line'></i>Hire Me</button></a> */}

                            <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See Portfolio</a>
                        </div>
                        <div className='marginTop-[-200]'>
                            <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-0 ml-[-20] font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                                <span class='ri-apps-2-line'></span>
                                <b>Samishti Infotech Pvt. Ltd., a SAP consulting company having centers at Noida, New Delhi, Kolkata and Pune, was established by a group of highly motivated, experienced and seasoned  ex-SAP professionals with a  clear vision of providing solutions and services based on SAP’s product portfolio.
                                    Since 2014, this journey is in continuity and had grown tremendously. We have served 400+ customers across globe from different industrial verticals. Point solutions in different SAP functional modules, SAP integration services etc.
                                    We have a clear vision to grow together with the customer by understanding their business and applying business transformation processes that are beneficial to achieve their long-term goals.
                                    With our holistic approach to building solutions, we can put ‘Customer First’ and become the trusted advisor to customer.
                                </b>
                            </p>
                        </div>
                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[20px] font-[600]'>Connect</span>
                            <span><a title='instagram' target='_blank' href='https://samishti.com/' className='text-smallTextColor text-[25px] font-[600]'><FontAwesomeIcon icon={faGlobe} /></a></span>
                            <span><a title='github' target='_blank' href='https://www.google.com/maps/place/Samishti+Infotech/@28.5708571,77.2375579,13z/data=!4m10!1m2!2m1!1ssamishti+infotech!3m6!1s0x390ce5128008104f:0x22e6ef4d34b33f1!8m2!3d28.5708571!4d77.3137756!15sChFzYW1pc2h0aSBpbmZvdGVjaJIBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2Vz4AEA!16s%2Fg%2F11rywxh9c9?entry=ttu' className='text-smallTextColor text-[25px] font-[600]'><FontAwesomeIcon icon={faMap} /></a></span>
                            <span><a title='LinkedIn' target='_blank' href='https://www.linkedin.com/company/samishti-infotech-private-limited/mycompany/' className='text-smallTextColor text-[25px] font-[600]'><i class='ri-linkedin-box-fill'></i></a></span>
                        </div>
                    </div>
                    {/* hero left end */}

                    {/* hero img */}
                    <div className='basis-1/2 mt-50 sm:mt-10'>
                        <figure className='flex items-center justify-center '><img src={team} alt='' /></figure>
                    </div>
                    {/* hero img end */}

                    {/* hero image content right */}
                    {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col
                        md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <span><a href='#reactjs' className='text-smallTextColor text-[80px] '><i class="ri-reactjs-fill"></i></a></span>
                            <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={70} duration={3} suffix='%' />
                        </div>
                        <div className='mb-10'>
                            <span><a href='#javascript' className='text-smallTextColor text-[80px]'><i class="ri-javascript-fill"></i></a></span>
                            <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={80} duration={3} suffix='%' />
                        </div>
                    </div> */}
                </div>
            </div>
        </section >
    );
}

export default Hero;
