import Style from './AuthBackGround.module.css'

export default function AuthBackGround(){
    return(
        <div className={Style.MainAuthBack}>
            <img className={Style.cloud1} src ='./auth/Group 27.svg' />
            <img className={Style.cloud2} src ='./auth/Group 28.svg' />
            <img className={Style.cloud3} src ='./auth/Group 29.svg' />
            <img className={Style.cloud4} src ='./auth/Group 30.svg' />
            
        </div>
    )
}