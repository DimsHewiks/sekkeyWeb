import { useRef } from 'react'
import { useMask } from '@react-input/mask'
import Style from '../Registration.module.css'



export default function StepRegOne({userData, SetUserData}){
    
    const inputDate = useMask({
        mask: "dd.mm.yyyy",
        replacement: {
            d: /\d/,
            m: /\d/,
            y: /\d/
        },
        showMask: 'separate'
    })

    function checkEmailMask (email){
        console.log(email);
        if (/.+@.+\.[A-Za-z]+$/.test(email)) {
      
        } else {
       
        }
      };

    return (
        <div className={Style.stepBlock}>
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Ваше имя:</p>
                <input className={Style.InputStyle} placeholder="Имя..." type='text' value = {userData['name']} onInput={(e)=>{
                    SetUserData((prev)=>({
                        ...prev,
                        name: e.target.value
                    }))
                }}></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Дата рождения:</p>
                <input className={Style.InputStyle} ref = {inputDate} placeholder="Дата рождения..." type='text' value = {userData['birthday']} onInput={(e)=>{
                    SetUserData((prev)=>({
                        ...prev,
                        birthday: e.target.value
                    }))
                }}></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Почта:</p>
                <input className={Style.InputStyle} placeholder="Почта..." type='email' value = {userData['email']} onInput={(e)=>{
                    SetUserData((prev)=>({
                        ...prev,
                        email: e.target.value
                    }))
                }}></input>
            </div>

        </div>
    )
}