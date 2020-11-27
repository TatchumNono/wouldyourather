import React, { useEffect } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";

const Login = () => {
  //const loading = useSelector((state) => state.error);
  const users = useSelector((state) => state.users);
  const loading
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <p>Would you rather</p>
    </div>
  );
};

export default Login;
