// MemberList.js
import React, { useState } from "react";
import Profile from '../assets/profile-circle-svgrepo-com.svg'

const MemberList = ({ onSelectMember }) => {
    const [members] = useState([
        { id: 1, name: 'John', profilePhoto: Profile },
        { id: 2, name: 'Jane', profilePhoto: Profile },
        { id: 3, name: 'Alice', profilePhoto:Profile },
        { id: 4, name: 'Bob', profilePhoto: Profile },
        { id: 5, name: 'Boby', profilePhoto: Profile },
        { id: 6, name: 'John Bhai', profilePhoto: Profile },
        { id: 7, name: 'Jane Bro', profilePhoto: Profile },
        { id: 8, name: 'Alice Mark', profilePhoto:Profile },
        { id: 9, name: 'Bob cr', profilePhoto: Profile },
        { id: 10, name: 'Boby joker', profilePhoto: Profile },
      
    ]);
    

    return (
        <div style={{ height: 'calc(110vh - 110px)',overflowY:'auto' }}>
            <div style={{scrollbarWidth: '1px', scrollbarColor: '#888 transparent' }}>
                <ul className="list-group" style={{ margin: 0, padding: 0}}>
                    {members.map(member => (
                        <li className="list-group-item d-flex justify-content-between align-items-center"
                            key={member.id} style={{ cursor: 'pointer'
                            ,borderRadius:'10px', border:'1px solid black',margin:'1px',backgroundColor:'teal' }} onClick={() => onSelectMember(member)}>
                       <img src= {member.profilePhoto} alt="" />
                            {member.name}
                            <span className="badge bg-primary rounded-pill">1</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MemberList;