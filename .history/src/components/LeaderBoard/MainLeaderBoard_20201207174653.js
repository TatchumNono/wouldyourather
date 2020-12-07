import React from "react";
import { Layout } from "antd";
import LeaderBoard from "./LeaderBoard";
import LoginMenu from "../Menu/lo";

const MainLeaderBoard = () => {
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
          <LeaderBoard />
        </Content>
      </Layout>
    </div>
  );
};

export default MainLeaderBoard;
