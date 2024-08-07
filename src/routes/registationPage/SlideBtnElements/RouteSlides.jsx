import SlideOneBtn from "./SildeOneBtn"
import SlideTwoBtn from "./SlideTwoBtn"
import SlideThreeBtn from "./SlideThreeBtn"

export default function RoteSlides({page = 1, setStep, userData, SetUserData}){
    switch(page){
        case 1:{
            return ( <SlideOneBtn 
                        setStep = {setStep}
                        userData={userData}
                    /> )
        }
        case 2:{
            return ( <SlideTwoBtn /> )
        }
        case 3:{
            return ( <SlideThreeBtn userData={userData}/> )
        }
        default:{
            return (
                <p>Not found page</p>
            )
        }
    }
}