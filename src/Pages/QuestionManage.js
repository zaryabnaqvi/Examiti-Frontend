import React, { useState } from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
import { CreateCourseForm } from '../Components/Course/CreateCourse'
import QuestionCard from '../Components/Question/QuestionCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Typography } from '@material-tailwind/react'
import TextEditor from '../Components/TextEditor copy'

export default function QuestionManage() {
const [data,setData]=useState("")
    return (
        <DashboardNavbar>

            <div className='flex justify-center flex-col items-center'>
                <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto justify-between items-center">
                    <Typography
                        variant="h4"
                        className="self-center sm:self-start font-mar font-bold text-3xl text-[#323226d7] "
                    >
                        Manage Question
                    </Typography>
                    <div className='flex'>

                        <div className='mr-3'>
                            <input
                                label='Search'
                                type="text"
                                className=" !border-t-blue-gray-200 focus:!border-blue-500 mb-1 rounded-lg bg-transparent"
                                color="blue"
                                placeholder='Search'
                                labelProps={{
                                    className:
                                        "ml-3 before:content-none after:content-none focus:opacity-0 border-none",
                                }}
                            />
                            <Button className="ml-3">
                                <FontAwesomeIcon icon={faSearch} />

                            </Button>
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
                        <div className="self-center sm:self-end md:w-auto">
                            <CreateCourseForm />
                        </div>


                    </div>
                </div>

                <div className='flex flex-wrap w-11/12 mt-10 justify-center items-center'>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />

                 
                </div>

         

            </div>

        </DashboardNavbar>
    )
}
