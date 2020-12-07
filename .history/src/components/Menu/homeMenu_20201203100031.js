import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import {
  HomeOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const HomeMenu = () => {
  const user = useSelector((state) => state.users.authedUser);
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<EditOutlined />}>
          New Question
        </Menu.Item>
        <Menu.Item key='leaderboard' icon={<BarChartOutlined />}>
          LeaderBoard
        </Menu.Item>
        <Menu.Item to="/" key="2">
    <img className="ant-menu-item" src=="{{ "image.png" | asset_url }}"/>
    <span>Shopify</span>
    <Link to="/shopify">Home</Link>
</Menu.Item>
      </Menu>
    </div>
  );
};

export default HomeMenu;
