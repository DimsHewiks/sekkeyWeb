import Style from './Registration.module.css'
import HeaderAuth from '../authPage/UI/HeaderAuth/HeaderAuth'
import { useState } from 'react'
import StepRegBlocks from './stepRegBlocks';
import RoteSlides from './SlideBtnElements/RouteSlides';
localStorage.setItem('user', '123')
export default function(){
    const [step, SetStep] = useState(3);

    const steps = [
        'Личные данные  >',
        'Данные для входа  >',
        'Отображение'
    ]
    function setStepWindow(count){
        SetStep(count)
    }
    return(
        <>
        <HeaderAuth page='Регистрация'/>
        <div className={Style.mainBlock}>
            <div className={Style.mainRegForm}>
                <h2 className={Style.MainTitle}>Регистрация</h2>
                <div className={Style.stepView}>
                    {
                        steps.map((el, i) =>(

                            <p className={i<step ? Style.acticeStep : Style.disableStep} onClick={()=> setStepWindow(i+1)}>
                                {el}
                            </p>
                        ))
                    }
                </div>
                <form>
                    <StepRegBlocks step={step}/>
                    <RoteSlides page = {step}/>
                </form>
                <div className={Style.InfoBlock}>
                
                    <div className={Style.CreateBy}>
                        Разработано DimsHewk
                    </div>

                    <div>
                        c 2024 - Все права защищены
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}