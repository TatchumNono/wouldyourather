import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const LoginMenu = () => {
  return (
    <div>
      <Menu
        mode='horizontal'
        style={{ boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)" }}>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<EditOutlined />}>
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
