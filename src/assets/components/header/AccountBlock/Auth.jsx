import style from './auth.module.css'
export default function Auth({user}){
    if(!user){
        console.log(user)
        return(
            <div className={style.main}>
                <h2>Вход</h2>
                <div className={style.inputBlock}>
                    <p>Логин:</p>
                    <input placeholder='Имя аккаунта'/>
                </div>
                <div className={style.inputBlock}>
                    <p>Пароль:</p>
                    <input placeholder='пароль' type='password'/>
                </div>
                <div className={style.btnSend}>
                    <p>Войти</p>
                </div>
                <h4>Регистрация</h4>
            </div>
        )
    }

}