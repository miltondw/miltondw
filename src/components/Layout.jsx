import React from "react";
import { Navbar } from "./Atoms/Navbar";
import { Footer } from "./Molecules/Footer";
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
