import React, { useState, useEffect, useCallback } from "react";
import { Card, Row, Col, Avatar, Divider, Progress, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";

const Poll = ({ id }) => {
  const { Ribbon } = Badge;
  const [total, setTotal] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [firstP, setFirstP] = useState(0);
  const [secondP, setSecondP] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  const authedUser = useSelector((state) => state.users.authedUser);
  const users = useSelector((state) => state.users.users);
  const question = useSelector((state) => state.question.question);

  const firstVote = useCallback(() => {
    setFirst(
      Object.keys(question)
        .filter((key) => question[key].id === id)
        .map((key) => question[key].optionOne.votes.length)
    );
  }, [id, question]);

  const secondVote = useCallback(() => {
    setSecond(
      Object.keys(question)
        .filter((key) => question[key].id === id)
        .map((key) => question[key].optionTwo.votes.length)
    );
  }, [id, question]);

  const calculate = useCallback(() => {
    setTotal(
      Object.keys(question)
        .filter((key) => question[key].id === id)
        .map(
          (key) =>
            question[key].optionOne.votes.length +
            question[key].optionTwo.votes.length
        )
    );
  }, [id, question]);

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

  const firstOptionPercentage = useCallback(() => {
    setFirstP(Math.round((first / total) * 100));
  }, [first, total]);

  const secondOptionPercentage = useCallback(() => {
    setSecondP(Math.round((second / total) * 100));
  }, [second, total]);

  useEffect(() => {
    firstVote(id);
    secondVote(id);
    calculate(id);
  }, [id, calculate, firstVote, secondVote]);

  useEffect(() => {
    firstOptionPercentage();
    secondOptionPercentage();
  }, [firstOptionPercentage, secondOptionPercentage]);

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
                      {question[key].optionOne.votes.includes(authedUser) ? (
                        <Ribbon text='Your vote' placement='start'>
                          <Card
                            type='inner'
                            style={{
                              marginTop: 16,
                              paddingRight: 30,
                              paddingLeft: 30,
                            }}>
                            {question[key].optionOne.text}
                            <br />
                            <Progress percent={firstP} size='small' />
                            <br />
                            {`${first} out of ${total}`}
                          </Card>
                        </Ribbon>
                      ) : (
                        <Card
                          type='inner'
                          style={{
                            marginTop: 16,
                            paddingRight: 30,
                            paddingLeft: 30,
                          }}>
                          {question[key].optionOne.text}
                          <br />
                          <Progress percent={firstP} size='small' />
                          <br />
                          {`${first} out of ${total}`}
                        </Card>
                      )}
                      {question[key].optionTwo.votes.includes(authedUser) ? (
                        <Ribbon text='Your vote' placement='start'>
                          <Card
                            type='inner'
                            style={{
                              marginTop: 16,
                              paddingRight: 30,
                              paddingLeft: 30,
                            }}>
                            {question[key].optionTwo.text}
                            <br />
                            <Progress percent={secondP} size='small' />
                            <br />
                            {`${second} out of ${total}`}
                          </Card>
                        </Ribbon>
                      ) : (
                        <Card
                          type='inner'
                          style={{
                            marginTop: 16,
                            paddingRight: 30,
                            paddingLeft: 30,
                          }}>
                          {question[key].optionTwo.text}
                          <br />
                          <Progress percent={secondP} size='small' />
                          <br />
                          {`${second} out of ${total}`}
                        </Card>
                      )}
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
