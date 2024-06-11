import  './ModalWindow.css'
import {useEffect, useState} from "react";
import {getAnimeByType} from "../../../API/GetAnimeByType.js";
export default function ModalWindowAnime({info, coord, position}){


    let start = false;
    console.log(info)
    let text = info['description']
    let textmass =[]

    if(info['description']){
        textmass = [...text]
        for(let i of textmass){
            if(i == ' '){
                continue;
            }
            if(i == '['){
                start = true;


            }
            else if(i == ']'){
                start = false;
            }
            if(start){
                textmass = textmass.filter((el)=> el !== i)
            }

        }
        textmass = textmass.filter((el)=> el !== '[')
        textmass = textmass.filter((el)=> el !== ']')
        text = textmass.join('');
    }



    let pos;
    if(coord + 600/2 > window.innerWidth / 100 * 55){
         pos = {
            top: '20px',
            right: '105%',
            flexDirection: 'row-reverse'
        }
    }
    else{
        pos = {
            top: '20px',
            left: '105%',
            flexDirection: 'row'
        }
    }
    return(
        <>
            <div className='MainModal' style ={{...pos}}>
            <div className='imgBlock'>
                <img alt={info['name']} src={'https://shikimori.one' + info['image']['original']}/>
            </div>
            <div className='Info'>
                <h1>{info['russian'] ? info['russian'] : info['name']}</h1>
                <div className='genresBlock'>
                    {info['genres'].map((el)=>(
                        <span>{el['russian']}</span>
                    ))}
                </div>
                <div className='studios_Block'>
                    <p>Студии:</p>
                    <div className='MainStudisBlock'>
                    {info['studios'] ? info['studios'].map((el)=>(
                        <div className='studios_info'>
                            <div>
                                <img alt={el['name']} src={'https://shikimori.one' + el['image']}/>
                            </div>
                            <h4>{el['name']}</h4>
                        </div>
                    )) : 'Студии не найдены...'}</div>
                </div>
                <h4>{text ? text : 'Описание отсутствует...'}</h4>
            </div>
        </div>
        </>
    )
}