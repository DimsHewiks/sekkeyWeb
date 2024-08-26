import Style from './AnimeFranchiseById.module.css'
import {useEffect, useState} from "react";
import {getFranchiseById} from "./api/getFranchiseById.js";
import {Link} from "react-router-dom";

export default function AnimeFranchiseById({id}){

    const [franchise, setFranchise] = useState();

    useEffect(()=>{
         getFranchiseById(id).then(data=>{
             setFranchise(data['nodes'])
        })
    },[id])

    if(franchise){
        return(
            <>
                <div className={Style.mainBlock}>
                    <h2 className={Style.title}>
                        Ветка франшиз:
                    </h2>
                    <div className={Style.franchiseBlocks}>
                        {franchise ? franchise.map((el)=> (
                            <Link to={`/anime/${el['id']}`} >
                            <div key={el['id']} className={Style.animeBlock}>
                                <img src={el['image_url']} alt=''/>
                                <div className={Style.animeName}>
                                    <h4>
                                        {el['name']}
                                    </h4>
                                </div>

                            </div></Link>
                        )) : null}

                    </div>
                </div>
            </>
        )
    }else{
        return null;
    }

}