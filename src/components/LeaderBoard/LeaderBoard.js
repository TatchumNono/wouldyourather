import React, { useEffect, useState, useCallback } from "react";
import { Card, Row, Col, Avatar, Divider, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/userAction";

const LeaderBoard = () => {
  const { Ribbon } = Badge;
  const [position, setPosition] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);

  const POS = useCallback(
    () =>
      users == null
        ? setPosition([])
        : setPosition(
            Object.keys(users)
              .map(
                (key) =>
                  Object.keys(users[key].answers).length +
                  users[key].questions.length
              )
              .sort((a, b) => b - a)
              .map((el) => el)
          ),
    [users]
  );

  useEffect(() => {
    POS();
  }, [POS]);

  const Position = (props) => {
    const { index, rank } = props;
    return (
      <div>
        {users == null
          ? null
          : Object.keys(users)
              .filter(
                (key) =>
                  Object.keys(users[key].answers).length +
                    users[key].questions.length ===
                  position[index]
              )
              .map((key) => (
                <div key={users[key].id}>
                  <Ribbon text={rank} placement='start' key={users[key].id}>
                    <Card
                      style={{
                        textAlign: "center",
                        boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
                      }}
                      key={users[key].id}>
                      <Row>
                        <Col span={5}>
                          <Avatar
                            size={100}
                            src={users[key].avatarURL}
                            style={{ paddingTop: "60" }}
                          />
                        </Col>
                        <Col span={2}>
                          <Divider type='vertical' />
                        </Col>
                        <Col span={10}>
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
                          <Card type='inner' title='SCORE'>
                            {Object.keys(users[key].answers).length +
                              users[key].questions.length}
                          </Card>
                        </Col>
                      </Row>
                    </Card>
                  </Ribbon>
                  <br />
                </div>
              ))}
      </div>
    );
  };

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
          <Position index='0' rank='First' />
          <Position index='1' rank='Second' />
          <Position index='2' rank='Third' />
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default LeaderBoard;
