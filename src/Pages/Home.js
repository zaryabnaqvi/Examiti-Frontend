import { Button, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faCheckDouble, faClipboardList, faComputer } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import Surveillance from "../Assets/examiti.png";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="min-h-screen container-fluid">
                <div className="flex justify-center items-center">
                <div className="flex-grow flex flex-col flex-col-reverse lg:flex-row justify-center items-center container">
                    <div className="flex-1 flex flex-col gap-8 lg:gap-10 pl-8 px-9 md:pr-0 py-16 lg:py-30 text-justify lg:text-left transition-all duration-400">
                        <div className="flex flex-col gap-10 lg:gap-12">
                            <Typography
                        
                                variant="h1"
                                className="text-center lg:text-left text-3xl md:text-8xl lg:text-8xl 2xl:text-8xl text-[#323229] transition-all duration-400 font-oswald "
                            >
                                Smarter <span className="text-blue-600">Exams</span>, Better{" "}<span className="text-cyan-700">Education</span>  </Typography>
                            <Typography className="font-mar tracking-wide ">
                            "Discover the future of exam creation with Examity. By harnessing the power of AI,
                             we've revolutionized the process, making it effortless for educational institutes 
                             to craft exams with precision and speed.
                            </Typography>
                        </div>
                        <div className="flex items-center justify-center gap-12 lg:gap-20 lg:justify-start px-16 lg:px-0 transition-all duration-400">
                            <div className="flex flex-row gap-1 items-center md:text-3xl">
                                <FontAwesomeIcon icon={faClipboardList} className="text-[#237fff]" color="blue" />
                                <Typography className="font-mar md:mt-2">Examination</Typography>
                            </div>
                            <div className="flex gap-1 items-center md:text-3xl">
                                <FontAwesomeIcon icon={faComputer} className="text-[#237fff]"  color="blue" />
                                <Typography className="font-mar md:mt-1">Automations</Typography>
                            </div>
                            <div className="flex gap-1 items-center md:text-3xl">
                                <FontAwesomeIcon icon={faCheckDouble} className="text-[#237fff]" color="blue" />
                                <Typography className="font-mar">Quality</Typography>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="gradient" size="lg" color="blue">
                                Get Started <FontAwesomeIcon icon={faAngleDoubleRight} className="pl-2" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={Surveillance} alt="" className="w-full max-w-3xl p-8 md:p-4 lg:p-4 transition-all duration-400" />
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
