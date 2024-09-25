
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import bookjson from '../book.json'
import axios from 'axios';
import Navbar_Header from '../components/shared/Navbar_Header';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, toast } from 'keep-react';

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
    <div>
            {books?.map((book)=>{
               return  <div  key={book.bookId}> 
               
              
               <Navbar_Header/>
        
        <Card>
          <CardHeader>
            <img src={book?.image} 
            className="rounded-t-xl" alt="image" width={600} height={300} />
          </CardHeader>
          <CardContent className="space-y-3">
            <CardTitle>{book?.bookName}</CardTitle>
            <CardDescription>
            {book?.review}
            </CardDescription>
            <Button className='m-4' onClick={() => toast.success(`${book.bookId}.${book.bookName} has been successfully added to
the Wishlist.`)}>Wish To Read</Button>
            <Button onClick={() => toast.info(`${book.bookId}.${book.bookName} has been successfully added to
the Cart.`)}>Add To Cart</Button>
            
          </CardContent>
        </Card>
    
               
               </div>
            })}
    </div>
  )
}
