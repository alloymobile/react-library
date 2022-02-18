import React from 'react'
import AppIconLink from '../cell/AppIconLink'

function SideBar(props) {
    console.log(props);
  return (
    <div>
        {props.appIconLinks.map((appIconLink)=><AppIconLink appIconLink = {appIconLink}/>)}
    </div>
  )
}

export default SideBar