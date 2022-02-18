import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AppButton(props) {
  return (
    <button className={props.appButton.className} id={props.appButton.id} onClick={()=>props.onClick(props.appButton)}>
        <FontAwesomeIcon icon={props.appButton.icon}/>
        <span className="px-2">{props.appButton.name}</span>
    </button>
  )
}

export default AppButton