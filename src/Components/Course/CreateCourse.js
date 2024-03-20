import React, { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Radio,
    Textarea,
} from "@material-tailwind/react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export function CreateCourseForm() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);






    return (
        <>

           
            <Button onClick={handleOpen} className="mr-0 md:mr-3 mt-3 lg:mt-0 " fullWidth>

                Add Course
                <FontAwesomeIcon variant="gradient" className="ml-2" icon={faPlusCircle} />
            </Button>

            <Dialog
                size="sm"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none h-[100%] overflow-y-auto scrollable-container rounded-lg pt-10 pb-10"
            >
                <Card className="mx-auto w-full max-full ">
                    <CardBody className="flex flex-col gap-4 justify-center">
                        <Typography className="flex justify-center" variant="h4" color="blue-gray">
                            <Logo />
                        </Typography>

                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Add new Course in Organization
                        </Typography>
                        {/* <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography> */}
                        <Input label="Course Name" size="lg" />
                        {/* <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography> */}
                        <Textarea label="Descripiton" size="lg" />
                        {/* <div className="-ml-2.5 -mt-3">
                            <Checkbox label="Remember Me" />
                        </div> */}
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Create
                        </Button>
                      
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}


