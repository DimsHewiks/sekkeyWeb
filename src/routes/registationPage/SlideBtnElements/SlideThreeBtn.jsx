import { useState } from 'react';
import Style from '../Registration.module.css'

export default function SlideThreeBtn({userData}){
       
    const [web, SetWeb] = useState({});
    console.log(web)
    function setUserData(userData){
        console.log(userData)
        // const data = {
        //     register_info :{
        //         login: userData['login'],
        //         password: userData['password'],
        //         email: userData['email'],
        //         birthday: userData['birthday']
        //     },
        //     web_info :{

        //     }
        // }
        // д

        // console.log(data)

        let data = new FormData();

        data.append('login', userData['login']);
        data.append('password', userData['password'])
        data.append('email', userData['email'])
        data.append('birthday', userData['birthday'])
        data.append('avatar', userData['avatar'].files)

        for(let i of data){
            console.log(i)
        }

        fetch('https://185-46-9-127.cloudvps.regruhosting.ru/api/registration',{
            method: 'POST',
            body: data
        }).then(result => result.json())
        .then(data =>{
            SetWeb(data)
        })

    }
    
    
    
    
    return (
        <div className={Style.SlideOneBtn}>
            <div className={Style.RegBtn} onClick={(e)=> setUserData(userData)}>
                <p>СОЗДАТЬ УЧЕТНЫЙ ЗАПИСЬ</p>
            </div>
        </div>
    )
}