import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MainPage from "../views/index/MainPage";

const IndexPage: React.FC<PageProps> = () => {
  return <MainPage />;
};

export default IndexPage;

// export const Head: HeadFC = () => <title>Home Page</title>
