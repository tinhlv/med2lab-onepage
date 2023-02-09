import React from "react";
import MainNavbar from '../Navbar'

function MainLayout(props){
    return(
        <div className="Layout">
            <MainNavbar />
            {props.children}
        </div>
    )
}
export default MainLayout;