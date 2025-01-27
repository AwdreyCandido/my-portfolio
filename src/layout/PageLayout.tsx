import React from "react";
import MainContact from "../components/main-contact/MainContact";
import MainFooter from "../components/main-footer/MainFooter";
import NavBar from "../components/nav-bar/NavBar";

const PageLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      {children}
      <MainContact />
      <MainFooter />
    </div>
  );
};

export default PageLayout;
