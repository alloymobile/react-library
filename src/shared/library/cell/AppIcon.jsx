import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AppIcon(props) {
  return (
    <span>
        {props.appIcon && <FontAwesomeIcon icon={props.appIcon.icon}/>}
    </span>
  )
}

export default AppIcon