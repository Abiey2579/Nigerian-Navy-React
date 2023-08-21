import * as uriPaths from "../Asset/common/uriPaths";
import { Link } from "react-router-dom";
import LogoStamp from "../Components/LogoStamp";
import { Popover } from "@headlessui/react";

const Navbar = () => {
  return (
    <Popover className="border-b relative bg-white w-full">
      <div className="lg:px-24 md:px-10 pl-3 pr-6 ">
        <div className="flex items-center justify-between py-1 md:justify-start md:space-x-10 h-20">
          <Link className="text-gray-700" to="/">
            <LogoStamp />
          </Link>

          <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              className="recruitment-nav-link text-NAVY_Blue font-semibold px-[22px] py-[10px] rounded text-center block transition hover:bg-slate-100"
              to={uriPaths.AUTH}
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
