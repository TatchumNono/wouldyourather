import React from "react";
import { Card, Row, Col, Avatar, Divider } from "antd";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
          {" "}
          {users == null
            ? null
            : Object.keys(users).map((key) => (
                <div>
                  <Card
                    style={{
                      textAlign: "center",
                      boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
                    }}
                    key={users[key].id}>
                    <Row>
                      <Col span={5}>
                        <Avatar size={64} src={users[key].avatarURL} />
                      </Col>
                      <Col span={2}>
                        <Divider type='vertical' />
                      </Col>
                      <Col>
                        <h2>{users[key].name}</h2>
                        <br />
                        Answered Question:
                        {Object.keys(users[key].answers).length}
                        <Divider type='horizontal' />
                        Created Question:{users[key].questions.length}
                      </Col>
                      <Col span={2}>
                        <Divider type='vertical' />
                      </Col>
                      <Col>
                        Total:
                        {Object.keys(users[key].answers).length +
                          users[key].questions.length}
                      </Col>
                    </Row>
                  </Card>
                  <br />
                </div>
              ))}
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default LeaderBoard;
