import * as uriPaths from "../../Asset/common/uriPaths";
import { Link } from "react-router-dom";
import LogoStamp from "../../Components/LogoStamp";
import { Popover } from "@headlessui/react";
import { account } from "../../Asset/config/appwrite";
import { useNavigate } from "react-router-dom";

const Navbar = (props: { email: string }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSessions().finally(() => {
        navigate(uriPaths.LOGIN);
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
  return (
    <Popover className="border-b relative bg-white w-full">
      <div className="lg:px-24 md:px-10 pl-3 pr-6 ">
        <div className="flex items-center justify-between md:justify-start md:space-x-10">
          <Link className="text-gray-700" to="/">
            <LogoStamp />
          </Link>

          <div className="items-center gap-3 justify-end md:flex md:flex-1 lg:w-0">
            <Link
              className="text-NAVY_Blue font-semibold px-[22px] py-[10px] rounded text-center block transition hover:bg-slate-100"
              to={uriPaths.AUTH}
              style={{ textDecoration: "none" }}
            >
              {props.email}
            </Link>
            <button
              className="recruitment-nav-link text-NAVY_Blue font-semibold px-[22px] py-[10px] rounded text-center block transition hover:bg-slate-100"
              style={{ textDecoration: "none" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Navbar;
