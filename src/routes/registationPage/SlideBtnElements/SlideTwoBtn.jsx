import Style from '../Registration.module.css'

export default function SlideTwoBtn(){
    return (
        <div className={Style.SlideOneBtn}>
            <div className={Style.BackBtn}>
                <p>НАЗАД</p>
            </div>
            <div className={Style.NexnBtn}>
                <p>ДАЛЕЕ</p>
            </div>
        </div>
    )
}