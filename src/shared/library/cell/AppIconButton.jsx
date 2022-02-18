import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AppIconButton(props) {
  return (
    <button className={props.appIconButton.className} id={props.appIconButton.id} onClick={()=>props.onClick(props.appIconButton)}>
        {props.appIconButton.icon && <FontAwesomeIcon icon={props.appIconButton.icon} spin ={props.appIconButton.spin && true}/>}
        {props.appIconButton.name && <span className="px-2">{props.appIconButton.name}</span>}
    </button>
  )
}

export default AppIconButton