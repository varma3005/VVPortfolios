import React from 'react'
import './MyWork.css'
import arrow_icon from '../../Portfolio_React_Assets/assets/arrow_icon.svg'
import mywork_data from '../../Portfolio_React_Assets/assets/mywork_data'
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key= {index} src={work.w_img} alt=""/>
        })}

        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork;