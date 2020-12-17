import React from "react";
import { Layout } from "antd";
import Poll from "./Poll";
import HomeMenu from "../Menu/HomeMenu";

const MainPoll = (props) => {
  const { question_id } = props.match.params;
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
          <Poll id={question_id} />
        </Content>
      </Layout>
    </div>
  );
};

export default MainPoll;
