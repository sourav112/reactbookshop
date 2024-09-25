import React from 'react'
import Navbar_Header from '../components/shared/Navbar_Header'
import { Button } from 'keep-react'
import Book_List_Show from '../components/Product/Book_List_Show' 
import Navbar_Footer from '../components/shared/Navbar_Footer'
import bannnerImg from '../assets/book_store.jpg'

export default function Homepage() {
  return (
    <div className="container mx-auto">
        <Navbar_Header/>
        
        <div id="home">
          <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-20">
               
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to My Book Shop
                  </h1>
                  <p class="mb-8 leading-relaxed">Unlock a World of
                  Stories – Find Your Next Favorite Book at Book Store.</p>
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Book</button>
                    
                  </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img class="object-cover object-center rounded" alt="hero" src={bannnerImg}/>
                </div>
              </div>
            </section>
        </div>
        <Book_List_Show/>
        <Navbar_Footer/>
    </div>
  )
}
