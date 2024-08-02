import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/Main/Main.jsx";
import Auth from "./routes/authPage/Auth.jsx";


import {useEffect, useState} from "react";
import LoaderScreen from "./loaderScreen/LoaderScreen.jsx";
import { Route, Routes, Link } from 'react-router-dom'
function App() {

  const [onload, setOnload] = useState(false);
  useEffect(()=>{
    window.onload = function () {
        setOnload(true);
      }
  },[])
  
  return (
    <>
      {!onload && <LoaderScreen></LoaderScreen>}
      <Routes>
        <Route path="/" element ={<Main></Main>} />
        <Route path="/auth" element ={<Auth></Auth>} />
        <Route path="*" element ={<h1>Куда полез бля</h1>} />
      </Routes>
      
    </>
  )
}

export default App
