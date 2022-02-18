import React from 'react'
import AppIcon from './AppIcon'

function AppIconLink(props) {
  return (
    <a className={props.appIconLink.className} id={props.appIconLink.id} href={props.appIconLink.href}>
      {props.appIconLink.appIcon && <AppIcon appIcon = {props.appIconLink.appIcon}/>}
      {props.appIconLink.name && <span className="px-2" >{ props.appIconLink.name }</span>}
    </a>
  )
}

export default AppIconLink