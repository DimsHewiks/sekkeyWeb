import DOMpurify from "dompurify";
import {Search} from "../icons/searchIcon.js";
import Style from './input.module.css'
import {useEffect, useMemo, useRef, useState} from "react";
import useInput from "../../../hooks/useInput.js";
import { searchList } from "../../../API/searchList.js";
import SearchAnimeBlock from "../../../SearchAnimeBlock/SearchAnimeBlock.jsx";
export  default function HeaderInput(){

        const list ={
            0: 'Аниме',
            1: 'Манга',
            2: 'Персонажи',
        }

    const[genresList, setGenresList] = useState(list[0]);
    const ref = useRef('');
    const [name, setName] = useState(ref.current.value)
    const [animeList, setAnimeList] = useState([])
    function insertValue (e){
        setName(e.target.value)
        
    }
    let searchResult;
    useEffect(()=>{
        console.log(name)
        if(name){
            const debounce = setTimeout(()=>{
                console.log(11)
                searchResult = searchList(name).then(data=>{
                setAnimeList(data);
            })    
        
            
        }, 500)
        return() => clearInterval(debounce)
        }
        else{
            setAnimeList('')
        }    
            
        
        
    }, [name])
    console.log(animeList)

    return(
        <>
            <input  ref ={ref} placeholder={'Введите название аниме...'} value={name} onInput={(e)=>insertValue(e)} />

            <div className={Style.icon_Search}
                 dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(Search) }}

            ></div>
            <div className={Style.setItemBlock}>
            <p>{genresList}</p>
            </div>
            {animeList.length > 0 ?
            <SearchAnimeBlock  list={animeList} setList ={setAnimeList}/>
        : null}
        </>
    )
}