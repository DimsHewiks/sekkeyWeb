import Style from './TopAnimeHeader.module.css'


export default function TopAnimeHeader(){
    
    return(
        <div className={Style.mainBlock}>

            <div className={Style.backGround} style={{backgroundImage: "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660525.jpg?w=1480&t=st=1723374405~exp=1723375005~hmac=26a05d4aafecc26a52af647f7e66ca49203193a76a4cd35638839f21307f9ddd"}}>
            </div>

            <div className={Style.infoBlock}>
                <h3>
                    Топ аниме
                </h3>
                <p>
                    тут какой-то рандомный текст, который потом будет передаваться клиенту через api
                </p>
            </div>
        </div>
    )
}