import {useEffect, useRef, useState, useMemo} from "react";
import {carusel} from "../../../API/carusel.js";
import Skeleton from "../../Skeleton/Skeleton.jsx";
import style from './carusel.module.css'
import { getAnimeById } from "../../../API/GetAnimeById.js";
import {CSSTransition} from "react-transition-group";
export default  function Carusel(){
    const [data, setData] = useState([]);
    const[move, setMove] = useState(0)
    const [fullInfo, setFullInfo] = useState({})

    const [titleInfo, setTitleInfo] = useState({});


    const controllers = useMemo(()=>{
        return new AbortController()
    },[titleInfo])
    const signal = controllers.signal

    useEffect(  () => {
        async function getData (){
            await carusel().then(data=>{
                setData(data);
                console.log(data)
            })
        }
        getData()
    }, []);

    useEffect(()=>{
   
        const objValues = {};
        data.map((el, i) => {
            objValues[i] = false
        })
        setFullInfo(objValues)
    
    }, [data])

    const ref = useRef();
    const miniImg = useRef();
    const Video = useRef();
    const info = useRef();
    function ViewFullInfo(index, title_id){
    
        console.log(index, title_id);
        setTimeout(() => {
            getAnimeById(title_id, signal)
            .then(data=>{
                console.log(data)
                setTitleInfo(data);
                setFullInfo({...fullInfo, [index]: true})
            })
            .catch((err) =>{
                console.log('Соединение закрыто')
            })
        }, 600);


    }
    function abortFetching() {
        console.log('Now aborting');
        // Abort.
        controllers.abort()
    }
    function hideFullInfo(index){
        setFullInfo({...fullInfo, [index]: false})
        setTitleInfo({})
        abortFetching()
    }

    function getMove(type){
        switch (type){
            case 'left':
                if(move == 0){

                    setMove(0)
                }
                else{
                    setMove((prev) =>prev-100)
                }break;
            case 'right':
                if(move >= (Object.entries(data).length * 100) - 100){
                    setMove((Object.entries(data).length*100)-100)
                }
                else{
                    setMove((prev) =>prev+100)
                }break;
        }


    }
    
    return(
        <>
            {data ?<div  className={style.main} >
                { Object.entries(data).map((el, i) =>(
                    
                    
                    <div  key={i}   className={style.pageBlock}  style={{
                        backgroundImage : `url(https://shikimori.one${el[1]['image']['original']})`,
                        transform: `translateX(-${move}%)`} }>

                        <div ref={ref} className={style.frontGradient} id ={i} onMouseEnter={(e)=>{
                            e.preventDefault()
                            ViewFullInfo(i, el[1]['id'])}
                        } onMouseLeave={()=>{
                            hideFullInfo(i)
                        }}> <h1>{
                            el[1]['russian']?el[1]['russian']:el[1]['name']
                        }</h1>
                        
                            {fullInfo[i] ? 
                            <CSSTransition>
                                <div className={style.videoBlock}>
                                    <div className={style.UpVideoBlock}></div>
                                    <iframe id="ytplayer" 
                                            type="text/html" 
                                            width="260%" 
                                            height="260%"
                                            src={titleInfo['videos'] ? titleInfo['videos'][0]['player_url'] + "?si=tiR690NfKi5rqLKi&autoplay=1&mute=1&loop=1&playlist="+titleInfo['videos'][0]['url'].split('youtu.be/')[1] : null} 
                                            allow="autoplay"
                                            frameborder="0" 
                                            allowfullscreen>
                                        </iframe>
                                {/* <div className={style.miniCard} ref={miniImg}>
                                    <img src={'https://shikimori.one' + el[1]['image']['original']} alt=''/>
                                </div>             */}
                                </div>
                            </CSSTransition>: null}
                        
                        
                       
                        
                        </div>
                        
                    </div>
                ))}
                <div className={style.arrowBlock}>
                    <div className={style.arrow} onClick={()=>getMove('left')}></div>
                    <div className={style.arrow} onClick={()=>getMove('right')}></div>
                </div>
            </div> : <Skeleton></Skeleton>}
        </>
    )
}