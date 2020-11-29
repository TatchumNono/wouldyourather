import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, loginUser } from "../../redux/users/userAction";
import { Card, Row, Col, Select, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
//import login from "../../icons/login.png";

const Login = () => {
  const [authedUser, setAuthedUser] = useState("");
  const { Option } = Select;
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const change = (value) => {
    setAuthedUser(value);
  };

  //console.log(authedUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  /* console.log(
    setTimeout(() => {
      users == null
        ? console.log("is null")
        : Object.keys(users)
            .filter((key) => users[key].id === "sarahedo")
            .map((key, i) => console.log(users[key]));
    }, 6000),
    "end"
  );
 */
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
              onChange={change}>
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
            <Button
              type='primary'
              onClick={() => dispatch(loginUser(authedUser))}>
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
