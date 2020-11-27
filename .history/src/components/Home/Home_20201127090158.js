import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
import { Divider, Card, Row, Col, Avatar } from "antd";

const Home = () => {
  const [key, setKey] = useState("tab1");
  const question = useSelector((state) => state.question.question);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

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

  const Unanswered = () => {
    return (
      <div>
        {
          //verifying if the object is empty or not
          question == null
            ? null
            : Object.keys(question).map((key) => (
                <>
                  <Card
                    title={`${question[key].author} asks:`}
                    style={{
                      marginTop: 16,
                    }}
                    type='inner'>
                    <Row>
                      <Col span={8}>
                        <Avatar>U</Avatar>
                      </Col>
                      
                      <Col span={16}>
                        <b>Would You Rather...</b> <br />
                        {`... ${question[key].optionOne.text} ...`}
                      </Col>
                    </Row>
                  </Card>
                </>
              ))
        }
      </div>
    );
  };

  const contentList = {
    tab1: <Unanswered />,
    tab2: <p>Answered</p>,
  };

  const onTabChange = (key, type) => {
    console.log(key, type);
    setKey(key);
  };

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  console.log(question);
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
