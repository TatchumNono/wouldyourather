import React from "react";
import { Layout } from "antd";
import login from './'

const Main = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>Hello</Header>
        <Content>HI</Content>
      </Layout>
    </div>
  );
};

export default Main;
