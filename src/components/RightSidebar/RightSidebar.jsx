import './RightSidebar.css'
import assets from '../../assets/assets'
import { logout } from '../../config/firebase'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const RightSidebar = () => { 

  const {chatUser,messages} = useContext(AppContext); 
  const [msgImages,setMsgImages] = useState([]);

  useEffect(()=>{
    let tempVar = [];
    messages.map((msg)=>{
      if(msg.image){
        tempVar.push(msg.image)
      }
    })
    setMsgImages(tempVar);
  },[messages])

  return chatUser ? (
    <div className='rs'>
        <div className="rs-profile">
          <img src={chatUser.userData.avatar} alt="" />
          <h3>
  {chatUser.userData.lastSeen && (Date.now() - chatUser.userData.lastSeen <= 70000) ? (
    <img src={assets.green_dot} className='dot' alt="" />
  ) : null} 
  {chatUser.userData.name}
</h3>

          <p>{chatUser.userData.bio}</p>
        </div>
        <hr />
        <div className="rs-media">
          <p>Media</p>
          <div>
            {msgImages.map((url,index)=>(<img onClick={()=>window.open(url)} key={index} src={url} />))}
            {/* <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
            <img src={assets.pic3} alt="" />
            <img src={assets.pic4} alt="" />
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" /> */}
          </div>
        </div>
        <button onClick={()=>logout()} >Logout</button>
    </div>
  )
  : (
    <div className='rs'>
      <button onClick={()=>logout()} >LogOut</button>
    </div>
  )
}

export default RightSidebar