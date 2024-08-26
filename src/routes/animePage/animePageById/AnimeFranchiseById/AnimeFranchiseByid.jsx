import Style from './AnimeFranchiseById.module.css'
import {useEffect, useState} from "react";
import {getFranchiseById} from "./api/getFranchiseById.js";

export default function AnimeFranchiseById({id}){

    const [franchise, setFranchise] = useState();

    useEffect(()=>{
         getFranchiseById(id).then(data=>{
             setFranchise(data['nodes'])
        })
    },[id])

    console.log(franchise)
    return(
        <>
        <div className={Style.mainBlock}>
            <h2 className={Style.title}>
                Ветка франшиз:
            </h2>
            <div className={Style.franchiseBlocks}>
                {franchise ? franchise.map((el)=> (
                    <div>
                        <img src={el['image_url']} alt=''/>
                        <div className={Style.animeName}>
                            <h4>
                                {el['name']}
                            </h4>
                        </div>

                    </div>
                )) : null}

            </div>
        </div>
        </>
    )
}