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
import { faPencilSquare, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import SearchableDropdown from "./SearchableDropDown";
import TextEditor from "../TextEditor copy";
import TopicSearchableDropdown from "./TopicSearchableDropDown copy";
import DashboardNavbar from "../DashboardNavbar";



export function CreateQuestionForm() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [value, setValue] = useState("Select Course");
    const [value1, setValue1] = useState("Select Topic");

    const [data, setData] = useState("<p><strong>Friends</strong></p>");
    const [selectedObject, setSelectedObject] = useState({id:0,name:""})
    const [selectedTopic, setSelectedTopic] = useState({id:0,name:"",courseId:0})

    const [filteredTopics,setFilteredTopics]=useState( [
        {id:11,name:"Stack",courseId:1},
        {id:12,name:"Queue",courseId:1},
        {id:13,name:"Loops",courseId:2},
        {id:14,name:"Conditional Statements",courseId:2},
    ])

    console.log(selectedObject)


    const courses = [
        { id: 1, name: "Data Structures" },
        { id: 2, name: "Programming Fundamentals" }
    ];
    const topic = filteredTopics.filter((item)=>{
                return item.courseId === selectedObject.id
    })

    





    return (
        <DashboardNavbar>




           
            <div className="flex justify-center">
            <div
                size="lg"
                open={open}
                handler={handleOpen}
                className="bg-transparent w-11/12 shadow-none h-[100%] overflow-y-auto scrollable-container rounded-lg pt-10 pb-10"
            >
                <Card className="w-full flex flex-col items-center max-full ">
                    <CardBody className="flex flex-wrap w-11/12  justify-center">
                        <Typography className="flex w-full justify-center" variant="h4" color="blue-gray">
                            <Logo />
                        </Typography>

                        <Typography
                            className="mb-3 font-normal w-full"
                            variant="h3"
                            color="gray"
                            
                        >
                            <strong>Create Questions</strong>
                        </Typography>


                        <div className="w-full">
                            <TextEditor data={data} setData={setData} />
                        </div>

                        <div className="w-full">
                            <form class="file-upload-form">
                                <label for="file" class="file-upload-label">
                                    <div class="file-upload-design">
                                        <svg viewBox="0 0 640 512" height="1em">
                                            <path
                                                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                                            ></path>
                                        </svg>
                                        <p>Drag and Drop</p>
                                        <p>or</p>
                                        <span class="browse-button">Browse file</span>
                                    </div>
                                    <input id="file" type="file" />
                                </label>
                            </form>

                        </div>
                        <div className="md:w-1/3 w-full p-2">
                            <Input type="number" label="Marks" />
                        </div>

                        <div className="md:w-1/3 w-full p-2">
                            <Input type="number" label="Duration in Minutes"  />
                        </div>

                        <div className="md:w-1/3 w-full p-2">
                            <Input type="number" label="CLO" />
                        </div>


                        {/* <div className="-ml-2.5 -mt-3">
                            <Checkbox label="Remember Me" />
                        </div> */}
                        <div className="md:w-1/2 w-full p-2">
                            <SearchableDropdown

                                options={courses}
                                label="name"
                                id="id"
                                selectedVal={value}
                                setSelectedObject={setSelectedObject}
                                handleChange={
                                    (val) => {
                                        setValue(val)
                                        
                                        setSelectedTopic({...selectedTopic,id:0,name:"",courseId:0})
                                        setValue1("Select Topics")
                                        console.log()
                                    }


                                }
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <TopicSearchableDropdown

                                options={topic}
                                label="name"
                                id="id"
                                selectedVal={value1}
                                setSelectedObject={setSelectedTopic}
                                handleChange={(val) => {
                                    setValue1(val)
                                }
                            }
                            />
                        </div>

                    </CardBody>
                    <CardFooter className="pt-0 w-full">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Create
                        </Button>

                    </CardFooter>
                </Card>
            </div>
            </div>

        </DashboardNavbar>
    );
}


