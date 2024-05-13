import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import ILink from "../../interfaces/ILink";

import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../molecules/Logo";

const Header = () => {
  const mediaQuery = useMediaQuery("(min-width:576px)");
  const linkList: ILink[] = [
    { text: "Home", href: "./" },
    { text: "Dati", href: "./data" },
  ];
  return (
    <div id="header" className="grid grid-cols-3 justify-evenly px-4 py-2">
      {!mediaQuery ? (
        <>
          <Sidebar linkList={linkList} />
          <Logo />
        </>
      ) : (
        <>
          {linkList.map((li: ILink, idx: number) => (
            <Link key={idx} to={li.href}>
              <div className="font-freeman px-4 py-2 hover:bg-gray-700 text-white cursor-pointer">
                {li.text}
              </div>
            </Link>
          ))}
          <Logo />
        </>
      )}
    </div>
  );
};

export default Header;
