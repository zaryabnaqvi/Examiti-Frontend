import React, { useState } from "react";
import {
    Button,
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
import { faCheckCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import SelectQuestions from "./selectQuestions";
import { Dialog } from "@material-ui/core";

export function ModalSelectQuestion() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);






    return (
        <>

           
            <Button onClick={handleOpen} className="mr-0 md:mr-3 mt-3 lg:mt-0 " fullWidth>

                Select Question
                <FontAwesomeIcon variant="gradient" className="ml-2" icon={faCheckCircle} />
            </Button>

            <Dialog
                maxWidth="xl"
                PaperProps={{
                    className:"bg-transparent shadow-none h-[100%] overflow-y-auto scrollable-container rounded-lg "
                }}
                
                open={open}
                handler={handleOpen}
                className=""
            >
                <Card className=" bg-[rgb(240,238,235)] w-full">
                   <SelectQuestions handleOpen={handleOpen}/>
                </Card>
            </Dialog>
        </>
    );
}


