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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faList, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'keep-react'
import { Gear, SignIn } from 'phosphor-react'

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
        <Link to={Routes.Home}><NavbarItem className='text-lg text-blue-700'><FontAwesomeIcon icon={faHouse} /> Home</NavbarItem></Link>
          <NavbarItem  className='text-lg text-blue-700'><FontAwesomeIcon icon={faPaperclip} />About</NavbarItem>
          <NavbarItem className='text-lg text-blue-700'><FontAwesomeIcon icon={faList} />Blog</NavbarItem>
         <Link to={Routes.Faq}> <NavbarItem className='text-lg text-blue-700'><FontAwesomeIcon icon={faCircleQuestion} />FAQ</NavbarItem></Link>
        </NavbarList>
        <NavbarList>
          <NavbarItem><Button>
        <Gear size={20} className="mr-1.5" />
        Buy Book
      </Button></NavbarItem>
          <NavbarItem><Button>
        <SignIn size={20} className="mr-1.5" />
        Sign In
      </Button></NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
        <Link to={Routes.Home}><NavbarItem>Home</NavbarItem></Link>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <Link to={Routes.Faq}> <NavbarItem>FAQ</NavbarItem></Link>
          <NavbarItem><Button>
        <Gear size={20} className="mr-1.5" />
        Buy Book
      </Button></NavbarItem>
          <NavbarItem><Button>
        <SignIn size={20} className="mr-1.5" />
        Sign In
      </Button></NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
      </div>
    </Navbar>
   
  );
}

export default Navbar_Header