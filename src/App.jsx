import Layout from "./routes/Layout/Layout.jsx";
import Main from "./assets/components/Main/Main.jsx";
import Auth from "./routes/authPage/Auth.jsx";
import RegistrationPage from "./routes/registationPage/RegistrationPage.jsx";


import {useEffect, useState} from "react";
import LoaderScreen from "./loaderScreen/LoaderScreen.jsx";
import { Route, Routes } from 'react-router-dom'
import AnimeMainPage from "./routes/animePage/AnimeMainPage/AnimeMainPage.jsx";
import AnimePageById from "./routes/animePage/animePageById/AnimePageById.jsx";
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
          <Route path="/anime" element ={<AnimeMainPage />} />
          <Route path='/anime/:id' element={<AnimePageById />} />
          <Route path="*" element ={<h1>Куда полез бля</h1>} />

        </Route>
        <Route path="/registration" element = {<RegistrationPage />} />
        <Route path="auth" element ={<Auth></Auth>} />

      </Routes>
      
    </>
  )
}

export default App
