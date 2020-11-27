import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
//import { fetchUsers } from "../../redux/users/userAction";

const Login = () => {
  const loading = useSelector((state) => state.error);
  const dispatch = useDispatch();
  return (
    <div>
      <p></p>
      <p>{loading}</p>
      <Button>users</Button>
    </div>
  );
};

export default Login;
