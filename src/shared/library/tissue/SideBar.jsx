import React from 'react'
import AppIconLink from '../cell/AppIconLink'

function SideBar(props) {
  return (
    <div>
        {props.appIconLinks.map((appIconLink)=><AppIconLink key={appIconLink.id} appIconLink = {appIconLink}/>)}
    </div>
  )
}

export default SideBar