import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import HomeMenu from "../Menu/HomeMenu";
import Menus from "../Menu/Menu";
import Home from "./Home";

const MainHome = () => {
  const { Header, Content } = Layout;
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
          {isLoggedIn ? <HomeMenu /> : <Menus />}
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <Home />
        </Content>
      </Layout>
    </div>
  );
};

export default MainHome;
