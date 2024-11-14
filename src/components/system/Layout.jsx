import PropTypes from "prop-types";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "../ui/toaster";

export default function Layout() {
  return (
    <main className="mx-auto w-screen bg-gray-200">
      <>
        <Outlet />
      </>
      <Footer />
      <Toaster />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
