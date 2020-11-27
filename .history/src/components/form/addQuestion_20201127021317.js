import React, { useState } from "react";
import { Form, Input, Card, Row, Col, Divider, Button } from "antd";
import { useDispatch } from "react-redux";
import { saveQuestion } from "../../redux/questions/questionAction";

const AddQuestion = () => {
  const [options, setOptions] = useState({
    author: "sarahdeo",
    optionOneText: "",
    optionTwoText: "",
  });

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setOptions((prev) => ({ ...prev, [name]: value }));
  };

  const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const dispatch = useDispatch();
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "80px" }}>
          <Card
            title='Create New Question'
            style={{
              textAlign: "center",
              boxShadow: "1px 1px 25px -17px rgba(0,0,0,0.79)",
            }}>
            <h2>Would You Rather...</h2>
            <Form
              {...layout}
              name='basic'
              initialValues={{
                remember: true,
              }}>
              <Form.Item
                style={{ paddingLeft: "25%" }}
                name='option1'
                rules={[
                  {
                    required: true,
                    message: "Please enter option 1 here!",
                  },
                ]}>
                <Input
                  name='option1'
                  value={options.optionOneText}
                  placeholder='Enter option 1 here'
                  onChange={onChange}
                />
              </Form.Item>
              <Divider>OR</Divider>
              <Form.Item
                style={{ paddingLeft: "25%" }}
                name='option2'
                rules={[
                  {
                    required: true,
                    message: "Please ente option 2 here!",
                  },
                ]}>
                <Input
                  name='optionTwoText'
                  placeholder='Enter option 2 here'
                  value={options.optionTwoText}
                  onChange={onChange}
                />
              </Form.Item>
              <Button
                type='primary'
                block
                onClick={() => dispatch(saveQuestion(options))}>
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default AddQuestion;
