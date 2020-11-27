import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";
import { Card } from "antd";

const Login = () => {
  const users = useSelector((state) => state.users);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  console.log(users.map((item) => console.log(item.[6ni6ok3ym7mf1p33lnez].id)));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#ececec",
      }}>
      <Card title='Card title'>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Login;
