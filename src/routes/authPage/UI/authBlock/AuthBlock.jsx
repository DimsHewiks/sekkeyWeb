import Style from './authBlock.module.css'

export default function AuthBlock(){
    return(
        <>
        <div className={Style.mainBlock}>
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
                    <div>
                        <div>
                            <p>ВОЙТИ</p>
                        </div>
                        <div>
                            <p>Забыл пароль</p>
                        </div>
                    </div>
                    <div>
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