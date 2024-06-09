import './AnimeList.css'
import CardContent from "./CardContent/CardContent.jsx";
import {useEffect, useState} from "react";
import {getAnimeByType} from "../../API/GetAnimeByType.js";
import {CSSTransition} from "react-transition-group";

export default function AnimeList({ListType}){
    console.log(navigator)
    const [dataAnime, setDataAnime] = useState([])
    const [list, setList] = useState(false)

    useEffect(() => {
        setList(false)

        getAnimeByType(ListType).then(data =>{
            setDataAnime(data);
            if(dataAnime){
                // setTimeout(()=> setList(true), 700)
                setList(true)
            }

        })

    }, [ListType]);



    return(
        <>
            <CSSTransition  in = {list} className ={'main'} timeout={1000} >
            <div >
                {dataAnime ? dataAnime.map((el)=>(
                        <CardContent key = {el['id']} data={el}></CardContent>
                )) : null}
            </div>
            </CSSTransition>
        </>
    )
}