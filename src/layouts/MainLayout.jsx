import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setOpen={setOpen} />

      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-grow">{children}</main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
