import React from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import { Button, Input, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
const AboutPage = () => {
  return (
    <DashboardNavbar>
        <>

        {/* <div className='flex justify-center flex-col items-center'> */}
                {/* <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto items-center"> */}
                {/* <div className='flex items-center justify-center mx-auto mt-16 mb-20'>
                    <Typography
                        variant="h4"
                        className="self-center sm:self-start pt-serif-regular font-bold text-5xl text-gray-800"
                    > 
      
                        About Us
                    </Typography>
                    </div> */}
                    {/* </div> */}





<div className='relative pb-32'>
  <div className='px-6 pt-16 lg:pt-28 pb-10 md:pb-16'>
      <h1 className='pb-16 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-center  text-gray-800'>
        <span>A.I Driven Exam Creation</span>
        <br className='hidden sm:block'></br>
        <span className='pb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-900'>Made Easy</span>
      </h1>

      <p className='pb-2 text-gray-700 text-lg md:text-xl lg:text-2xl text-center leading-normal md:leading-normal lg:leading-9'>
  <span>
  Our commitment at <span className='font-semibold text-blue-800'>Examity</span> is to empower educators with AI-driven solutions that enrich the exam creation process.
  </span>
  <br className='hidden md:block'></br>
    <span>We strive to provide teachers with the tools they need to design assessments that are insightful, inclusive,  <br></br>and tailored to meet the diverse needs of learners</span>
</p>

  </div>
</div>

<section className="mt-16 lg:mt-36 2xl:mt-2 text-2xl md:text-2xl grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-[340px_auto] lg:grid-rows-3 2xl:gap-4 2xl:gap-x-5 2xl:gap-y-13 mb-40 justify-center">
  <img className="h-[600px] w-full rounded-3xl bg-no-repeat md:h-[500px] lg:row-span-3 lg:h-[580px] lg:w-[350px] lg:bg-[length:168%] 2xl:h-[625px] 2xl:w-[402px] 2xl:bg-[length:180%] ml-200" src="https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038397.jpg" alt="Banner" />

  <div className="grid grid-cols-1 gap-2 lg:grid-cols-[38fr_21fr] 2xl:gap-4">
    <div className="bg-blue-200 p-9  rounded-3xl lg:p-9 lg:py-21 xl:pl-9 2xl:py-26 2xl:w-420"><span className='inline-block 2xl:w-[420px]'>Text1</span> </div>
    <div className="bg-[#79c2d0] p-9  rounded-3xl lg:p-9 lg:py-21 xl:pl-9 2xl:py-26"><span className='inline-block 2xl:w-[120px]'>Text2</span> </div>
  </div>

  <div className="bg-[#53a8b6] p-9 xssm:p-8 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26 w-full "><span className='inline-block 2xl:w-[320px]'>Text 3</span> </div>

  <div className="grid grid-cols-1 gap-2 lg:grid-cols-[21fr_38fr] 2xl:gap-4">
    <div className="bg-[#5585b5] p-9 xssm:p-8 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26"><span className='inline-block 2xl:w-[120px]'>Text 4</span> </div>
    <div className="bg-[#bbe4e9] p-9 xssm:p-8 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26"><span className='inline-block 2xl:w-[180px]'>Text 5</span> </div>
  </div>
</section>

    </>
    </DashboardNavbar>
  );
};

export default AboutPage;








     {/* <div className='w-full flex justify-center'> 
    <div className="grid grid-cols-2 gap-4 mb-40 justify-center mr-[130px]"> */}
    {/* <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 mb-40"> */}

    {/* <div className=''>
    <img className='h-[400px] w-full rounded-3xl  bg-no-repeat md:h-[480px] lg:row-span-3 
    lg:h-[580px] lg:w-[350px] lg:bg-[length:168%] 2xl:h-[625px] 2xl:w-[402px] 2xl:bg-[length:180%] ml-[200px]' src='https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038397.jpg'></img>
    </div>


        <div className='grid grid-cols-2 lg:grid-cols-[38fr_21fr] 2xl:gap-[10px]'>
      
      
       <div className='grid grid-cols-1 col-span-2 gap-2 lg:grid-cols-[38fr_21fr] 2xl:gap-[10px]'>
      <div className="bg-blue-200 p-4 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26 2xl:w-420"></div>
      <div className="bg-green-200 p-4 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26">Item 2</div>
      </div>
      <div className="bg-yellow-200 p-4 col-span-2  rounded-3xl lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px] ">Item 3</div> */}
     {/* w-[670px] w-[430px] w-[230px]*/}

    {/* <div className='grid grid-cols-1 col-span-2 gap-2 lg:grid-cols-[21fr_38fr] 2xl:gap-[10px]'>
      <div className="bg-pink-200 rounded-3xl sm:p-8 p-9 lg:p-9 lg:py-21 xl:pl-11 2xl:py-26">Item 4</div>
      <div className="bg-purple-200 rounded-3xl sm:p-8  p-9  lg:p-9 lg:py-21 xl:pl-11 2xl:py-26">Item 5</div>
      </div> */}
      {/* lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  */}
    {/* </div>


   
    </div>
    </div>
     */}




{/* <section className=' landingSection 5xl:mt-40 6xl:mt-48 xssm:grid-cols-[280px_auto] text-specialLightGray mt-16 grid w-full grid-cols-1 gap-x-[13px] gap-y-[10px] text-2xl md:grid-cols-[340px_auto] lg:mt-36  lg:grid-cols-[auto_auto] lg:grid-rows-3 2xl:mt-28 2xl:gap-4 2xl:gap-x-[16px] 2xl:gap-y-[13px] 2xl:text-4xl'>
<img className='h-[400px] w-full rounded-3xl  bg-no-repeat md:h-[480px] lg:row-span-3 
    lg:h-[580px] lg:w-[350px] lg:bg-[length:168%] 2xl:h-[625px] 2xl:w-[402px] 2xl:bg-[length:180%] ml-[200px]' src='https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038397.jpg'></img>


<div className='grid grid-cols-1 gap-2 lg:grid-cols-[38fr_21fr] 2xl:gap-[10px]'>
  <div className='bg-blue-200 xssm:p-8  rounded-3xl p-9 lg:p-9  lg:py-[21px] xl:pl-11 2xl:py-[26px] '>
    <span className='inline-block 2xl:w-[420px]'>Text1
    </span>

     </div>

     <div className='class="xssm:p-8 rounded-3xl bg-[#62449B] p-9 lg:p-9 lg:py-[21px] xl:pl-11 2xl:py-[26px]  "'>Text2</div>

</div>

<div className='bg-pink-200 xssm:p-8 w-full rounded-3xl p-9 lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  '>
  <span className='inline-block 2xl:w-[620px]'>text 3</span>
</div>

<div className='grid grid-cols-1 gap-2 lg:grid-cols-[21fr_38fr] 2xl:gap-[10px]'>
<div className='xssm:p-8 rounded-3xl bg-[#7F85A8] p-9 lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  '>Text 4</div>
<div className='xssm:p-8 rounded-3xl bg-[#917CBA] p-9 lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  '>Text 5</div>

</div>
</section> */}






  