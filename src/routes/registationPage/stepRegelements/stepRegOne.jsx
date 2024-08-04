import Style from '../Registration.module.css'

export default function StepRegOne(){
    return (
        <div className={Style.stepBlock}>
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Ваше имя:</p>
                <input className={Style.InputStyle} placeholder="Имя..." type='text'></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Дата рождения:</p>
                <input className={Style.InputStyle} placeholder="Дата рождения..." type='text'></input>
            </div>
                
            <div className={Style.InputBlock}>
                <p className={Style.InputTitle}>Почта:</p>
                <input className={Style.InputStyle} placeholder="Почта..." type='text'></input>
            </div>

        </div>
    )
}