import React, { useState } from "react";
import { Form, Input, Card, Row, Col, Divider, Button } from "antd";

const AddQuestion = () => {
  const [options, setOptions] = useState({ option1: "", option2: "" });

  const onChange = (e) => {
    let name = e.target.name,
    setOptions((prev) => [...prev, e.target.value]);
  };

  const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 16,
    },
  };

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
                  value={options.option1}
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
                  placeholder='Enter option 2 here'
                  value={options.option1}
                  onChange={onChange}
                />
              </Form.Item>
              <Button type='primary' block>
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
