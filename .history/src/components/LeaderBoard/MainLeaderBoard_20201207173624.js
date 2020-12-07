import React from 'react'
import { Layout } from "antd";
const MainLeaderBoard = () => {
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
          <Home />
        </Content>
      </Layout>
        </div>
    )
}

export default MainLeaderBoard
