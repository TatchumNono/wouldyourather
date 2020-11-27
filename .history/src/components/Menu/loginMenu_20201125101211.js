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
        <Menu.Item key='mail' icon={<MailOutlined />}>
          Nwe
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LoginMenu;
