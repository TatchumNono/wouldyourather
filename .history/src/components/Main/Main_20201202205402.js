import React from "react";
import { Layout } from "antd";
import Login from "../Login/login";
import Home from "../Home/Home";
//import AddQuestion from "../form/addQuestion";
import LoginMenu from "../Menu/loginMenu";
import { useSelector } from "react-redux";

const Main = () => {
  const { Header, Content } = Layout;
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const authedUser = useSelector((state) => state.users.authedUser);
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
            {
              isLoggedIn 
            }
          <LoginMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          {isLoggedIn ? <Home /> : <Login />}
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
