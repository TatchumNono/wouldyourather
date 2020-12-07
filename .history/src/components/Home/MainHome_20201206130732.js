import React from "react";
import { Layout } from "antd";
import HomeMenu from "../Menu/HomeMenu";
import Home from "./Home";
const MainHome = () => {
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
          <Home />
        </Content>
      </Layout>
    </div>
  );
};

export default MainHome;
