import React from "react";
import { Layout } from "antd";
import Login from "../Login/login";
import AddQuestion from "../form/addQuestion";
import LoginMenu from "../Menu/loginMenu";

const Main = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
            boxShadow: "0px 13px 33px -30px rgba(0,0,0,0.75)",
          }}>
          <LoginMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff", padding: "5%" }}>
          <AddQuestion />
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
