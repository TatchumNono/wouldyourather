import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
import { Divider, Card, Row, Col } from "antd";

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

  const contentList = {
    tab1: <p>Unanswered</p>,
    tab2: <p>Answered</p>,
  };

  const Unanswered = () => {
    return (
      <div>
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
        }
      </div>
    );
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
            style={{ width: "100%" }}
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
