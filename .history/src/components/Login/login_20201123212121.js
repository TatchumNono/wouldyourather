import React, { useEffect } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";

const Login = () => {
  //const loading = useSelector((state) => state.error);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(()=>{
    dispatch()
  })
  return (
    <div>
      <p>Would you rather</p>
      {users.length ? users.map((user) => <p>user[0].id</p>) : null}
      <Button onClick={() => }>users</Button>
    </div>
  );
};

export default Login;
