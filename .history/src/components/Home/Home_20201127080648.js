import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
import { Divider, Card, Row, Col } from "antd";

const Home = () => {
  const question = useSelector((state) => state.question.question);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const tabList = [
    {
      key: "tab1",
      tab: "tab1",
    },
    {
      key: "tab2",
      tab: "tab2",
    },
  ];
  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  console.log(question);
  return (
    <div>
      {/* <p>Home</p>

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
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col
          xs={20}
          sm={16}
          md={12}
          lg={8}
          xl={14}
          style={{ padding: "80px" }}></Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default Home;
