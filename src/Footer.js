import React from "react";
import './styles/styles.css'

function Footer(props) {
    return (
        <footer className="footer d-flex flex-column align-items-center">
            <img className="footer-logo" src={props.companyLogo} alt={props.companyName} />

            <p className="footer-company-email mt-3">  {props.email} </p>

            <p className="company-info text-center mt-3">
                <strong>{props.companyName}</strong>
            </p>
        </footer>
    );
}

export default Footer;
