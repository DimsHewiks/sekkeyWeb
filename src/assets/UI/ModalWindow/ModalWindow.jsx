import { createPortal } from "react-dom";
import Style from './ModalWindow.module.css'

export default function ModalWindow({title, text, modalType, CloseState}){
    // modalType
    // native - уже готовый шаблон модалки, нужно только вставить текст и заголовок
    //custom - кастомный макет, где разработчик отправляет свой нарисованный макет внутрь модалки


    
    
    
    
    return(
        <>
        {createPortal(
            <div className={Style.modalBack}>
            <div className={Style.main}>
                <div className={Style.leftItem}>
                    <div>

                    </div>
                </div>
                <div className={Style.rightItem}>
                    {modalType == 'native' ? <>
                    <div className={Style.header}>
                        <div className={Style.exitBtn} onClick={()=> CloseState(false)}>
                            x
                        </div>
                    </div>
                    <div className={Style.titleBlock}>
                        <h1>
                            {title}
                        </h1>
                    </div>
                    <div className={Style.textBlock}>
                        <h4>
                            {text}
                        </h4>
                    </div>
                    </>
                    : null
                    }
                    
                    
                </div>
            </div>
            </div>
            ,document.body
        )}
        </>
    )



}