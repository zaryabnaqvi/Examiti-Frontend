import { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Input,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { DrawerWithNavigation } from "../Components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faClipboard, faClipboardList, faMagic, faPerson, faQuestionCircle, faRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DefaultTable } from "../Components/Table";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, [scrolled]);

  return (
    <>
      <Navbar
        className="sticky top-0 z-50 px-4 py-2 border-b border-gray-300 text-gray-900"
        shadow={scrolled}
        fullWidth
      >
        <div className="flex items-center justify-between">
          <div className="flex justify-center">
            <Button
              ripple={false}
              variant="text"
              className="active:bg-transparent hover:bg-transparent"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon className="text-base" icon={faBars} />
            </Button>
            <Logo />
          </div>
          <div>
            <div className="flex justify-center items-center">
              <Typography className="mr-4" variant="h6">Username</Typography>
              <div>
                <div className="self-center sm:self-end md:w-auto">
                  <Button className="mr-0 md:mr-3 mt-3 lg:mt-0 ">

                    Logout
                    <FontAwesomeIcon className="ml-2" icon={faRightFromBracket} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>

      <DrawerWithNavigation open={open} setOpen={setOpen} />
      <main onClick={() => setOpen(false)}>
        {/* <div className=" flex flex-col lg:flex-row mt-10 w-4/5 mx-auto justify-between items-center">
          <Typography
            variant="h4"
            className="self-center sm:self-start font-semibold text-[#323226] "
          >
            Units Consumption Per Day
          </Typography>
          <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
            <div>
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className=" !border-t-blue-gray-200 focus:!border-amber-500 mb-1"
                color="amber"
                labelProps={{
                  className:
                    "before:content-none after:content-none border-none",
                }}
              />
            </div>
            <div className="self-center sm:self-end md:w-auto">
              <Button className="mr-0 md:mr-3 mt-3 lg:mt-0 ">
                <FontAwesomeIcon className="mr-2" icon={faSearch} />
                Search
              </Button>
            </div>
          </div>
        </div> */}


        <div className="min-h-[90vh] flex flex-col flex-wrap w:11/12 justify-center items-center ">
          <div>
            <Typography className="mt-4 text-gray-900 text-center font-oswald text-base  font-extrabold sm:text-lg lg:text-xl">
              Welcome to Organization name Administration Dashboard
            </Typography>
          </div>
          <div>
            <Typography className="mt-2 max-w-[15ch] opacity-75 font-mar text-center text-4xl  font-extrabold sm:mt-[10px] sm:text-6xl md:mt-3 lg:mt-[18px] lg:text-7xl">
              What do you want to Manage?
            </Typography>
          </div>

          <div className="flex justify-center w-full  gap-4 flex-wrap py-10 md:py-14 items-center content-center">


            <div className="md:w-1/5 px-5 bg-red-400 text-[rgb(240,238,235)] tracking-tighter flex flex-wrap items-end justify-start md:h-40 rounded-3xl rounded-bl-none p-3">
              <div className="w-full">

                <FontAwesomeIcon icon={faPerson} className="text-[rgb(240,238,235)] md:text-6xl text-3xl md:mb-3" />
                <br />
                
                <span className="hidden md:block">Manage Teachers</span>
              </div>
            </div>
            <div className="md:w-1/5 px-5 bg-[#38bdf8] flex text-[rgb(240,238,235)] tracking-tighter flex-wrap items-end justify-start md:h-40 rounded-3xl rounded-bl-none p-3">
              <div className="w-full">

                <FontAwesomeIcon icon={faBook} className="text-[rgb(240,238,235)] md:text-6xl text-3xl md:mb-3" />
                <br />
               <span className="hidden md:block"> Manage Courses</span>
              </div>
            </div>
            <div className="md:w-1/5 px-5  bg-[#8b5cf6] flex text-[rgb(240,238,235)] tracking-tighter flex-wrap items-end justify-start md:h-40 rounded-3xl rounded-bl-none p-3">
              <div className="w-full">

                <FontAwesomeIcon className="text-[rgb(240,238,235)] md:text-6xl text-3xl md:mb-3" icon={faClipboardList} />
                <br />
                <span className="hidden md:block">Manage Templates</span>
              </div>
            </div>
            <div className="md:w-1/5 px-5  bg-green-400 flex text-[rgb(240,238,235)] tracking-tighter flex-wrap items-end justify-start md:h-40 rounded-3xl rounded-bl-none p-3">
              <div className="w-full">

                <FontAwesomeIcon className="text-[rgb(240,238,235)] md:text-6xl text-3xl md:mb-3" icon={faQuestionCircle} />
                <br />
                <span className="hidden md:block">Manage Question Bank</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DefaultTable />
        </div>
        <div className="graphs_sec mb-10 flex flex-col md:flex-row mt-10 w-4/5 mx-auto">
          <div className="w-full md:w-6/12">
            <Example />
          </div>
          <div className="mt-5 md:mt-0 md:ml-5 flex justify-between flex-col w-full md:w-6/12">
            <Card>
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-[#323226]"
                >
                  Units
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
            <Card className="mt-5 md:mt-0">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-[#323226]"
                >
                  Units
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Dashboard;
