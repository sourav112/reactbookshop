
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import bookjson from '../book.json'
import axios from 'axios';
import Navbar_Header from '../components/shared/Navbar_Header';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, toast } from 'keep-react';
import Navbar_Footer from '../components/shared/Navbar_Footer';

export default function Book_Details_Page() {
    let{bookId}=useParams();
    const[books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('../book.json')
        .then((response)=>response.json())
        .then((data)=>
            {
               // console.log("Fetch Data:",data);
               setBooks(data.filter((str) => str.bookId==bookId));
               
            })
        .catch((error)=>console.error("Error: ",error));
    },[])

  

  return (
    <div className='mx-auto'>
            {books?.map((book)=>{
               return  <div  key={book.bookId}> 
               
              
               <Navbar_Header/>
               <div id="home">
                
          <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-20">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img class="object-cover object-center rounded" alt="hero" src={book?.image}/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{book?.bookName}
                  </h1>
                  <p class=" leading-relaxed">Author: {book?.author}</p>
                  <p class=" leading-relaxed">Category: {book?.category}</p>
                  <p class=" leading-relaxed">Review: {book?.review}</p>
                  <p class=" leading-relaxed">Tags: {book?.tags.join(', ')}</p>
                  <p class="leading-relaxed">Total Pages: {book?.totalPages}</p>
                  <p class="leading-relaxed">Publisher: {book?.publisher}</p>
                  <p class="leading-relaxed">Year Of Publishing: {book?.yearOfPublishing}</p>
                  <p class="leading-relaxed">Rating: {book?.rating}</p>
                  <div class="flex justify-center">
                  <Button className='m-4' onClick={() => toast.success(`${book.bookId}.${book.bookName} has been successfully added to
the Wishlist.`)}>Wish To Read</Button>
            <Button className='m-4' onClick={() => toast.info(`${book.bookId}.${book.bookName} has been successfully added to
the Cart.`)}>Add To Cart</Button>

                    
                  </div>
                </div>
                
              </div>
            </section>
        </div>
               <Navbar_Footer/>
               </div>
            })}
    </div>
  )
}
