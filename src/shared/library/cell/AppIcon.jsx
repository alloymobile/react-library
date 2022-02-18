import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AppIcon(props) {
  return (
    <span>
        {props.appIcon && <FontAwesomeIcon icon={props.appIcon.icon} spin={props.appIcon.spin} size={props.appIcon.size}/>}
    </span>
  )
}

export default AppIcon