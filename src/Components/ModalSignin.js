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
} from "@material-tailwind/react";
import Logo from "./Logo";
 
export function DialogWithForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const availableRoles = [
    {
      label: "Administrator",
      value: "administrator",
      description:
        "Account owner that performs tasks requiring unrestricted access.",
    },
    {
      label: "Standard",
      value: "standard",
      description: "User within an account that performs daily tasks.",
    },
  ];

  const [selectedRole, setSelectedRole] = useState(availableRoles[0].value);
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };


  const RoleSelector = ({ name, availableRoles }) => {
    return (
      <div className="flex flex-col gap-4">
        {availableRoles.map((role, index) => (
          <Card
            shadow={false}
            className={`p-2 border-2 ${
              selectedRole === role.value
                ? "border-blue-500 bg-[#f5f8ff]"
                : "border-gray-200"
            }`}
            key={index}
          >
            <Radio
              name={name}
              value={role.value}
              checked={selectedRole === role.value}
              onChange={handleRoleChange}
              label={
                <>
                  <Typography className="font-medium text-gray-800">
                    {role.label}
                  </Typography>
                
                </>
              }
              color="blue"
              
            />
          </Card>
        ))}
      </div>
    );
}
 
  return (
    <>
      
      <Button onClick={handleOpen} variant="text" size="sm" fullWidth>
                    Sign In
                </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 justify-center">
            <Typography className="flex justify-center" variant="h4" color="blue-gray">
              <Logo/>
            </Typography>
            <RoleSelector  name="userRole" availableRoles={availableRoles}/>
            {/* <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography> */}
            {/* <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography> */}
            <Input label="Email" size="lg" />
            {/* <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography> */}
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}


