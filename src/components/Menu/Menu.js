import React, { useState } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { Menu } from "antd";
import {
  HomeOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
//import Avatar from "antd/lib/avatar/avatar";
import { Link } from "react-router-dom";
//import { logoutUser } from "../../redux/users/userAction";

const Menus = () => {
  const [current, setCurrent] = useState("home");
  //const users = useSelector((state) => state.users.users);
  //const user = useSelector((state) => state.users.authedUser);
  //const dispatch = useDispatch();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu mode='horizontal' onClick={handleClick} selectedKeys={[current]}>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          <Link to='/home' />
          Home
        </Menu.Item>
        <Menu.Item key='question' icon={<EditOutlined />}>
          <Link to='/add' />
          New Question
        </Menu.Item>
        <Menu.Item key='leaderboard' icon={<BarChartOutlined />}>
          <Link to='/leaderboard' />
          LeaderBoard
        </Menu.Item>
        <Menu.Item>
          <Link to='/' />
          Log In
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Menus;
