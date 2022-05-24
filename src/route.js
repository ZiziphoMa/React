import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "bootstrap";
// import Deatils from "./pages/deatils";



import React from 'react'

function route() {
  return (
 <BrowserRouter>
 <Routes>
   <Route path="deatils" element={<Button />} >
   </Route>


 </Routes>
 

 
 </BrowserRouter>
  )
}



export default route