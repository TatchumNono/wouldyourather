import React from 'react'
import { Layout } from "antd";
import Login from "../Login/login";
import HomeLogin from "../Menu/homeMenu";
import Home from "../Home/Home";
import LoginMenu from "../Menu/loginMenu";
import { useSelector } from "react-redux";
const MainForm = () => {
    return (
        const { Header, Content } = Layout;
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  //const authedUser = useSelector((state) => state.users.authedUser);
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
          {isLoggedIn ? <HomeLogin /> : <LoginMenu />}
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          {isLoggedIn ? <Home /> : <Login />}
        </Content>
      </Layout>
    </div>
    )
}

export default MainForm
