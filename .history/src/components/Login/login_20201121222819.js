import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

const login = () => {
    const useSelector = (state) => (state.users)
  return (
    <div>
      <Button>users</Button>
    </div>
  );
};

export default login;
