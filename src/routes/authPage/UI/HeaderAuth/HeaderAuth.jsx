import Style from './header.module.css'


export default function HeaderAuth({page = 'Авторизация'}){
    return(
        <>
            <div>
                <h1>SEKKEY / </h1><p>{page}</p>
            </div>
        </>
    )
}