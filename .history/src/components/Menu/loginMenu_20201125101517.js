import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const LoginMenu = () => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<AppstoreOutlined />}>
          New Question
        </Menu.Item>
        <Menu.Item key='leaderboard' icon={<SettingOutlined />}>
          LeaderBoard
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LoginMenu;
