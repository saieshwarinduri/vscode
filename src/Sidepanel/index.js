import './index.css'
import "typeface-roboto"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { MdOutlineExplore} from "react-icons/md"
import {AiOutlineSearch } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx"

const Sidepanel =()=>{
    return(
        <div className="sidepanel">
            <h1 className="heading">Instagram</h1>
            <div className='homeIconContaienr'>
            <h1><AiOutlineHome /></h1>
            <p className='nameofHeader'>Home</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><AiOutlineSearch /></h1>
            <p className='nameofHeader'>Search</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><MdOutlineExplore /></h1>
            <p className='nameofHeader'>Explore</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><RiMessengerLine /></h1>
            <p className='nameofHeader'>Messages</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><AiOutlineHeart /></h1>
            <p className='nameofHeader'>Notifications</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><AiOutlinePlusSquare /></h1>
            <p className='nameofHeader'>Create</p>
            </div>
            <div className='homeIconContaienr'>
            <img className='profileIcon' src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671017202/virat-kohli-buys-7000-sq-ft-luxury-pad-worth-rs-34-crore-in-mumbai_xxjgfi.jpg" alt="d"/>
            <p className='nameofHeader pro'>Profile</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><RxHamburgerMenu /></h1>
            <p className='nameofHeader'>More</p>
            </div>
            
        </div>
    )
}

export default Sidepanel