import React from 'react'
import AppIcon from './AppIcon'

function AppIconLink(props) {
  console.log(props);
  return (
    <a className={props.appIconLink.className} id={props.appIconLink.id} href={props.appIconLink.href}>
      <AppIcon appIcon = {props.appIconLink.appIcon}/>
      <span class="px-2" >{ props.appIconLink.name }</span>
    </a>
  )
}

export default AppIconLink