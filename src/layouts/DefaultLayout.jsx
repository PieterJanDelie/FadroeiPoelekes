import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children, header = true, footer = true }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {header && <Header />}
      <main style={{ 
        flex: 1, 
        ...(header ? { padding: "0" } : { padding: "0" })
      }}>
        {!header && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
            <Header />
          </div>
        )}
        {children}
      </main>
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;
