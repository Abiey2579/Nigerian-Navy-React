import { Link } from "react-router-dom";
import LogoStamp from "../Components/LogoStamp";
import { Popover } from "@headlessui/react";
import * as uriPaths from "../Asset/common/uriPaths";

const Navbar = () => {
  return (
    <Popover className=" AuthNavbar fixed top-0 z-50 w-full m-auto">
      <div className="lg:px-24 md:px-10 px-5">
        <div className="flex items-center justify-between md:justify-start md:space-x-10 ">
          <Link className="text-gray-700" to={uriPaths.HOME}>
            <LogoStamp />
          </Link>

          <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              className="auth-nav-link text-NAVY_Gray hover:text-NAVY_Blue font-semibold px-[22px] py-[10px] rounded text-center block transition hover:bg-white"
              to={uriPaths.REGISTER}
              style={{ textDecoration: "none" }}
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Navbar;
