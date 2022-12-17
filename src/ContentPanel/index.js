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

class ContentPanel extends Component{
    state={number:"", listtt:[]}

 componentDidMount(){
    this.sendStatue()
 }

  getTheidof=(id)=>{
    this.setState({number:id})
  }
  sendStatue= async()=>{
    const result=await fetch("http://localhost:4000/api") 
    const data=await result.json()
    this.setState({listtt:data})
  }

    
    render(){
        
        const {number, listtt}=this.state
        
        const filteredList=number!==""?listtt.filter(each=>(each.category===number)):listtt
        
       

        return(
            <div className={`contentcontainerMain `}>
                
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