import Image from "next/image"


type Props = {
    book: {
        name: string; 
        author: string; 
        price: number; 
        image_url: string;
    }
}

const BookItem = ({book}: Props) => {
  return (
    <div className="flex flex-col items-center space-y-3 text-white">
        <Image 
        height={300}
        width={300}
        src={book.image_url}
        alt="book"
        className="rounded-xl"
        />
        <div className="flex items-center justify-between">
            <p className="text-xl">{book.name}</p>
            <p>${book.price}</p>
        </div>
    </div>
  )
}

export default BookItem