import './index.css'
import { RiKeyboardBoxLine } from "react-icons/ri"

const HeaderList =props=>{
    const {details, getTheidof,textcolor}=props
    const {name, id}=details
    const cllass = textcolor===true?"headername buttonn textdect":"headername buttonn"
   

    const whenonclick=()=>{
       getTheidof(id)
      
           
    }
    return(
        <div className='headernameconatiner'>
            <RiKeyboardBoxLine/>
            <button type="button" className={cllass} onClick={whenonclick}>{name}</button>
        </div>
    )
}

export default HeaderList