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
      <Menu mode='horizontal' style={{box}}>
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
