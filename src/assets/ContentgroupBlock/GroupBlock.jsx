import Style from "./ContentBlock.module.css"
import ModalWindow from "../UI/ModalWindow/ModalWindow"
import { useState } from "react"



export  default function GroupBlock(){
    const [modal, setModal] = useState(false);


    return (
        <>
        <div className={Style.main}>
            <div className={Style.longBlock}>
                <img alt="anime" src="/animeBlock.jpg" onClick={()=> setModal(true)}></img>
                <h4>Аниме</h4>
            </div>
            <div className={Style.smallBlock}>
                <img alt="anime" src="/genresBlockNew.jpg" onClick={()=> setModal(true)}></img>
                <h4>Жанры</h4>
            </div>
            <div className={Style.smallBlock}>
                <img alt="anime" src="/homeBlock.jpeg" onClick={()=> setModal(true)}></img>
                <h4>Профиль</h4>
            </div>
            <div className={Style.longBlock}>
            <img alt="anime" src="/genresBlock.jpg" onClick={()=> setModal(true)}></img>
            <h4>Обсуждения</h4>
            </div>
        </div>
        {modal && 
            <ModalWindow title={'Упс...'} text={'Похоже, что этот раздел всё ещё на стадии разработки'} modalType={'native'} CloseState={setModal}></ModalWindow>
        }
        </>
    )
}