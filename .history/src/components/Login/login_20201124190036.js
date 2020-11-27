import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";
import { Card } from "antd";

const Login = () => {
  const users = useSelector((state) => state.users);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  console.log(users[0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div style={{ marginpadding: "35px 35px" }}>
      <Card bordered={false}>Card content</Card>
    </div>
  );
};

export default Login;
