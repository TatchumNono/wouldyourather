import React from "react";
import { Layout } from "antd";
import Question from "./Question";
import HomeMenu from "../Menu/HomeMenu";

const MainQuestion = (props) => {
  const { Header, Content } = Layout;
  const { question_id } = props.match.params;
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
          <Question id={question_id} />
        </Content>
      </Layout>
    </div>
  );
};

export default MainQuestion;
