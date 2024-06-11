import {useEffect, useState} from "react";
import Auth from "./Auth.jsx";
import Style from './ViewAvatar.module.css'
export default function ViewAvatar(){
    const [User, SetUser] = useState('');
    const[auth, SetAuth] = useState(false);
    console.log(auth)
    useEffect(() => {
        localStorage.name ? SetUser(localStorage.name) : SetUser('')
    }, []);
    return(
        <>
            <div className={Style.main} >
                <div className={Style.User_Name} onClick={()=>{SetAuth((prev) => !prev)}}>{User? User : 'Пользователь'}</div>
                <div className={Style.User_Img}></div>
                {auth? <Auth user ={User}></Auth>
                : null}
            </div>
        </>
    )
}