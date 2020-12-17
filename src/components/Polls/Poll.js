import React, { useState, useEffect, useCallback } from "react";
import { Card, Row, Col, Avatar, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
//Dimport { useHistory } from "react-router-dom";

const Poll = ({ id }) => {
  const [total, setTotal] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const dispatch = useDispatch();
  //const history = useHistory();

  useEffect(() => {
    dispatch(fetchQuestion);
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);
  const question = useSelector((state) => state.question.question);

  const firstVote = useCallback(
    (id) => {
      const first = Object.keys(question)
        .filter((key) => question[key].id === id)
        .map((key) => question[key].optionOne.votes.length);
      return first;
    },
    [question]
  );

  const secondVote = useCallback(
    (id) => {
      const second = Object.keys(question)
        .filter((key) => question[key].id === id)
        .map((key) => question[key].optionTwo.votes.length);
      return second;
    },
    [question]
  );

  const calculate = useCallback(
    (id) => {
      const total = Object.keys(question)
        .filter((key) => question[key].id === id)
        .map(
          (key) =>
            question[key].optionOne.votes.length +
            question[key].optionTwo.votes.length
        );
      return total;
    },
    [question]
  );

  const name = (id) => {
    const name = Object.keys(users)
      .filter((key) => users[key].id === id)
      .map((key) => users[key].name);
    return name;
  };

  const profile = (id) => {
    const profile = Object.keys(users)
      .filter((key) => users[key].id === id)
      .map((key) => users[key].avatarURL);
    return profile;
  };

  useEffect(() => {
    calculate(id);
    setFirst(firstVote(id));
    setSecond(secondVote(id));
    setTotal(calculate(id));
  }, [id, calculate, firstVote, secondVote, dispatch]);

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
        {question == null
          ? null
          : Object.keys(question)
              .filter((key) => question[key].id === id)
              .map((key) => (
                <Card
                  title={`Asked by ${name(question[key].author)}`}
                  style={{
                    textAlign: "center",
                    boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
                  }}
                  key={question[key].id}>
                  <Row>
                    <Col span={7}>
                      <Avatar
                        size={100}
                        src={`${profile(question[key].author)}`}
                      />
                    </Col>
                    <Col span={2}>
                      <Divider type='vertical' />
                    </Col>
                    <Col>
                      Results:
                      <Card
                        type='inner'
                        style={{
                          marginTop: 16,
                        }}>
                        {question[key].optionOne.text}
                        <br />
                        {`${first} out of ${total}`}
                      </Card>
                      <Card
                        type='inner'
                        style={{
                          marginTop: 16,
                        }}>
                        {question[key].optionTwo.text}
                        <br />
                        {`${second} out of ${total}`}
                      </Card>
                    </Col>
                  </Row>
                </Card>
              ))}
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
    </Row>
  );
};

export default Poll;
