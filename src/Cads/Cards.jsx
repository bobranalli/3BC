import React, { Component } from 'react';
import Card from './CardUI';
// import hand from '../assets/hand.jpg';
// import orb from '../assets/orb.jpg';
// import mount from '../assets/mount.jpg';
import hs from '../assets/hubspot.jpeg';
import op from '../assets/online-presence.jpeg';
import wd from '../assets/web-design.jpeg';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={wd} title="Web Development"
                            content=<ul> <li>Built From Scratch</li> <li>Website Redesigns</li> <li>UI/UX Optimization</li> </ul>

                        />
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={hs} title="HubSpot Integration"
                            content=<ul> <li>Best Practices</li> <li>Tutorials and Demos</li> <li>Use Cases and Product Fit</li> </ul>

                        />
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={op} title="Online Presence"
                            content=<ul> <li>SEO</li> <li>Social Media Marketing</li>  <li>Blogging and Copywriting</li> </ul>
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;