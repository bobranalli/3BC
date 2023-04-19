import React from 'react'
import './card-styles.css';

const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Futuristic hand" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.content}
                </p>
                <a href="mailto: robertranalli99@gmail.com" className="btn btn-outline-success">Contact Us</a>
            </div>

        </div>
    );
}

export default Card;