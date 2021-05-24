import {FC} from "react"
import styles from './index.less';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import { history } from 'umi';
import "./css.css"


const IndexPage:FC =(children) =>{
  return (
      <Layout style={{height:'100%'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" style={{height:'60px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height:'100%'}} className={styles.leftStyle}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick ={() =>{ history.push('/home')}}>
              第一頁
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick ={() =>{ history.push('/example');}}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick ={() =>{ history.push('/users')}}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '20px 16px 20px' }}>
            {children.children}
          </Content>
        </Layout>
      </Layout>
  );
}
export default IndexPage
