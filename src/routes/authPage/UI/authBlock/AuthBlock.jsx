import { useRef } from 'react'
import Style from './authBlock.module.css'

export default function AuthBlock(){



    let mainBlockView = useRef('');

    function getStartRegist(){
        mainBlockView.current.style.opacity = 0;
        console.log(mainBlockView)
        setTimeout(()=>{
            window.location.href = '/'
        }, .2)
    }




    return(
        <>
        <div ref ={mainBlockView} className={Style.mainBlock} style={{opacity: 1}}>
           <div className={Style.FormBlock}>
                <h2 className={Style.MainTitle}>Авторизация</h2>
                <form className={Style.mainForm}>
                    <div className={Style.InputBlocks}>
                        <div className={Style.InputBlock}>
                            <p className={Style.InputTitle}>Ваше имя:</p>
                            <input className={Style.InputStyle} placeholder="Имя аккаунта..." type='text'></input>
                        </div>


                        <div className={Style.InputBlock}>
                            <p className={Style.InputTitle}>Пароль:</p>
                            <input className={Style.InputStyle} placeholder="Пароль..." type='text'></input>
                        </div>
                    </div>
                    <div className={Style.BtnBlock}>
                        <div className={Style.SingInBtn}>
                            <p>ВОЙТИ</p>
                        </div>
                        <div className={Style.SupportBtn}>
                            <p>Забыл пароль</p>
                        </div>
                    </div>
                    <div className={Style.SingUpBtn} onClick={()=>getStartRegist()}>
                        <p>
                            Пройти регистрацию
                        </p>
                    </div>

                </form>
            </div> 
        </div>
        
        </>
    )
}