import React from 'react'
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';

export default function Book_Single_List(props) {
    const {book}=props;
    return (
       <Link to={Routes.Single_Book.DYNAMIC(book.bookId)}>
          <div className='bg-gray-200 shadow rounded border border-orange-300 relative'>
                      
                      <div className='bg-gray-100'>
                          <img src={`${book.image}`}/>
                      </div>
                      
                      <p className='text-center' title={book?.bokkName}>{book?.bookName.slice(0,20)}</p>
                      <p className='text-center'>{book?.author}</p>
                      <p className='text-center p-2'>
                          <button type='button' className='bg-orange-300 rounded px-3 text-white py-3'>Details</button>
                      </p>
          </div>
       </Link>
    )
  
}
