import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";

const Login = () => {
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{loading}</p>
      <Button onClick={() => dispatch()}>users</Button>
    </div>
  );
};

export default Login;
