import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import {
  HomeOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { Link } from "react-router-dom";
import { LOGOUT_USER } from "../../redux/users/userType";
import {}

const HomeMenu = () => {
  const user = useSelector((state) => state.users.authedUser);
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item active key='home' icon={<HomeOutlined />}>
          <Link to='/home' />
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<EditOutlined />}>
          <Link to='/form' />
          New Question
        </Menu.Item>
        <Menu.Item key='leaderboard' icon={<BarChartOutlined />}>
          <Link to='/lead' />
          LeaderBoard
        </Menu.Item>
        <Menu.Item>
          <Avatar>U</Avatar> {user}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HomeMenu;
