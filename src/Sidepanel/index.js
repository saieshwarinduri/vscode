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
        <div className={`sidepanel col-2 col-md-3 `}>
            <h1 className={`heading d-none d-md-flex`}>Instagram</h1>
            <div className='homeIconContaienr'>
            <h1><AiOutlineHome className='iconstyle' /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>Home</p>
            </div>
            <div className={`homeIconContaienr d-none d-md-flex`}>
            <h1><AiOutlineSearch className='iconstyle'  /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>Search</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><MdOutlineExplore  className='iconstyle' /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>Explore</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><RiMessengerLine  className='iconstyle' /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>Messages</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><AiOutlineHeart  className='iconstyle' /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>Notifications</p>
            </div>
            <div className='homeIconContaienr'>
            <h1><AiOutlinePlusSquare className='iconstyle' /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>Create</p>
            </div>
            <div className='homeIconContaienr'>
            <img className='profileIcon' src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671017202/virat-kohli-buys-7000-sq-ft-luxury-pad-worth-rs-34-crore-in-mumbai_xxjgfi.jpg" alt="d"/>
            <p className={`nameofHeader pro d-none d-md-flex`}>Profile</p>
            </div>
            <div className='homeIconContaienr'>
            <h1 className='d-none d-md-flex'><RxHamburgerMenu className='iconstyle' /></h1>
            <p className={`nameofHeader d-none d-md-flex`}>More</p>
            </div>
            
        </div>
    )
}

export default Sidepanel