import { Outlet } from "react-router-dom";
import Navbar from "../componants/layout/navbar";
import Footer from "../componants/layout/footer";
import ScrollToTop from "../componants/layout/scroll-top";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
