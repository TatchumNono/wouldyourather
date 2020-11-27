import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

const login = () => {
  const loading = useSelector((state) => state.users.loading);
  return (
    <div>
        
      <Button>users</Button>
    </div>
  );
};

export default login;
