import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import './Header.css'; // 引入样式

const Header = () => (
  <Menu className='header-menu'>
    <Menu.Item name="logo" content="DEV@Deakin" className='header-item' />
    <Menu.Item className='header-item'>
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Menu position="right" className='header-menu-right'>
      <Menu.Item className='header-item'>
        <Button as={Link} to="/post">Post</Button> 
      </Menu.Item>
      <Menu.Item className='header-item'>
        <Button primary as={Link} to="/login">Login</Button> 
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
