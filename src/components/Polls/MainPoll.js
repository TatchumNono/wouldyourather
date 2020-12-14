import React from "react";
import { Layout } from "antd";
import Poll from "./Poll";
import HomeMenu from "../Menu/HomeMenu";

const MainPoll = (props) => {
  const { id } = props.match.params;
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
          <Poll id={id} />
        </Content>
      </Layout>
    </div>
  );
};

export default MainPoll;
