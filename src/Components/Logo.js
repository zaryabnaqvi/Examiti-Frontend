import { Typography } from "@material-tailwind/react";

import FilledLogo from "../Assets/ExamLOGO.png";
import TransparentLogo from "../Assets/ExamLOGO.png";

const Logo = ({ variant = "default", filled = true }) => {
    return (
        <a href="/" className="flex items-center gap-1 select-all">
            {(variant === "default" || variant === "icon") && (
                <img
                    src={filled ? FilledLogo : TransparentLogo}
                    className="h-[3.5rem] object-cover select-none"
                    alt="Website's logo"
                />
            )}
            {/* {(variant === "default" || variant === "text") && (
                <Typography variant="h6" className="font-semibold text-[#323226] select-none">
                    Electric Meter Surveillance System
                </Typography>
            )} */}
        </a>
    );
};

export default Logo;
