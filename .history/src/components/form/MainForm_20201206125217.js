import React from "react";
import { Layout } from "antd";
import HomeMenu from "../Menu/HomeMenu";
import AddQuestion from "./addQuestion";

const MainForm = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>
          <LoginMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <AddQuestion />
        </Content>
      </Layout>
    </div>
  );
};

export default MainForm;
