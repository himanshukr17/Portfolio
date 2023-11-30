import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faMap } from '@fortawesome/free-solid-svg-icons';
import Slogo from "../../images/Slogo.png"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 mb-6 text-white font-[600] md:text-[2rem]'>
              Want to give us an opportunity?
            </h2>
            {/* <a href='#contact'>
            <button className='flex items-center gap-2 text-white font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
            hover:font-[500] ease-in duration-100'>
                <i class='ri-mail-line'></i>
                Hire me
              </button>
            </a> */}
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 text-[20px]'>
              "Every great developer you know got there by solving problems which they were unqualified to solve until they actually did it."
            </p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8'>
              <span className='text-gray-300 mt-0 font-[600] text-[20px]'>
                Connect
              </span>

              {/* <span className='text-smallTextColor text-[20px] font-[600]'>Connect</span> */}
                            <span><a title='instagram' target='_blank' href='https://samishti.com/' className='text-smallTextColor text-[25px] font-[600]'><FontAwesomeIcon icon={faGlobe} /></a></span>
                            <span><a title='github' target='_blank' href='https://www.google.com/maps/place/Samishti+Infotech/@28.5708571,77.2375579,13z/data=!4m10!1m2!2m1!1ssamishti+infotech!3m6!1s0x390ce5128008104f:0x22e6ef4d34b33f1!8m2!3d28.5708571!4d77.3137756!15sChFzYW1pc2h0aSBpbmZvdGVjaJIBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2Vz4AEA!16s%2Fg%2F11rywxh9c9?entry=ttu' className='text-smallTextColor text-[25px] font-[600]'><FontAwesomeIcon icon={faMap} /></a></span>
                            <span><a title='LinkedIn' target='_blank' href='https://www.linkedin.com/company/samishti-infotech-private-limited/mycompany/' className='text-smallTextColor text-[25px] font-[600]'><i class='ri-linkedin-box-fill'></i></a></span>
            </div>
          </div>
        </div>
      </div>

      {/* perosnal footer branding */}
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px]  text-black text-[18px] font-[500]
                     rounded-full flex items-center justify-center'><img src={Slogo}/></span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-white font-[700]'>Samishti Infotech Pvt. Ltd.</h2>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>Copyright &copy; {year} <br /><b>Samishti Infotech Pvt. Ltd.</b> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;