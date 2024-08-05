import { useRef } from 'react'
import Style from '../Registration.module.css'

export default function StepRegTwo({userData, SetUserData}){
   
    return(
        <div className={Style.stepBlock}>
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Имя аккаунта:</p>
                <input className={Style.InputStyle} placeholder="Логин..." type='text' value = {userData['login']} onInput={(e)=>{
                    SetUserData((prev)=>({
                        ...prev,
                        login: e.target.value
                    }))
                }}></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Пароль:</p>
                <input className={Style.InputStyle} placeholder="Пароль..." type='text' value = {userData['password']} onInput={(e)=>{
                    SetUserData((prev)=>({
                        ...prev,
                        password: e.target.value
                    }))
                }}></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Подтверждение пароля:</p>
                <input className={Style.InputStyle} placeholder="Повторите пароль..." type='text' value = {userData['secPassword']} onInput={(e)=>{
                    SetUserData((prev)=>({
                        ...prev,
                        secPassword: e.target.value
                    }))
                }}></input>
            </div>

        </div>
    )
}