import React, { Component } from 'react';
import Card from './CardUI';
import hand from '../assets/hand.jpg';
import orb from '../assets/orb.jpg';
import mount from '../assets/mount.jpg';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={orb} title="Web Development"
                            content=<ul> <li>Built From Scratch</li> <li>Website Redesigns</li> <li>UI/UX Optimization</li> </ul>

                        />
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={hand} title="HubSpot Integration"
                            content=<ul> <li>Best Practices</li> <li>Tutorials and Demos</li> <li>Use Cases and Product Fit</li> </ul>

                        />
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={mount} title="Online Presence"
                            content=<ul> <li>SEO</li> <li>Social Media Marketing</li>  <li>Blogging and Copywriting</li> </ul>

                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;