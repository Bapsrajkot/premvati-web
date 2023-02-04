import Endscreen from "./Endscreen"
import FeedbackForm from "./FeedbackForm"
import Openscreen from "./Openscreen"
import { Routes, Route } from "react-router-dom";
import { Switch } from "@mui/material";
import { useEffect } from "react";


function App() {

  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(res => console.log(res))

  // }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Openscreen />} />
        <Route path='/feedback' element={<FeedbackForm />} />
        <Route path='/thankyou' element={<Endscreen />} />
      </Routes>
    </>
  )
}

export default App
