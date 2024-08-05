import StepRegOne from "./stepRegelements/stepRegOne";
import StepRegTwo from "./stepRegelements/StepRegTwo";
import StepRegThree from "./stepRegelements/StepRegThree";

export default function StepRegBlocks({step = 1, userData, SetUserData}){
    switch(step){
        case 1:{
            return (<StepRegOne userData={userData} SetUserData={SetUserData}/>)
        }
        case 2:{
            return (<StepRegTwo userData={userData} SetUserData={SetUserData}/>)
        }
        case 3:{
            return (<StepRegThree userData={userData} SetUserData={SetUserData}/>)
        }
        default:{
            return (
                <p>Not found page</p>
            )
        }

    }


}