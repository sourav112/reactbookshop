
import React, { useEffect, useState } from 'react'
import Book_Single_List from './Book_Single_List';
//import BookList from '../../assets/book.json';
import {
    Alert,
    AlertContainer,
    AlertDescription,
    AlertDismiss,
    AlertIcon,
    AlertLink,
    AlertTitle,
  } from 'keep-react'
export default function Book_List_Show() {
    const[books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('book.json')
        .then((response)=>response.json())
        .then((data)=>
            {
                //console.log("Fetch Data:",data);
                setBooks(data);
               
            })
        .catch((error)=>console.error("Error: ",error));
    },[])
  return (
    <div className='container mx-auto items-center justify-center'>
         <Alert>
            <AlertContainer>
                <AlertIcon />
                <AlertTitle>Book Section</AlertTitle>
                <AlertDescription>Select your book from here.</AlertDescription>
            </AlertContainer>

        </Alert>

        <div className='m-6 grid lg:grid-cols-3 gap-4 sm:grid-cols-1'>
            {books?.map((book)=>{
                return <Book_Single_List key={book.bookId} book={book} />;
            })}
        </div>
    </div>
   
  );

}
