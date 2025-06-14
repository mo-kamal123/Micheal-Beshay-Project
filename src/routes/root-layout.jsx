import { Outlet } from 'react-router-dom';
import Navbar from '../componants/layout/navbar';
import Footer from '../componants/layout/footer';
import ScrollToTop from '../componants/layout/scroll-top';

const RootLayout = () => {
  return (
    <div>
      {/* ScrollToTop component to scroll to the top of the page on route change */}
      <ScrollToTop />
      <Navbar />
      <div>
        {/* Outlet component to render child routes */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
