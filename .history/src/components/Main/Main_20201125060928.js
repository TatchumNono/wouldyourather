import React from "react";
import { Layout } from "antd";
import Login from "../Login/login";

const Main = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>Hello</Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <Login />
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
