import {getAnimePersonByAnime} from "./api/getAnimePersonByAnime.js";
import {useEffect, useState} from "react";

import Style from './AnimePersonByAnime.module.css'
export default function AnimePersonByAnime({id}){
    const [persons, setPersons] = useState();
    let mainPersons = []
    const [mainPerson, setMainPerson] = useState()
    const [SupportingPerson, setSupportingPerson] = useState()
    useEffect(()=>{
        getAnimePersonByAnime(id).then(data=>{
            setPersons(data)
            data.map((el)=>{
                if(el['roles'][0] == "Main"){
                    mainPersons.push(el)
                }
                setMainPerson(mainPersons)
            })
        })
    },[id])
    return(
        <>
            <h2 className={Style.title}>Главные герои</h2>
            <div className={Style.MainBlock}>

                {mainPerson ? mainPerson.map((el) => (
                    <div key={el['character']['id']} className={Style.card}>
                        <img src={"https://shikimori.one/" + el['character']['image']['original']}/>
                        <div className={Style.name}>
                            {el['character']['russian'] ? el['character']['russian'] : el['character']['name']}
                        </div>
                    </div>
                )) : null}
            </div>
        </>
    )
}