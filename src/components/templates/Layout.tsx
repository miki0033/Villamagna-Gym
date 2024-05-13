import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full bg-black text-center text-default-600 ">
      <Header />
      <Main children={<Outlet />} />
      <Footer />
    </div>
  );
};

export default Layout;
