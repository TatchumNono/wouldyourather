import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";
import { Card, Row, Col, Select, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
//import login from "../../icons/login.png";

const Login = () => {
  const { Option } = Select;
  const users = useSelector((state) => state.users);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  console.log(
    setTimeout(() => {
      Object.keys(users).map((key, i) => console.log(users[key].id));
    }, 5000),
    "end"
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "50px" }}>
          <Card
            title='Welcome to the Would You Rather App!'
            style={{
              textAlign: "center",
              boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
            }}
            /* cover={
              <img
                alt='example'
                src={login}
                style={{ width: 300, height: 150 }}
              />
            } */
          >
            <p>Please login to continue!</p>
            <h3>Sign In</h3>

            <Select defaultValue='Select User'>
              <Option value='jack'>Jack</Option>
              {users
                ? Object.keys(users).map((key) => (
                <Option value={users[key].id}> <Avatar src={users[key].avatarURL}/> {users[key].name}</Option>
                  ))
                : null}
            </Select>
            <br />
            <br />
            <Button type='primary'>Login</Button>
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default Login;
