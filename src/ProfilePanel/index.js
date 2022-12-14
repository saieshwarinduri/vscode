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
        return(
            <div className="contentcontainerMainfro">
                <div className="profilebox">
                    <button type="button" className="profilebutton" onClick={this.setstatessss}>
                <div className={colorr}>
                <img src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671017202/virat-kohli-buys-7000-sq-ft-luxury-pad-worth-rs-34-crore-in-mumbai_xxjgfi.jpg" alt="virat" className="viratProfile"/>
                </div> 
                </button>
                </div>
                <div className="detailsContinaer">
                    <div className="nameFollowingtitle">
                        <h1 className="viratKohiliNmetitele">virat.kohli<img src="https://res.cloudinary.com/djomnr5y2/image/upload/v1671020026/bluetick_idipfu.png" alt="blutic" className="blutickImage"/></h1>
                        <button type="button" className="buttonfollow">Following <IoIosArrowDown className="downarrow"/> </button>
                        <button type="button" className="buttonmessage">Message </button>
                        <button type="button" className="buttonperson"> <BsPersonPlus/> </button>
                        <p className="threeDots" > <BsThreeDots/> </p>

                    </div>
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
                  <p className="followedby">Followed by <p className="thikFollowed"> shubamgil, rithusing, neha</p> + 50 more</p>
                </div>
            </div>
        )
    }
}
export default ProfilePanel