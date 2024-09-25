
import React, { useEffect, useState } from 'react'
import Book_Single_List from './Book_Single_List';
//import BookList from '../../assets/book.json';

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
    <div className='grid grid-cols-3 gap-4'>
            {books?.map((book)=>{
                return <Book_Single_List key={book.bookId} book={book} />;
            })}
    </div>
  );

}
