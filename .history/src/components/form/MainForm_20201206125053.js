import React from "react";
import { Layout } from "antd";
//import HomeLogin from "../Menu/homeMenu";
import LoginMenu from "../Menu/loginMenu";
import { useSelector } from "react-redux";
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
