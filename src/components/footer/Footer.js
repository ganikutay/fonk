import React from "react";

const Footer = () => {

    const footerStyle = { // altta style olarak object atamasi yaptik. CSS
        color: "black",
        backgroundColor:"rgb(90, 90, 90)",
        textAlign:"center",
        padding:"10px",
        fontFamily:"system-ui",
        position:"absolute",
        /* bottom:"0px", */
        left:"10px",
        right:"10px",
        bottom: "-6px"
    };

    return(
        <p style={footerStyle}> Copyright 2021 by Gani KUTAY</p>
    );
};
export default Footer;