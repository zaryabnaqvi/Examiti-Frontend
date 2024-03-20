import React, { useState } from 'react'
import DashboardNavbar from '../DashboardNavbar'
import { Button, Card, CardBody, CardFooter, Input, Textarea, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo'
import SubjectsCard from './SubjectsCard'

export default function CoursePage() {

    const [viewForm, setViewForm] = useState(true)

    return (
        <DashboardNavbar>
            <div className='flex  flex-wrap min-h-screen mx-4 md:mx-12 my-10'>
                <div className=' bg-transparent w-full gap-3 md:w-5/12'>
                    <Typography
                        variant="h4"
                        className="self-center sm:self-start font-mar font-bold mb-10 text-3xl text-[#323226d7] "
                    >
                        Manage Course Name
                    </Typography>

                    {(viewForm) ? (
                        <div onClick={() => { setViewForm(!viewForm) }} className='p-3 w-full text-black shadow-lg  bg-white rounded-2xl'>
                            <div className='flex justify-between'>
                                <div>
                                    <Typography className='font-mar opacity-75 font-semibold'>
                                        <span className='font-oswald font-semibold text-xl opacity-95'>  Course Name </span>: Computer Science
                                    </Typography>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='text-2xl' icon={faPencilSquare} />
                                </div>
                            </div>
                            <Typography className='w-full font-mar opacity-75 font-semibold'>
                                <span className='font-oswald font-semibold text-xl opacity-95'>  Descripiton </span> : Ginger, short hair slightly reveals a full,
                                warm face. Piercing hazel eyes, set buried within their sockets, watch watchfully over the tribes they've shown
                                mercy on for so long. A gunshot left a mark stretching from just under
                                the left eye , first running towards thin lips and ending on his right
                                cheekbone leaves a stinging memory of deceased love.
                            </Typography>

                        </div>) : (

                        <Card className=" w-full  ">
                            <CardBody className="flex flex-col gap-4 justify-center">


                                <Typography
                                    variant="h4"
                                    className="self-center sm:self-start font-mar font-bold text-3xl tracking-tighter text-[#323226d7] "
                                >
                                    Edit Course Details
                                </Typography>
                                <Typography className="-mb-2" variant="h6">
                                    Course Name
                                </Typography>
                                <Input label="Course Name" size="lg" />
                                <Typography className="-mb-2" variant="h6">
                                    Course Description
                                </Typography>
                                <Textarea label="Descripiton" size="lg" />
                                {/* <div className="-ml-2.5 -mt-3">
        <Checkbox label="Remember Me" />
    </div> */}
                            </CardBody>
                            <CardFooter className="pt-0 flex justify-between">
                                <div>
                                    <Button variant="gradient" color='blue' onClick={() => setViewForm(!viewForm)} >
                                        Delete <FontAwesomeIcon className='ml-2' icon={faTrash} />
                                    </Button>
                                </div>
                                <div >
                                    <Button variant="gradient" color='blue' onClick={() => setViewForm(!viewForm)} >
                                        Save Changes
                                    </Button>

                                    <Button variant="gradient" className='ml-2' onClick={() => setViewForm(!viewForm)} >
                                        Cancel
                                    </Button>
                                </div>


                            </CardFooter>
                        </Card>


                    )}
                </div>
                <div className='bg-transparent w-full md:pl-4 md:w-7/12 overflow-y-auto scrollable-container'>
                    <Typography
                        variant="h4"
                        className="self-center sm:self-start font-mar mb-10 font-bold text-3xl text-[#323226d7] "
                    > Topics</Typography>
                    <div  className='max-h-screen'>

                        <SubjectsCard/>
                        <SubjectsCard/>
                        <SubjectsCard/>
                        <SubjectsCard/>







                        
                    </div>

                </div>
            </div>
        </DashboardNavbar>
    )
}
