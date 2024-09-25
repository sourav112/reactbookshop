import React from 'react'
import Navbar_Header from '../components/shared/Navbar_Header'
import { Button } from 'keep-react'
import Book_List_Show from '../components/Product/Book_List_Show' 
import Navbar_Footer from '../components/shared/Navbar_Footer'

export default function Homepage() {
  return (
    <div className="container mx-auto">
        <Navbar_Header/>
        <div className="flex justify-center items-center">
          <h1 className='p-4 '>Unlock a World of Stories Find Your Next Favorite Book at BookShop</h1>
          <Button>Buy Book!!</Button>
        </div>
        <Book_List_Show/>
        <Navbar_Footer/>
    </div>
  )
}
