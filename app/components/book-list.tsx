import React from 'react'
import BookItem from './book-item'

type Props = {
    booklist:{
        name: string; 
        author: string; 
        price: number; 
        image_url: string;
    }[]  
}

const BookList = ({booklist}: Props) => {
    
  return (
    <div>
        {
            booklist.map((book, index) => (
                <BookItem key={index}  book={book} />
            ))
        }
    </div>
  )
}

export default BookList