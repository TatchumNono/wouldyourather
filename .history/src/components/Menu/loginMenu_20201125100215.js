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
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode='horizontal'>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LoginMenu;
