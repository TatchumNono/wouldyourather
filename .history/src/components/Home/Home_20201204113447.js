import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
import { Divider, Card, Row, Col, Avatar, Button } from "antd";

const Home = () => {
  const [key, setKey] = useState("tab1");
  const question = useSelector((state) => state.question.question);
  const authedUser = useSelector((state) => state.users.authedUser);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  let H;

  let C;

  const tabList = [
    {
      key: "tab1",
      tab: "Unanswered Questions",
    },
    {
      key: "tab2",
      tab: "Answered Questions",
    },
  ];

  console.log(authedUser);

  const Unanswered = () => {
    return (
      <div>
        {
          //verifying if the object is empty or not
          question == null
            ? null
            : Object.keys(question)
                .filter(
                  (key) =>
                    question[key].optionOne.votes.includes(authedUser) ||
                    question[key].optionTwo.votes.includes(authedUser)
                )
                .map((key) => (
                  <div key={question[key].id}>
                    <Card
                      title={`${question[key].author} asks:`}
                      style={{
                        marginTop: 16,
                      }}
                      type='inner'>
                      <Row>
                        <Col span={7}>
                          <Avatar
                            size={64}
                            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgbin.com%2Fpng%2FLGzVdNb1%2Fcomputer-icons-avatar-user-login-png&psig=AOvVaw0YcgQcnZLUQJPKZCXQTVIR&ust=1606733833181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDg8IL2pe0CFQAAAAAdAAAAABAI'
                          />
                        </Col>
                        <Col span={2}>
                          <Divider type='vertical' />
                        </Col>
                        <Col span={15}>
                          <b>Would You Rather...</b>
                          <br />
                          <br />
                          {`... ${question[key].optionOne.text} ...`}
                          <br />
                          <br />
                          <Button type='primary' block>
                            View Poll
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                ))
        }
      </div>
    );
  };

  const Answered = () => {
    return (
      <>
        {question == null
          ? null
          : Object.keys(question)
              .filter(
                (key) =>
                  question[key].optionOne.votes.includes(authedUser) ||
                  question[key].optionTwo.votes.includes(authedUser)
              )
              .map((key) => (
                <div key={question[key].id}>
                  <Card
                    title={`${question[key].author} asks:`}
                    style={{
                      marginTop: 16,
                    }}
                    type='inner'>
                    <Row>
                      <Col span={7}>
                        <Avatar
                          size={64}
                          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgbin.com%2Fpng%2FLGzVdNb1%2Fcomputer-icons-avatar-user-login-png&psig=AOvVaw0YcgQcnZLUQJPKZCXQTVIR&ust=1606733833181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDg8IL2pe0CFQAAAAAdAAAAABAI'
                        />
                      </Col>
                      <Col span={2}>
                        <Divider type='vertical' />
                      </Col>
                      <Col span={15}>
                        <b>Would You Rather...</b>
                        <br />
                        <br />
                        {`... ${question[key].optionOne.text} ...`}
                        <br />
                        <br />
                        <Button type='primary' block>
                          View Poll
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
      </>
    );
  };

  const contentList = {
    tab1: <Unanswered />,
    tab2: <Answered />,
  };

  const onTabChange = (key, type) => {
    console.log(key, type);
    setKey(key);
  };

  useEffect(() => {
    dispatch(fetchQuestion());
    document.title = `${authedUser}`;
  }, [dispatch, authedUser]);

  console.log(
    question == null
      ? null
      : (H = Object.keys(question).filter(
          (key) =>
            question[key].optionOne.votes.includes(authedUser) ||
            question[key].optionTwo.votes.includes(authedUser)
        ))
  );

  let index;
  const matches =[]
  const unmatches = []

  console.log(
    question == null
      ? null
      : Object.keys(question).filter(
          (key) =>
            H.forEach((i) => {
              question[key].id !== i
                ? unmatches.push(question[key].id)
                : matches()
            }),
        )
  );

  return (
    <div>
      {/*
      {
        //verifying if the object is empty or not
        question == null
          ? null
          : Object.keys(question).map((key) => (
              <div>
                <p>author: {question[key].author}</p>
                <p>Would You Rather...</p>
                <p>Option 1: {question[key].optionOne.text}</p>
                <p>Option 2: {question[key].optionTwo.text}</p>
                <Divider />
              </div>
            ))
      } */}

      <Row style={{ padding: "50px" }}>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14}>
          <Card
            style={{
              width: "100%",
              boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
            }}
            tabList={tabList}
            activeTabKey={key}
            onTabChange={(key) => {
              onTabChange(key, "key");
            }}>
            {contentList[key]}
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default Home;
