import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginMenu = () => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          <Link to='/' />
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<EditOutlined />}>
          <Link to='/form' />
          New Question
        </Menu.Item>
        <Menu.Item key='leaderboard' icon={<BarChartOutlined />}>
          LeaderBoard
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LoginMenu;

//boxShadow: "box-shadow: 0px 13px 18px -15px rgba(0,0,0,0.75)"
