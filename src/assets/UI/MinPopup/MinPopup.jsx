import { createPortal } from "react-dom";
import Style from './MinPopup.module.css'


export default function MinPopup({type = 'ssucces', text, closeState, delay}){
    
    

    /** [---- немного инфы ----]
     * 
     *  minPopup
     *  маленькое окошко, при вызове которого вылетает сверху экрана
     *  само по себе представляет уведомлялку, которая содержит небольше сообщение, которое нужно передать пользвоателю
     * 
     * type :
     *     succes  - окошко зеленного цвета, обычно означающие успех
     *     error   - окошко красного цвета, обычно означающее ошибку
     *     warning - окошко желтого цвета, обычно означающее предупреждение
     * 
     *     text - сообщение, которое нужно показать пользователю
     * 
     * closeState - состояние, которое отвечает за отображение состояния
     * 
     * delay - время, в течение которого будет отображаться блок с сообщением
    */



    let title;
    switch(type){
        case 'ssucces':{
            title = 'Успех!'
            break;
        }
        case 'warning':{
            title = 'Внимание!'
            break;
        }
        case 'error':{
            title = 'Ошибка!'
            break;
        }
        default :[
            title = 'упс!'
        ]
    }

    setTimeout(()=>{
        closeState(false)
    }, delay)

    return(
        <>
            {
                createPortal(
                    <><div className={Style.mainBlock}>
                        <div className = {Style.blockHeader}>
                            <h4>
                                {title}
                            </h4>
                            <div className={Style.CloseBtn}>
                                x
                            </div>
                        </div>
                        

                        <div className={Style.popupBody}>
                            <p>
                                {text}
                            </p>
                        </div>
                    </div></>
                    ,document.body
                )
            }
        </>
    )
} 