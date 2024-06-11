import {useEffect, useState} from "react";
import Style from './header.module.css'
import HeaderInput from "./inputSearch/Input.jsx";
import ViewAvatar from "./AccountBlock/ViewAvatar.jsx";
export default  function Header(){

    return (
        <>
            <header className={Style.header}>
                <span className={Style.web_Icon}>
                    <h1>SEKKEY</h1>
                </span>
                <span className={Style.search}>
                    <HeaderInput></HeaderInput>
                </span>

                <span>

                </span>
                <span>
                    <ViewAvatar></ViewAvatar>
                </span>
            </header>

        </>
    )
}