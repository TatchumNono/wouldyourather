import React from 'react'
import { Layout } from "antd";

const MainHome = () => {
    const { Header, Content } = Layout;
    return (
        <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}>
          <HomeMenu />
        </Header>
        <Content style={{ backgroundColor: "#fff" }}>
          <AddQuestion />
        </Content>
      </Layout>
    </div>
    )
}

export default MainHome
