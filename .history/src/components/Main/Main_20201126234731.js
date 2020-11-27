import React from "react";
import { Layout } from "antd";
import Login from "../Login/login";
import Home from "../Home/Home";
import AddQuestion from "../form/addQuestion";
import LoginMenu from "../Menu/loginMenu";
import {useSelector, useDispatch}

const Main = () => {
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
          <AddQuestion />
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
