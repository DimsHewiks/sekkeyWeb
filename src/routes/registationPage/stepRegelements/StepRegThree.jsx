import Style from '../Registration.module.css'

export default function StepRegThree({userData, SetUserData}){
    function setAvatar(file){
        SetUserData((prev)=>({
            ...prev,
            avatar: file
        }))
    }
    
    return(
        <div className={Style.stepBlock}>
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Изображение профиля:</p>
                <input className={Style.InputStyle} placeholder="Имя аккаунта..." type='file' onChange={(e) => setAvatar(e.target)}></input>
            </div>
                
        </div>
    )
}