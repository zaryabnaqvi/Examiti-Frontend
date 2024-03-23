import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function TeacherCard(){
    return(
        // flex items-center justify-center 
 <div class=" md:w-1/3 w-full">
   <div class="mx-auto py-20 my-12 bg-gradient-to-b from-blue-200 to-blue-600  font-semibold 
   text-center rounded-2xl border shadow-lg w-[85%] hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
     <img className='w-[130px] h-[126px] rounded-full items-center mx-auto ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaviIGVfkeUITCBPq52yc7BnkCNIIKtYNr2Lx7_zKCyg&s'></img>
     
     <div>
     {/* <h3 class="text-3xl text-gray-900 font-oswald mt-3"> */}
     <h3 class="text-3xl text-gray-900 font-oswald mt-3">
         Teacher Name
         </h3>

         </div>
     
     <div>
     <h1 class="text-xl text-gray-800 font-mar mt-3">
         Qualification 
         </h1>
        </div>

     <div>
            <p className=' text-lg text-gray-300 font-mar hover:font-bold  hover:underline hover:text-black mx-auto mt-6'>
                View details <span className='font-semibold hover:translate-x-2'><FontAwesomeIcon icon={faArrowAltCircleRight}/></span>
            </p> 
        </div>
     {/* <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
     {/* <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button> */}
   </div>
 </div> 

/* <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
  <div class="bg-white rounded-lg shadow-lg p-10 max-w-md">
    <img class='w-24 h-24 rounded-full mx-auto mb-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaviIGVfkeUITCBPq52yc7BnkCNIIKtYNr2Lx7_zKCyg&s' alt="Teacher's profile picture">
    <div class="text-center">
      <h1 class="text-3xl font-semibold text-gray-800">Teacher Name</h1>
      <p class="text-xl text-gray-600">Course</p>
    </div>
    <div class="text-center mt-6">
      <a href="#" class="text-indigo-600 font-semibold hover:text-indigo-800">View details <span class='ml-1'><FontAwesomeIcon icon={faArrowAltCircleRight}/></span></a>
    </div>
  </div>
</div> */




    )
}