import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAnimeById} from "../../../assets/API/GetAnimeById.js";
import Style from './AnimePageById.module.css'

import InfoHeader from "./infoHeader/InfoHeader.jsx";
import ScreenshotBlock from "./screenshotsBlock/ScreenshotBlock.jsx";
import AnimeFranchiseById from "./AnimeFranchiseById/AnimeFranchiseByid.jsx";
import AnimePersonByAnime from "./AnimePersonsbyAnime/AnimePersonByAnime.jsx";

export default function AnimePageById(){
    const idParam = useParams();
    console.log(idParam['id'])

    const[ animeInfo, setAnimeInfo] = useState();
    console.log(animeInfo)
    useEffect(()=>{
        getAnimeById(idParam['id']).then(data=>{
            setAnimeInfo(data)
        }).then(()=>{

        })
    },[idParam])

    if(animeInfo){
        console.log(animeInfo)
        return (
            <>
                <h2 className={Style.mainTitle}>
                    {animeInfo['russian'] ? animeInfo['russian'] : animeInfo['name']}
                </h2>
                <p className={Style.japaneseName}>{animeInfo['japanese']}</p>
                <InfoHeader info={animeInfo}/>
                <AnimePersonByAnime id  = {animeInfo['id']} />
                <ScreenshotBlock images={animeInfo['screenshots']}/>
                <AnimeFranchiseById id = {animeInfo['id']}/>
            </>
        )
    }


}