import AuthenticationButton from "./auth/AuthenticationButton";
import { FaBusAlt } from "react-icons/fa";

import { FaCar } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { FaTruckFront } from "react-icons/fa6";

import { MdOutlinePedalBike } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="mx-auto max-w-[1600px] w-full">
      <nav className="bg-white flex items-center justify-between py-5 px-3 lg:px-12 border-b border-gray-50 shadow-lg">
        <div>
          <div className="flex items-center space-x-1.5 justify-end border-b mb-1 p-1 text-primary">
            <FaBusAlt className="text-sm" /> <FaCar /> <FaVanShuttle />{" "}
            <FaTruckFront className="text-sm" />
            <MdOutlinePedalBike />
          </div>
          <p className="font-light text-xl">
            <span className="font-black text-primary">Vehicle </span>Dashboard
          </p>
        </div>
        <AuthenticationButton />
      </nav>
    </div>
  );
};

export default NavBar;
