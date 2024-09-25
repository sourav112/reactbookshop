import React from 'react'
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';
import { Rating, RatingStar } from 'keep-react'

export default function Book_Single_List(props) {
    const {book}=props;
    const handleRating = (value) => {
        console.log(value)
      }
    return (
       <Link to={Routes.Single_Book.DYNAMIC(book.bookId)}>
          <div className='bg-white shadow rounded border border-orange-300 grid grid-cols-2 '>
                      
                      <div className='bg-gray-100 '>
                          <img src={`${book.image}`} className='object-fill h-80 w-128'/>
                      </div>
                    <div className='justify-between items-start text-left px-5'>
                        <p className='text-center' title={book?.bokkName}>Name: {book?.bookName.slice(0,20)}</p>
                        <p className='text-center'>Author: {book?.author}</p>
                        <p className='text-center'>Category: {book?.category}</p>
                        <p className='text-center'>Tag: {book?.tags.join(', ')}</p>
                        <p className='text-center'>Rating: {book?.rating}</p>
                        
                        <p className='text-center p-2'>
                            <button type='button' className='bg-blue-600 rounded px-3 text-white py-3'>Details</button>
                        </p>
                    </div>  
                     
          </div>
       </Link>
    )
  
}
