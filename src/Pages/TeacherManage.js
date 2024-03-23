import React, { useState } from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
import TeacherCard from '../Components/Teacher/TeacherCard'
import { Button, Input, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
// import CourseCard from '../Components/Course/CourseCard'
import { CreateTeacherForm } from '../Components/Teacher/CreateTeacher'

export default function TeacherManage() {

  const d = new Date();
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  const [date, setDate] = useState("");

  return (
    <DashboardNavbar>
      <>
        <div className='flex justify-center flex-col items-center'>
                <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto justify-between items-center">
                    <Typography
                        variant="h4"
                        className="self-center sm:self-start font-mar font-bold text-3xl text-[#323226d7] "
                    >
                        Manage Teachers
                    </Typography>
                    <div className='flex'>
                  
                        <div className='mr-3'>
                            <input
                            label='Search'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
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
                                <FontAwesomeIcon  icon={faSearch} />
                                
                            </Button>
                        </div>
                        </div>

                        <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
                        <div className="self-center sm:self-end md:w-auto">
                            <CreateTeacherForm/>
                        </div>

                        </div>
                        </div>




      <div className='flex flex-wrap w-full mb-28 mt-20 justify-center items-center'>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
          </div>
      </>
    </DashboardNavbar>
  )
}
