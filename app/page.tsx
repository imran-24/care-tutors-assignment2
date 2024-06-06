import axios from "axios";
import BookList from "./components/book-list";
import { getBooks } from "./actions/get-books";


export type Params = {
  // searchParams: {
  //   [key: string]: string | string[] | undefined;
  // },
}

export default async function Home({}: Params) {

  // const booklist = await getBooks();
  // console.log(booklist);
  const booklist = [
    {"name":"Pride and Prejudice","author":"Unknown","price":8.851497568238443,"image_url":"https://source.unsplash.com/random/400x600?book"}
  ];

//   const response = fetch("http://192.168.0.157:8000/books/");
//  console.log(response);


  // const booklist = async() => {
  //   'use server'
  //   const response = await fetch("http://192.168.0.157:8000/books/");
  //   console.log(response);
  //   return response;
  // }


  return (
    <div className="flex flex-col h-full w-full mx-auto bg-black">
      <div className="border-b w-full h-20 border-white/20" />

      <BookList booklist={booklist}  />

    </div>
  );
}
