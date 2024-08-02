import style from './main.module.css'
import Carusel from "./Main_components/Carusel.jsx";
import TypeListBtnBlock from "../../AnimeTopList/TypeListBtn/TypeListBtnBlock.jsx";
import {useState} from "react";
import AnimeList from "../../AnimeTopList/AnimeList/AnimeList.jsx";
import GroupBlock from "../../ContentgroupBlock/GroupBlock.jsx";
import Header from '../header/Header.jsx';



export default function Main(){
    const [AnimeCard, SetanimeCard] = useState('season');
    return(
        <><Header></Header>
            <article className={style.Main}>
                <Carusel></Carusel>
                <TypeListBtnBlock SetanimeCard = {SetanimeCard}></TypeListBtnBlock>
                <AnimeList ListType={AnimeCard}></AnimeList>
                <GroupBlock></GroupBlock>
            </article>
        </>
    )
}