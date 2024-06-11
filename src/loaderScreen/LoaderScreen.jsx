import Style from './LoaderScreen.module.css'

export default function LoaderScreen(){
    return(
        <>
            <div className={Style.main}>
                <img alt='preloaderGIF' src='/peach-goma-box-prank.gif'/>
            </div>
        </>
    )
}