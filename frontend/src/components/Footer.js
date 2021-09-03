import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icon">
               <a href="https://www.facebook.com"> <FacebookIcon /></a>
               <a href="https://www.instagram.com"><InstagramIcon/></a>
            </div>
            <div className="footerbar">
               © 2021 - maycoll.com
            </div>
        </div>
    )
}

export default Footer
