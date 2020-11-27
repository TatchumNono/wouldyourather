import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

const Main = () => {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </div>
  );
};

export default Main;
