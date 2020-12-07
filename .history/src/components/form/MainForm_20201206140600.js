import React from "react";
import { Layout } from "antd";
import HomeMenu from "../Menu/HomeMenu";
//import AddQuestion from "./addQuestion";

const MainForm = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
          <HomeMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <HomeMenu />
        </Content>
      </Layout>
    </div>
  );
};

export default MainForm;
