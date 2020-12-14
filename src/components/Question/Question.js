import React, { useState, useEffect } from "react";
import { Card, Row, Col, Radio, Button, Avatar, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswers } from "../../redux/questions/questionAction";
import { useHistory } from "react-router-dom";

const Question = ({ id }) => {
  const [object, setObject] = useState({
    authedUser: "",
    qid: "",
    answer: "optionOne",
  });
  const question = useSelector((state) => state.question.question);
  const authedUser = useSelector((state) => state.users.authedUser);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setObject((prev) => ({ ...prev, answer: e.target.value }));
  };

  useEffect(() => {
    setObject({ authedUser: authedUser, qid: id });
  }, [authedUser, id]);

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
          {Object.keys(question)
            .filter((key) => question[key].id === id)
            .map((key) => (
              <Card
                title={`${name(question[key].author)} asks:`}
                style={{
                  textAlign: "center",
                  boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
                }}
                key={question[key].id}>
                <Row>
                  <Col span={7}>
                    <Avatar size={64} src={profile(question[key].id)} />
                  </Col>
                  <Col span={2}>
                    <Divider type='vertical' />
                  </Col>
                  <Col>
                    <h3>Would You Rather!</h3>
                    <Radio.Group onChange={onChange} value={object.answer}>
                      <Radio style={radioStyle} value='optionOne'>
                        {question[key].optionOne.text}
                      </Radio>
                      <Radio style={radioStyle} value='"optionTwo"'>
                        {question[key].optionTwo.text}
                      </Radio>
                    </Radio.Group>
                    <Button
                      type='primary'
                      block
                      onClick={() =>
                        dispatch(
                          saveQuestionAnswers(object),
                          history.push(`/poll/${question[key].id}`)
                        )
                      }>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default Question;
