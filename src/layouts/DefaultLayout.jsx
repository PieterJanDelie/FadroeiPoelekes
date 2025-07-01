import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children, header = true, footer = true }) => {
  return (
    <div>
      {header && <Header />}
      <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;
