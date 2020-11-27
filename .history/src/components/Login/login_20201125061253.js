import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";
import { Card, Row, Col } from "antd";

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
        <Col xs={2} sm={4} md={6} lg={8} xl={5}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "30px" }}>
          <Card
            title='Wlcome to the Would You Rather App!'
            bordered={false}
            style={{ textAlign: "center" }}>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}>
          Col
        </Col>
      </Row>
    </div>
  );
};

export default Login;
