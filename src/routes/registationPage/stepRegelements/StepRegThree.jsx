import Style from '../Registration.module.css'

export default function StepRegThree({userData, SetUserData}){
    return(
        <div className={Style.stepBlock}>
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Изображение профиля:</p>
                <input className={Style.InputStyle} placeholder="Имя аккаунта..." type='file'></input>
            </div>
                
        </div>
    )
}