import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
import { Divider, Card, Row, Col, Avatar, Button } from "antd";
import { useHistory } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [key, setKey] = useState("tab1");
  const question = useSelector((state) => state.question.question);
  const users = useSelector((state) => state.users.users);
  const authedUser = useSelector((state) => state.users.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const Unanswered = () => {
    return (
      <>
        {
          //verifying if the object is empty or not
          question == null
            ? null
            : Object.keys(question)
                .filter(
                  (key) =>
                    question[key].optionOne.votes.every(
                      (key) => key !== authedUser
                    ) &&
                    question[key].optionTwo.votes.every(
                      (key) => key !== authedUser
                    )
                )
                .map((key) => question[key])
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((item) => (
                  <div key={item.id}>
                    <Card
                      title={`${name(item.author)} asks:`}
                      style={{
                        marginTop: 16,
                      }}
                      type='inner'
                      key={item.id}>
                      <Row>
                        <Col span={7}>
                          <Avatar size={100} src={`${profile(item.author)}`} />
                        </Col>
                        <Col span={2}>
                          <Divider type='vertical' />
                        </Col>
                        <Col span={15}>
                          <b>Would You Rather...</b>
                          <br />
                          <br />
                          {`... ${item.optionOne.text} ...`}
                          <br />
                          <br />
                          <Button
                            type='primary'
                            block
                            onClick={() =>
                              history.push(`/questions/${item.id}`)
                            }>
                            View Poll
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                ))
        }
      </>
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
              .map((key) => question[key])
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((question) => (
                <div key={question.id}>
                  <Card
                    title={`${name(question.author)} asks:`}
                    style={{
                      marginTop: 16,
                    }}
                    type='inner'
                    key={question.id}>
                    <Row>
                      <Col span={7}>
                        <Avatar
                          size={100}
                          src={`${profile(question.author)}`}
                        />
                      </Col>
                      <Col span={2}>
                        <Divider type='vertical' />
                      </Col>
                      <Col span={15}>
                        <b>Would You Rather...</b>
                        <br />
                        <br />
                        {`... ${question.optionOne.text} ...`}
                        <br />
                        <br />
                        <Button
                          type='primary'
                          block
                          onClick={() => history.push(`/poll/${question.id}`)}>
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
  }, [dispatch]);

  /* console.log(
    "unsorted dates",
    question == null
      ? null
      : Object.keys(question).map((key) =>
          new Date(question[key].timestamp).toGMTString()
        )
  );

  console.log(
    "sorted dates",
    question == null
      ? null
      : Object.keys(question)
          .map((key) => question[key].timestamp)
          .sort((a, b) => b - a)
          .map((el) => new Date(el).toGMTString())
  );

  console.log(
    "sorted questions",
    question == null
      ? null
      : Object.keys(question)
          .map((key) => question[key])
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((el) => el)
  ); */

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
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
