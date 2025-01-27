import React from "react";
import MainHeader from "../../components/main-header/MainHeader";
import MainSection from "../../components/main-section/MainSection";
import MainAbout from "../../components/main-about/MainAbout";
import PageLayout from "../../layout/PageLayout";

const MainPage = () => {
  return (
    <PageLayout>
      <MainHeader />
      <MainSection />
      <MainAbout />
    </PageLayout>
  );
};

export default MainPage;
