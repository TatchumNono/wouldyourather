import React from "react";
import { Layout } from "antd";
import Login from "../Login/login";
import LoginMenu from "../Menu/loginMenu";

const Main = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>
          <LoginMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <Login />
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
