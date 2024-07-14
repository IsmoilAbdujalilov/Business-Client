import { Outlet } from "react-router-dom";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Contact />
    </>
  );
};

export default Layout;
