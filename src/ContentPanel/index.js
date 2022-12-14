import { Component } from "react";
import ProfilePanel from '../ProfilePanel'

import GalaryList from '../galaryList'
import HeaderList from '../headerlist'
import './index.css'

const headerList=[
    {
      id:"viru",
      name:"POSTS",
    },
    {
        id:"viruanushka",
        name:"REELS",
      },
      {
        id:"anushka",
        name:"SOMTHING",
      }
]

const galaryList=[
    {
        id:0,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_8_vwhff8.jpg",
        category:"viru"
    },
    {
        id:1,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_8_vwhff8.jpg",
        category:"viruanushka"
    },
    {
        id:2,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027494/20221214_193918_v1xojk.jpg",
        category:"viru"
    },
    {
        id:3,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_8_vwhff8.jpg",
        category:"viru"
    },
    {
        id:4,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027494/20221214_193822_dee1py.jpg",
        category:"viruanushka"
    },
    {
        id:5,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_8_vwhff8.jpg",
        category:"viru"
    },
    {
        id:6,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_8_vwhff8.jpg",
        category:"viruanushka"
    },
    {
        id:7,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027494/20221214_193822_dee1py.jpg",
        category:"viru"
    },
    {
        id:8,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027494/20221214_193908_rutep9.jpg",
        category:"viruanushka"
    },
    {
        id:9,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027494/20221214_193833_sxxxqo.jpg",
        category:"viru"
    },
    {
        id:10,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027494/20221214_193822_dee1py.jpg",
        category:"viru"
    },
    {
        id:11,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027495/20221214_193948_a3btrh.jpg",
        category:"viruanushka"
    },
    {
        id:12,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027495/20221214_194010_dpajk4.jpg",
        category:"viru"
    },
    {
        id:13,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027495/20221214_193935_c2okfo.jpg",
        category:"anushka"
    },
    {
        id:14,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027495/20221214_193959_caruyq.jpg",
        category:"viru"
    },
    {
        id:15,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027495/20221214_194034_mfufht.jpg",
        category:"anushka"
    },
    {
        id:16,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027496/20221214_194021_bkzu0q.jpg",
        category:"viru"
    },
    {
        id:17,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027496/20221214_194107_xkfdbq.jpg",
        category:"anushka"
    },
    {
        id:18,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027497/20221214_194137_rmdfpt.jpg",
        category:"anushka"
    },
    {
        id:19,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027497/20221214_194149_zzdbl0.jpg",
        category:"anushka"
    },
    {
        id:20,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027497/20221214_194216_oehvrt.jpg",
        category:"viru"
    },
    {
        id:21,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/download_6_hf4ivx.jpg",
        category:"anushka"
    },
    {
        id:22,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/20221214_194122_rjih8v.jpg",
        category:"viru"
    },
    {
        id:23,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_10_c2kmfq.jpg",
        category:"anushka"
    },
    {
        id:24,
        url:"https://res.cloudinary.com/djomnr5y2/image/upload/v1671027498/images_9_dwghhd.jpg",
        category:"anushka"
    }
    


]


class ContentPanel extends Component{
    state={number:""}

  getTheidof=(id)=>{
    this.setState({number:id})
  }

    
    render(){
        const {number}=this.state
        
        const filteredList=number!==""?galaryList.filter(each=>(each.category===number)):galaryList
        
       

        return(
            <div className="contentcontainerMain">
                <ProfilePanel/>
                <div className='middilecontainer'>
              <div className='headierlistnameconainer'>
              {headerList.map(each=>(
                <HeaderList getTheidof={this.getTheidof}  textcolor={each.id===number}  details={each} key={each.id}/>
              ))}
             </div>
            </div>
            <div className="galarycontainer">

                {filteredList.map(each=>(
                     <GalaryList eachdetail={each} key={each.id}/>
                ))}
            </div>
            
                
            </div>
        )
    }
}
export default ContentPanel