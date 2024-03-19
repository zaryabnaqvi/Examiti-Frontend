import { Button, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import Surveillance from "../Assets/examiti.png";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="min-h-screen container-fluid">
                <div className="flex justify-center items-center">
                <div className="flex-grow flex flex-col flex-col-reverse lg:flex-row justify-center container">
                    <div className="flex-1 flex flex-col gap-8 lg:gap-10 px-8 lg:px-12 py-16 lg:py-30 text-justify lg:text-left transition-all duration-400">
                        <div className="flex flex-col gap-10 lg:gap-12">
                            <Typography
                        
                                variant="h1"
                                className="text-center lg:text-left text-3xl lg:text-4xl 2xl:text-6xl text-[#323229] transition-all duration-400 font-oswald"
                            >
                                Smarter <span className="text-blue-600">Exams</span>, <br/> Better{" "}
                                <span className="text-cyan-700">Education</span>
                            </Typography>
                            <Typography className="font-sans tracking-wide">
                            "Discover the future of exam creation with Examity. By harnessing the power of AI,
                             we've revolutionized the process, making it effortless for educational institutes 
                             to craft exams with precision and speed. Examity automates tedious tasks, such as 
                             question selection and formatting, allowing educators to focus on delivering quality 
                             assessments. Whether it's multiple-choice, essay questions, or complex calculations, 
                             our AI-driven solutions ensure every exam is tailored to perfection.
                            </Typography>
                        </div>
                        <div className="flex items-center justify-center gap-12 lg:gap-20 lg:justify-start px-16 lg:px-0 transition-all duration-400">
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCheckDouble} color="green" />
                                <Typography>Examination</Typography>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCheckDouble} color="green" />
                                <Typography>Automations</Typography>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCheckDouble} color="green" />
                                <Typography>Quality</Typography>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="gradient" color="blue">
                                Get Started <FontAwesomeIcon icon={faAngleDoubleRight} className="pl-2" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={Surveillance} alt="" className="w-full max-w-3xl p-8 md:p-4 lg:p-0 transition-all duration-400" />
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
