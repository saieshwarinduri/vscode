import { Component } from "react";
import { IoIosArrowDown} from "react-icons/io"
import { BsPersonPlus } from "react-icons/bs"
import { BsThreeDots } from "react-icons/bs"
import './index.css'

class ProfilePanel extends Component{
    state={h:false}

    setstatessss=()=>{
        this.setState(pre=>({
            h:!pre.h
        }))
    }
    #ghhbjhhkjninniion_bouhuiihguyguy
    render(){
        const {h}=this.state
        const colorr=h?"statusring":"statusring1"
        const colorr1=h?"statusringsmal":"statusringsmal1"
        return(
            <div className="contentcontainerMainfro">
                <div className={`profilebox d-none d-lg-flex`}>
                    <button type="button" className="profilebutton" onClick={this.setstatessss}>
                <div className={colorr}>
                <img src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671017202/virat-kohli-buys-7000-sq-ft-luxury-pad-worth-rs-34-crore-in-mumbai_xxjgfi.jpg" alt="virat" className="viratProfile"/>
                </div> 
                </button>
                </div>
                <div className="detailsContinaer">
                    <div className={`mt-3 mb-3 nameFollowingtitle `}>
                        <div className={`profilebox d-felx d-lg-none`}>
                          <button type="button" className="profilebutton" onClick={this.setstatessss}>
                           <div className={colorr1}>
                            <img src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671017202/virat-kohli-buys-7000-sq-ft-luxury-pad-worth-rs-34-crore-in-mumbai_xxjgfi.jpg" alt="virat" className="viratProfilesmall"/>
                              </div> 
                            </button>
                             </div>
                             <div className="namefollowingbuttonscontaienr">
                             <div className="namethreedotsconatiner">
                        <h1 className="viratKohiliNmetitele">virat.kohli<img src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671020026/bluetick_idipfu.png" alt="blutic" className="blutickImage"/></h1>
                        <p className={`threeDots d-flex d-lg-none`} > <BsThreeDots/> </p>
                        </div>
                        <div className="followingbuttoncontainer">
                        <button type="button" className="buttonfollow">Following <IoIosArrowDown className="downarrow"/> </button>
                        <button type="button" className="buttonmessage">Message </button>
                        <button type="button" className="buttonperson"> <BsPersonPlus/> </button>
                        </div>
                        <p className={`threeDots d-none d-lg-flex`} > <BsThreeDots/> </p>
                        </div>
                    </div>
                    <div>
                    <div className="followingDetails">
                        <div className="scorefollwiongnamecount"><p className="count">1483</p>
                             <p>posts</p>
                            </div>
                            <div className="scorefollwiongnamecount"><p className="count">27M</p>
                             <p>followers</p>
                            </div>
                            <div className="scorefollwiongnamecount"><p className="count">266</p>
                             <p>following</p>
                            </div>
                    </div>
                    <div className="nameDetailsContaienr">
                        <h3 className="namerofkohili paraa">Virat Kohli</h3>
                        <p className="paraa">Carpedium!</p>
                        <p className="paraa"><a className="linkkkkk" href="https://www.instagram.com/virat.kohli/">one8.com</a></p>
                    </div>
                    <p className={`followedby mt-3 align-items-start`}>Followed by <p className="thikFollowed"> shubamgil, rithusing, neha</p> + 50 more</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfilePanel