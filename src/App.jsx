import Layout from "./routes/Layout/Layout.jsx";
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
        
        <Route path="/" element = { <Layout />}>
          <Route index element ={<Main></Main>} />
          <Route path="*" element ={<h1>Куда полез бля</h1>} />
        </Route>

        <Route path="auth" element ={<Auth></Auth>} />
      </Routes>
      
    </>
  )
}

export default App
