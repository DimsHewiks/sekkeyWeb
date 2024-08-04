import StepRegOne from "./stepRegelements/stepRegOne";
import StepRegTwo from "./stepRegelements/StepRegTwo";
import StepRegThree from "./stepRegelements/StepRegThree";

export default function StepRegBlocks({step = 1}){
    switch(step){
        case 1:{
            return (<StepRegOne />)
        }
        case 2:{
            return (<StepRegTwo />)
        }
        case 3:{
            return (<StepRegThree />)
        }
        default:{
            return (
                <p>Not found page</p>
            )
        }

    }


}