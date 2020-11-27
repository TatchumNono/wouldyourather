import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";

const Login = () => {
  const loading = useSelector((state) => state.error);
  const 
  const dispatch = useDispatch();
  return (
    <div>
      <p>Would you rather</p>
      <p>{loading}</p>
      <Button onClick={() => dispatch(fetchUsers())}>users</Button>
    </div>
  );
};

export default Login;
