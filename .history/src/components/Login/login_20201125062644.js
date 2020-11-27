import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";
import { Card, Row, Col } from "antd";
import login from "../../icons/login.png";

const Login = () => {
  const users = useSelector((state) => state.users);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "30px" }}>
          <Card
            title='Welcome to the Would You Rather App!'
            bordered={false}
            style={{ textAlign: "center" }}
            cover={
              <img
                alt='example'
                src={login}
                style={{ width: 100, height: 30 }}
              />
            }>
            <p>Please login to continue!</p>
            <h3>Sign In</h3>
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default Login;
