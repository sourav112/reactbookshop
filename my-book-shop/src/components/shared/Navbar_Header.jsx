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
      <div className='ml-5 mr-5'>
      <NavbarContainer >
       <NavbarBrand>
         <Link to={Routes.Home}><img src={logo} alt="keep" width="40" height="20" /></Link>
        </NavbarBrand>
        <NavbarList>
        <Link to={Routes.Home}><NavbarItem className='text-lg text-blue-700'>Home</NavbarItem></Link>
          <NavbarItem  className='text-lg text-blue-700'>About</NavbarItem>
          <NavbarItem className='text-lg text-blue-700'>Blog</NavbarItem>
         <Link to={Routes.Faq}> <NavbarItem className='text-lg text-blue-700'>FAQ</NavbarItem></Link>
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
          <Link to={Routes.Faq}> <NavbarItem>FAQ</NavbarItem></Link>
          <NavbarItem active={true}>Buy Book</NavbarItem>
          <NavbarItem active={true}>Sign IN</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
      </div>
    </Navbar>
   
  );
}

export default Navbar_Header