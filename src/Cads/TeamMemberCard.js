import React from 'react';

const TeamMemberCard = ({ name, bio, linkedinUrl, imageUrl }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div
            className="team-member-card"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className="team-member-image-container">
                <img className="team-member-image" src={imageUrl} alt={name} />
            </div>
            <h2 className="team-member-name">{name}</h2>
            <p className="team-member-bio">{bio}</p>
            <a href={linkedinUrl} className="team-member-linkedin">
                Connect on LinkedIn
            </a>
        </div>
    );
};

export default TeamMemberCard;