import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({
  children,
  header = true,
  footer = true,
  transparentHeader = false,
}) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {header && <Header transparentHeader={transparentHeader} />}
      <main
        style={{
          flex: 1,
          paddingTop: header ? "0" : "0",
        }}
      >
        {children}
      </main>
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;
