import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import {
  HomeOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

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
        <Menu.Item>
            
          <Avatar>U</Avatar>
          </>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HomeMenu;
