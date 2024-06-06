

// export const getUsers = async()=>{
//     const res = await fetch("https://dummyjson.com/users");
//     const {users} = await res.json()
//     return users;
// }


export  const getBooks = async() => {
    const response = await fetch("http://192.168.0.157:8000/books/");
    console.log(await response.json());
    return response;
  }
