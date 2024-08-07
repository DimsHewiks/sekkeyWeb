import { useState } from 'react'
import MinPopup from '../../../assets/UI/MinPopup/MinPopup'
import Style from '../Registration.module.css'

export default function SlideOneBtn({setStep, userData}){
    
    const [popupView, setPopupView] = useState(false)
    const [msg, setMsg] = useState('');



    function Next(){
        console.log(userData)
        if(!userData['name']){
            setPopupView(true)
            setMsg('Не заполнено обязательное поле \'имя\'')
            return;
            
        }

        if(!userData['birthday']){
            setPopupView(true)
            setMsg('Не заполнено обязательное поле \'день рождения\'')
            return;
            
        }

        if(!userData['email']){
            setPopupView(true)
            setMsg('Не заполнено обязательное поле \'почта\'')
            return;
            
        }

        setPopupView(false)

    }
    
    return (
        <>{popupView && 
                <MinPopup 
                    text={msg}
                    type='error' delay={5000} 
                    closeState={setPopupView}>
                </MinPopup>}
        <div className={Style.SlideOneBtn}>
            <div className={Style.NexnBtn} onClick={()=>Next()}>
                <p>ДАЛЕЕ</p>
            </div>
        </div></>
    )
}