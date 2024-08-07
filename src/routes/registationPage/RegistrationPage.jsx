import Style from './Registration.module.css'
import HeaderAuth from '../authPage/UI/HeaderAuth/HeaderAuth'
import { useState } from 'react'
import StepRegBlocks from './stepRegBlocks';
import RoteSlides from './SlideBtnElements/RouteSlides';
import AuthBackGround from '../../animates/authAnimateBackGround/AuthBackGround';
localStorage.setItem('user', '123')
export default function RegistrationPage(){
    const [step, SetStep] = useState(1);

    const steps = [
        'Личные данные  >',
        'Данные для входа  >',
        'Отображение'
    ]

    const [fullUSerData, SetFullUserData] = useState({
        name: '',
        birthday: '',
        email: '',
        login: '',
        password: '',
        secPassword: '',
        avatar: ''
    });

    function setStepWindow(count){
        SetStep(count)
    }
    return(
        <>
        <AuthBackGround />
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
                    <StepRegBlocks
                        step={step}
                        userData={fullUSerData} 
                        SetUserData={SetFullUserData}
                    />
                    <RoteSlides 
                        page = {step} 
                        SetStep = {SetStep}
                        userData={fullUSerData} 
                        SetUserData={SetFullUserData}/>
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