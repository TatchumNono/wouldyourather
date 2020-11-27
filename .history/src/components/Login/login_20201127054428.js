import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, loginUser } from "../../redux/users/userAction";
//import { fetchQuestion } from "../../redux/questions/questionAction";
import { Card, Row, Col, Select, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
//import login from "../../icons/login.png";

const Login = () => {
  const [authedUser, setAuthedUser] = useState("");
  const { Option } = Select;
  const users = useSelector((state) => state.users.users);
  const question = useSelector((state) => state.question.question);
  // const loading = useSelector((state) => state.loading);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const dispatch = useDispatch();

  /* console.log(
    setTimeout(() => {
      Object.keys(users).map((key, i) => console.log(users[key].id));
    }, 5000),
    "end"
  );
 */
  console.log(isLoggedIn);
  console.log(question);
  //console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
          <Card
            title='Welcome to the Would You Rather App!'
            style={{
              textAlign: "center",
              boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
            }}>
            <p>Please login to continue!</p>
            <h3>Sign In</h3>

            <Select
              defaultValue='Select User'
              size='large'
              style={{ width: 300 }}
              >
              {users
                ? Object.keys(users).map((key) => (
                    <Option value={users[key].id} key={users[key].id}>
                      {" "}
                      <Avatar src={users[key].avatarURL} /> {users[key].name}
                    </Option>
                  ))
                : null}
            </Select>
            <br />
            <br />
            <Button type='primary' onClick={() => dispatch(loginUser())}>
              Login
            </Button>
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default Login;
