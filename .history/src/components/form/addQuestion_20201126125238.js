import React from "react";
import { Form, Input, Card, Row, Col } from "antd";

const AddQuestion = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={14} style={{ padding: "50px" }}>
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
                name='option1'
                rules={[
                  {
                    required: true,
                    message: "Please ente option 1 here!",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: "Please ente option 2 here!",
                  },
                ]}>
                <Input />
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={5}></Col>
      </Row>
    </div>
  );
};

export default AddQuestion;
