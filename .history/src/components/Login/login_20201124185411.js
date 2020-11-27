import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";
import {Card} from 

const Login = () => {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  console.log(users[0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return <div>{loading ? <p>Loading...</p> : <p>Would you rather</p>}</div>;
};

export default Login;
