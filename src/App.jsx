import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/Main/Main.jsx";
import {useEffect, useState} from "react";
import LoaderScreen from "./loaderScreen/LoaderScreen.jsx";

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
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App
