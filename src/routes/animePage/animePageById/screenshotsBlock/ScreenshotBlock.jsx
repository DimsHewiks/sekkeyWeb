import Style from './ScreenshotBlock.module.css'

export default function ScreenshotBlock({images}){

    return(
        <>
        <div className={Style.MainBlock}>
            <h2>Скриншоты:</h2>
            <div className={Style.imageBlock}>
                {images.map((el)=>(
                    <div className={Style.imageDiv}>
                        <img src={'https://shikimori.one' + el['original']}  alt=''/>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}