import {useState} from "react";
import style from './TypeList.module.css';
import classNames from 'classnames';
export default function TypeListBtnBlock({SetanimeCard}){
    const list ={
        0:{
            name: 'Сезон 2024',
            value: 'season'
        },
        1:{
            name: 'Топ фильмы',
            value: 'film_Top'
        },
        2:{
            name: 'Популярное',
            value: 'trand'
        }
    }
    const[line, setLine] = useState(0)
    function setBtnClick(i, el){
        setLine(i*200);
        SetanimeCard(el[1].value)
    }
    return(
        <>
            <div className={style.main}>
                {
                    Object.entries(list).map((el, i)=>(
                        <span key={i}
                            className={classNames(style.btnBlock)}
                            id = {el[1].value}
                            onClick={()=>setBtnClick(i, el)}
                        >
                                {el[1].name}
                        </span>
                    ))
                }
                <div className={style.line} style={{left: line}}></div>
            </div>
        </>
    )
}