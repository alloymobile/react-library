import { faApple, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import AddBar from "../shared/library/tissue/AddBar";
import MainBody from "../shared/library/tissue/MainBody";
import NavBar from "../shared/library/tissue/NavBar";
import SideBar from "../shared/library/tissue/SideBar";

const appIconLinks = [
    {  id: 1, name: 'Microsoft',className: 'list-group-item list-group-item-action',appIcon: { icon: faMicrosoft},href:'https://google.com'},
    {  id: 2, name: 'Google',className: 'list-group-item list-group-item-action',appIcon: { icon: faGoogle},href:'https://google.com'},
    {  id: 3, name: 'Apple',className: 'list-group-item list-group-item-action',appIcon: { icon: faApple},href:'https://google.com'}
]

const appIconButtons = [
    {  id: 1, name: 'Microsoft',className: 'btn btn-primary',icon: faMicrosoft,spin: true},
    {  id: 2, name: 'Google',className: 'btn btn-primary'},
    {  id: 3, name: 'Apple',className: 'btn btn-primary',icon: faApple}
]

function HomePage() {
    const onAppIconButtonClick = (appIconButton)=>{
        console.log(appIconButton)
    }
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row">
        <div className="col-sm-1">
           <SideBar appIconLinks = {appIconLinks} /> 
        </div>
        <div className="col-sm-10">
          <MainBody />
        </div>
        <div className="col-sm-1">
          <AddBar appIconButtons = {appIconButtons} onAddBarClick={onAppIconButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
