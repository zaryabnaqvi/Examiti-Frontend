import React, { useEffect } from 'react';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-tailwind/react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export default function CourseCard() {
 useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms
      once: true, // Whether the animation should happen only once
    });
 }, []);

 return (
    <div className='md:w-1/3 w-full' data-aos='fade'>
      <div className='m-2 p-5 bg-indigo-700 hover:bg-indigo-600 cursor-pointer rounded-3xl shadow-lg'>
        <div>
          <Typography className='text-lg mb-3 font-semibold font-oswald text-gray-200 tracking-tighter uppercase'>
            COURSE
          </Typography>
        </div>
        <div>
          <Typography className='text-5xl mb-6 font-semibold font-mar tracking-tighter text-gray-200 capitalize'>
            Course Name Computer
          </Typography>
        </div>
        <div>
          <Typography className='text-gray-200 font-mar '>
            View details <span className='font-semibold hover:translate-x-2'><FontAwesomeIcon icon={faArrowAltCircleRight}/></span>
          </Typography>
        </div>
      </div>
    </div>
 );
}
