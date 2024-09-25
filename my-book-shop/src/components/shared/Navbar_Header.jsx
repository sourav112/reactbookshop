import React from 'react'
import { Routes } from '../../routes';
import { Link } from 'react-router-dom';
import logo from '../../assets/book_logo.png'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';

function Navbar_Header() {
  const activeLink="bg-black-100 text-white";
  const normalLink="";
  return (
    <Navbar className='bg-blue-200 fixed top-0 w-full z-10'>
      <NavbarContainer>
       <NavbarBrand>
         <Link to={Routes.Home}><img src={logo} alt="keep" width="60" height="30" /></Link>
        </NavbarBrand>
        <NavbarList>
        <Link to={Routes.Home} className={({isActive})=>isActive?activeLink:normalLink}><NavbarItem>Home</NavbarItem></Link>
          <NavbarItem >About</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem>FAQ</NavbarItem>
        </NavbarList>
        <NavbarList>
          <NavbarItem active={true}>Buy Book</NavbarItem>
          <NavbarItem active={true}>Sign IN</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
        <Link to={Routes.Home}><NavbarItem>Home</NavbarItem></Link>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem>FAQ</NavbarItem>
          <NavbarItem active={true}>Buy Book</NavbarItem>
          <NavbarItem active={true}>Sign IN</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
   
  );
}

export default Navbar_Header