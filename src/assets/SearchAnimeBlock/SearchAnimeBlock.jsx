import Style from './searchAnimeBlock.module.css'



export default function SearchAnimeBlock({list}){
    console.log(list)
    return(
        <>
        <div className={Style.mainBlock}>
            <div className={Style.counts}>
                <p>Количество найденных: {Object.entries(list).length}</p>
                <b>Сбросить</b>
            </div>
            <div>
                {list.map((el)=>(
                    <div className={Style.AnimeCard}>
                        <div className={Style.ImgBlock}>
                            <img alt='Anime pictures' src={`https://shikimori.one${el['image']['original']}`}></img>
                        </div>
                        <div className={Style.infoBlock}>
                            <div className={Style.name}>
                                <h4>{el['russian'] ? el['russian'] : el['name']}</h4>
                            </div>
                            <div className={Style.infoTitle}>
                                <h4>тип : {el['kind']}</h4>
                            
                                <h4>вышло : {el['aired_on']}</h4>
                                <h4>рейтинг : {el['score']}</h4>
                                <h4>эпизодов : {el['episodes']} / {el['episodes_aired']}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )

}