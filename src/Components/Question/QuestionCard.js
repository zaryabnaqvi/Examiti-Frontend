import { faBook, faCheckDouble, faClock, faMarker, faMarsDouble, faMessage, faPencilSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import { UpdateTeacherForm } from './UpdateQuestion';

export default function QuestionCard() {

    const Tag = ({ children }) => {
        return (
            <span className="px-3 py-1 rounded-lg bg-[#2F2F2F] text-xs text-gray-400 uppercase select-none">
                {children}
            </span>
        );
    };




    return (
        <>
            <div className='w-full p-10 py-5 mb-10 bg-white rounded-3xl shadow-xl'>
                <div className='w-full flex-col flex '>

                    <div className='flex justify-between w-full'>
                        <div>
                            <Typography variant='h2' className='mb-3 font-mar'>
                                How to Implement the stack with the help of queue ?
                            </Typography>

                        </div>
                        <div>
                           <UpdateTeacherForm/>
                        </div>
                    </div>

                    <div className='flex w-full flex-wrap'>
                        <div className='w-full md:w-1/5'>
                            <div>
                                <ul>
                                    <li className='flex items-center'> <Typography className='mr-2'> <FontAwesomeIcon icon={faMarker} />  </Typography> <Typography>Marks : 02</Typography></li>
                                    <li className='flex items-center'> <Typography className='mr-2'> <FontAwesomeIcon icon={faClock} />  </Typography> <Typography>Duration : 02 Min</Typography></li>
                                    <li className='flex items-center'> <Typography className='mr-2'> <FontAwesomeIcon icon={faCheckDouble} />  </Typography> <Typography>CLO - 02</Typography></li>


                                </ul>
                            </div>
                        </div>
                        <div className='w-full md:w-2/5'>
                            <div>
                                <ul>

                                    <li className='flex items-center'> <Typography className='mr-2'> <FontAwesomeIcon icon={faUser} />  </Typography> <Typography>Creator : Username</Typography></li>


                                    <li className='flex items-center'> <Typography className='mr-2'> <FontAwesomeIcon icon={faBook} />  </Typography> <Typography>Course : Data Struture</Typography></li>


                                    <li className='flex items-center'> <Typography className='mr-2'> <FontAwesomeIcon icon={faMessage} />  </Typography> <Typography>Topic : Stack</Typography></li>

                                </ul>
                            </div>
                        </div>
                        <div className='w-full md:w-2/5'>
                            <div>
                                <div><Typography className='font-mar mb-3' variant='h5'>Keywords</Typography></div>
                                <div className="flex items-center gap-4 font-semibold">
                                    <Tag>Identify</Tag>
                                    <Tag>Implement</Tag>
                                    <Tag>Construct</Tag>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
