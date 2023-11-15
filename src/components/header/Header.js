import React, { Component } from "react";
import DateTime from "../datetime/DateTime";
import Logo from "../../images/react-logo.png"; 
import "./Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            projeNo: "Proje 1"
        }
    }

    

    render() {
        return (
            <div className="header">
                <img className="header-logo" src={Logo} alt="Logo"/>
                <p className="header-project-name">{this.state.projeNo}</p>
                <DateTime />
            </div>
        )
    }
}
export default Header;