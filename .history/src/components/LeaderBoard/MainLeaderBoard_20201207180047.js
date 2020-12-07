import React from "react";
import { Layout } from "antd";
import LeaderBoard from "./LeaderBoard";
import HomeMenu from "../Menu/loginMenu";

const MainLeaderBoard = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
          <LoginMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <LeaderBoard />
        </Content>
      </Layout>
    </div>
  );
};

export default MainLeaderBoard;
