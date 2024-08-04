import { useRef } from 'react'
import Style from '../Registration.module.css'

export default function StepRegTwo(){
    const dataUser = {
        login: useRef(),
        password: useRef(),
        secPassword: useRef()
    }
    return(
        <div className={Style.stepBlock}>
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Имя аккаунта:</p>
                <input className={Style.InputStyle} placeholder="Логин..." type='text'></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Пароль:</p>
                <input className={Style.InputStyle} placeholder="Пароль..." type='text'></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Подтверждение пароля:</p>
                <input className={Style.InputStyle} placeholder="Повторите пароль..." type='text'></input>
            </div>

        </div>
    )
}