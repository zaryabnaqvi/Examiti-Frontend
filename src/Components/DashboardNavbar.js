import { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Typography,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { DrawerWithNavigation } from "../Components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

const DashboardNavbar = ({children}) => {
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
  
     {children}

        <Footer />
      </main>
    </>
  );
};

export default DashboardNavbar;
