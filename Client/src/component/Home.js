import React, { useState } from 'react';

export default function Home() {
  // const [count,setCount]=useState(0);
  const [show, setShow] = useState(true);
  const [apple, setApple] = useState("red")

  const change = () => {
    // setCount(count+1);
    setShow(!show);
    setApple("green");
  }
  return (
    <div>Home <br /> <br />
      This project show a CRUD Apllication :- <br /> <br />

      Created a to-do application with following features: <br />
        1. User can create task, delete it, and modify it. <br />
        2. Admin can view all the user and their task list <br />
        3  Used node js for backend server and mongoDB as database <br />
        4  Used html, css, javascript, and React.js for frontend <br />
    </div>

  )
}
