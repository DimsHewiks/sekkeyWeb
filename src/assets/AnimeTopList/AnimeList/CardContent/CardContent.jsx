import Style from './CardContent.module.css'
import {useCallback, useEffect, useMemo, useState} from "react";
import ModalWindowAnime from "../modalWindow/ModalWindowAnime.jsx";
import {getAnimeById} from "../../../API/GetAnimeById.js";
export default function CardContent({data}){
    const[modal, SetModal] = useState(true)
    const [dataAnimes, setDataAnime] = useState([])
   
    const controllers = useMemo(()=>{
        return new AbortController()
    },[dataAnimes])
    const signal = controllers.signal
    const [coord, setcoord] = useState(0);
    let position ={

    }
    
        if(data['russian'].length > 30){
            data['russian'] = data['russian'].slice(0, 30) + '...'
        }
        if(data['name'].length > 30){
            data['name'] = data['name'].slice(0, 30) + '...'
        }
  


    function abortFetching() {
        console.log('Now aborting');
        controllers.abort()
    }
    async function MouseMove(e, modal, position){
        console.log(position)
            let rect = e.target.getBoundingClientRect();
            setcoord(rect.left)
            SetModal((prev) =>!prev)
            setTimeout(()=>{
                     getAnimeById(data['id'], signal )
                        .then(dataAnime=>{
                                setDataAnime(dataAnime);
                                position ={
                                    x: e.clientX,
                                    y: e.clientY
                                }
                        })
                         .catch((err)=>{
                             console.log('Соединение закрыто')
                    })
            }, 600)


    }
    function MouseLeaveMove(e){
        SetModal((prev) =>!prev)
        console.log(modal)
        setDataAnime([])
    }
    return(
        <>
        <div
            className={Style.main}
            onMouseEnter={(e) =>MouseMove(e,modal)}
            onMouseLeave={(e)=>{
                MouseLeaveMove(e, position)
                abortFetching()
                console.log(11)
            } }>
            <div className={Style.imgBlock}>
                <img src={'https://shikimori.one' + data['image']['original']} alt=''/>
            </div>
            <div className={Style.TextBlock}>
                <h4>{data['russian'] ? data['russian'] : data['name']}</h4>
                <p>Тип: <b>{data['kind'].toUpperCase()}</b></p>
                <p>Серий: <b>{data['episodes_aired']} / {data['episodes']}</b></p>
            </div>
            {dataAnimes?.name ? <ModalWindowAnime info = {dataAnimes} coord={coord} position ={position}></ModalWindowAnime> : null}
        </div>
        </>
    )
}