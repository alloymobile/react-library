import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AppLink(props) {
  return (
    <a className={props.appLink.className} id={props.appLink.id} href={props.appLink.href}>
    <FontAwesomeIcon icon={props.appLink.icon}/>
    <span class="px-2" >{ props.appLink.name }</span>
    </a>
  )
}

export default AppLink