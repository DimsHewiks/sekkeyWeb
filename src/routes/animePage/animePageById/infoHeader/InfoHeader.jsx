import Style from './InfoHeader.module.css'

import {Column} from "@ant-design/charts";
export default function InfoHeader({info}){
        let data = [ ];

        info['rates_statuses_stats'].map((el)=>{
            data.push({
                year: el.name,
                value: el.value
            })
        })

        const props = {

            data,
            xField: 'year',
            yField: 'value',
        };


    return(
        <>
            <div
                className={Style.infoHeader}
                style ={{

                }}
            >
                <div className={Style.LeftHeader}>
                    <div className={Style.imgBlock}>
                        <img src={"https://shikimori.one" + info['image']['original']}/>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={Style.centerHeader}>
                    <h4 className={Style.TitleInfo}>Информация:</h4>
                    <div className={Style.infoGenresBlock}>
                        {info['genres'].map((el) => (
                            <b>{el['russian']}</b>
                        ))}
                    </div>
                    <div className={Style.infoDotted}>
                        <p>Тип: <b>{info['kind']}</b></p>
                        <p>Количество эпизодов: <b>{info['episodes_aired'] + " / " + info['episodes']}</b></p>
                        <p>статус: <b>{info['status']}</b></p>
                        <div className={Style.discriptionBlock}>
                            <h2>Описание</h2>
                            <h5>{info['description'] ? info['description'] : 'Описание отсутствует'}</h5>
                        </div>
                    </div>
                </div>
                <div className={Style.RightHeader}>
                    <h2>В коллекциях:</h2>
                    <Column {...props} />
                </div>
            </div>
        </>
    )
}