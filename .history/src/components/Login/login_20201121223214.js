import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{loading}</p>
      <Button onClick={()=<}>users</Button>
    </div>
  );
};

export default Login;
