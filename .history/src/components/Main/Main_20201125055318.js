import React from "react";
import { Layout } from "antd";
import login from "../Login/login";

const Main = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>Hello</Header>
        <Content>
          <login />
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
