import React from 'react';
import '../styles/team.css';
import Member1 from '../assets/bob.jpeg';
import Member2 from '../assets/piseth.jpg';
import Member3 from '../assets/ben.jpg';
import TeamMemberCard from '../Cads/TeamMemberCard';

export default function Team() {
    return (

        <div>


            <div className="team-header">Our Team</div>

            <div className="team-description">We seek to provide you with web and online consulting services. Reach out to us if you're looking for help with your business.</div>

            <hr></hr>

            <div className="team-page">

                <TeamMemberCard
                    name="Bob"
                    bio="Tech consultant and web developer with a passion for entrepreneurship."
                    linkedinUrl="https://www.linkedin.com/in/bob-ranalli-3007131a9/"
                    imageUrl={Member1}
                />
                <TeamMemberCard
                    name="Piseth"
                    bio="Sales Consultant with a focus on web services and lead generation."
                    linkedinUrl="https://www.linkedin.com/in/piseth-sam/"
                    imageUrl={Member2}
                />
                <TeamMemberCard
                    name="Ben"
                    bio="Tech business analyst experienced in improving SEO and online presence."
                    linkedinUrl="https://www.linkedin.com/in/ben-aguilar-448316193/"
                    imageUrl={Member3}
                />
            </div>
        </div>
    );
}