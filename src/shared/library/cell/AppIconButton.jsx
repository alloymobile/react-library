import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AppIcon from './AppIcon'

function AppIconButton(props) {
  return (
    <button className={props.appIconButton.className} id={props.appIconButton.id} onClick={()=>props.onClick(props.appIconButton)}>
        {props.appIconButton.appIcon &&  <AppIcon appIcon={props.appIconButton.appIcon}/> }
        {props.appIconButton.name && <span className="px-2">{props.appIconButton.name}</span>}
    </button>
  )
}

export default AppIconButton