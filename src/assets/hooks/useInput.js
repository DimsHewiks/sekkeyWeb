
//Данный хук автоматом перезаписывает state и возвращает значение внутри инпута

import {useState} from "react";

export default function useInput(defaultValue= ''){
    const [value, setValue] = useState(defaultValue)
    return{
        value: value,
        onChange : (event)=> setValue(event.target.value)
    }
}