import SlideOneBtn from "./SildeOneBtn"
import SlideTwoBtn from "./SlideTwoBtn"
import SlideThreeBtn from "./SlideThreeBtn"

export default function RoteSlides({page = 1}){
    switch(page){
        case 1:{
            return ( <SlideOneBtn /> )
        }
        case 2:{
            return ( <SlideTwoBtn /> )
        }
        case 3:{
            return ( <SlideThreeBtn /> )
        }
        default:{
            return (
                <p>Not found page</p>
            )
        }
    }
}