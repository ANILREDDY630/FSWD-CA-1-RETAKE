import React from 'react';

const TeamMemberCard = (member)=>{
    return (
        <div className='team-member-card'>
            <h2>{member.name}</h2>
            <p>{member.title}</p>
        </div>
    )
}

export default TeamMemberCard;