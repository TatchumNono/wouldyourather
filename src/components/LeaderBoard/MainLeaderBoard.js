import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import LeaderBoard from "./LeaderBoard";
import HomeMenu from "../Menu/HomeMenu";
import Menus from "../Menu/Menu";

const MainLeaderBoard = () => {
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
          <LeaderBoard />
        </Content>
      </Layout>
    </div>
  );
};

export default MainLeaderBoard;
