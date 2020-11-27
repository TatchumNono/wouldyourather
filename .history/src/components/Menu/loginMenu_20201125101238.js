import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const LoginMenu = () => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home' icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<MailOutlined />}>
          New Question
        </Menu.Item>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          LeaderBoard
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LoginMenu;
