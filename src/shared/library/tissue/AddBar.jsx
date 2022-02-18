import React from 'react'
import AppIconButton from '../cell/AppIconButton'

function AddBar(props) {
  return (
    <div>
        {props.appIconButtons.map((appIconButton)=><AppIconButton appIconButton = {appIconButton} onClick={()=>props.onAddBarClick(appIconButton)}/>)}
    </div>
  )
}

export default AddBar