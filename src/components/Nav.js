
import { Redirect } from 'react-router-dom'
import React from 'react';
import { Layout, Menu, Link } from 'antd';




class NavbarFeatures extends React.Component {

    state = {
        redirect: false
      }
    
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/'/>
        }
      }
   
    render() {
        return (
            <div>
                <Layout>
                    {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}> */}
                    {/* <div className="logo" /> */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        {this.renderRedirect()}
                        <Menu.Item key="1"    ><a href="/" >Home</a></Menu.Item>
                        <Menu.Item key="2"  ><a href="/signup" >Signup</a></Menu.Item>
                        <Menu.Item key="3"   ><a href="/login" >Login</a></Menu.Item>
                        <Menu.Item key="4"><a href="/logout" >Logout</a></Menu.Item>
                        <Menu.Item key="4"><a href="/profile" >Profile</a></Menu.Item>
                        
                    </Menu>
                    {/* </Header> */}
                 
                </Layout>
                
          </div>
        );
    }
}




export default NavbarFeatures
