import Style from "./ContentBlock.module.css"

export  default function GroupBlock(){
    return (
        <>
        <div className={Style.main}>
            <div className={Style.longBlock}>
                <img alt="anime" src="/animeBlock.jpg"></img>
                <h4>Аниме</h4>
            </div>
            <div className={Style.smallBlock}>
                <img alt="anime" src="/animeBlock.jpg"></img>
                <h4>Жанры</h4>
            </div>
            <div className={Style.smallBlock}>
                <img alt="anime" src="/animeBlock.jpg"></img>
                <h4>Обсуждения</h4>
            </div>
            <div className={Style.longBlock}>
            <img alt="anime" src="/animeBlock.jpg"></img>
            <h4>Обсуждения</h4>
            </div>
        </div>
        </>
    )
}