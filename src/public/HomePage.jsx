import React from 'react'
import AddBar from '../shared/library/tissue/AddBar'
import MainBody from '../shared/library/tissue/MainBody'
import NavBar from '../shared/library/tissue/NavBar'
import SideBar from '../shared/library/tissue/SideBar'

function HomePage() {
  return (
    <div>
        <NavBar/>
        <SideBar/>
        <MainBody/>
        <AddBar/>
    </div>
  )
}

export default HomePage