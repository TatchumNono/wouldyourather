import React from "react";
import { Layout } from "antd";
import SubLogin from "./SubLogin";
import Menus from "../Menu/Menu";

const Login = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
          <Menus />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <SubLogin />
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
