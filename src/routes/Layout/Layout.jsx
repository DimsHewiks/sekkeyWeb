import { Outlet } from "react-router-dom";
import Header from "../../assets/components/header/Header";
export default function Layout(){

    return(
        <>
        <Header></Header>

        <Outlet></Outlet>
        
        <footer></footer>
        </>
    )

}