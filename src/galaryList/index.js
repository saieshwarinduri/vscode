import './index.css'

const GalaryList =props=>{
    const {eachdetail}=props
    const {url}=eachdetail

    return(
        <div>
            <img src={url} alt="dd" className='galaruImage'/>
        </div>
    )
}

export default GalaryList