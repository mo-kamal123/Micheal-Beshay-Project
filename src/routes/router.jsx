import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./root-layout";
import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import Coaches from "../pages/coaches";
import BecomeCoach from "../pages/become-coach";
import ContactUs from "../pages/contact-us";
import CoachProfile from "../pages/coach-profile";
import CoachFeedback from "../componants/sections/coach-profile/coach-feedback";
import CoachPlan from "../componants/sections/coach-profile/coach-plans";
import CoachDetails from "../componants/sections/coach-profile/coach-details";
import Payment from "../componants/sections/coach-profile/payment";
import DateSelection from "../componants/sections/coach-profile/data-selection";
import BookingConfirmation from "../componants/sections/coach-profile/confirm-booking";
import UserProfile from "../pages/user-profile";
import RechargeWallet from "../componants/sections/payments/recharge-wallet";
import RateSesstion from "../componants/sections/user-profile/rate-session";
import Auth from "../pages/auth";
import Login from "../componants/sections/auth/login";
import Register from "../componants/sections/auth/register";
import Verify from "../componants/sections/auth/verfiy";
import FreeSession from "../componants/sections/home/free-session";
import YourProfile from "../componants/sections/user-profile/your-profile";
import YourSesstions from "../componants/sections/user-profile/your-sessions";
import YourWallet from "../componants/sections/user-profile/your-wallet";
import { ProtectedRoute } from "./protected-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Public Routes
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "free-session", element: <FreeSession getSession={true} /> },
      { path: "coaches", element: <Coaches /> },
      {
        path: "coaches/:coachId",
        element: <CoachProfile />,
        children: [
          { index: true, element: <CoachDetails /> },
          { path: "book-session", element: <CoachPlan /> },
        ],
      },
      { path: "became-coach", element: <BecomeCoach /> },
      { path: "contact-us", element: <ContactUs /> },

      // Protected Routes (Profile + Payments)
      {
        element: <ProtectedRoute />,
        children: [
          // Protected Profile Routes
          {
            path: "profile",
            element: <UserProfile />,
            children: [
              { index: true, element: <YourProfile /> },
              { path: "sessions", element: <YourSesstions /> },
              { path: "wallet", element: <YourWallet /> },
              { path: "recharge-wallet", element: <RechargeWallet /> },
            ],
          },
          { path: "rate-sesstion", element: <RateSesstion /> },

          // Protected Payment Routes
          { path: "session/payment", element: <Payment /> },
          { path: "session/select-date", element: <DateSelection /> },
          { path: "confirm-booking", element: <BookingConfirmation /> },
        ],
      },
    ],
  },
  // Auth Routes (Public)
  { 
    path: "auth", 
    element: <Auth isAuthenticated={false} />, 
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "verify", element: <Verify /> },
    ] 
  },
]);