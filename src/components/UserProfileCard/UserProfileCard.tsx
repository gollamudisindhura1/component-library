import React from "react";
import type { UserProfileCardProps } from "../../types";


export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail,
    showRole,
    onEdit,
    children
}) => {
  
    const getInitials = () =>{
        const names = user.name.split(" ")
        return (names[0][0] + names[names.length -1][0]).toUpperCase();
    };

    return (
        <div className = "profile-card">
            {user.avatarUrl ?(
                <img src={user.avatarUrl} alt="Profile" className="avatar-img" />
      ) : (
        <div className="avatar-placeholder">{getInitials()}</div>
      )}
      <h3>{user.name}</h3>
      {showEmail && <p>📧 {user.email}</p>}
      {showRole && <p>💼 {user.role}</p>}
       {onEdit && (
        <button onClick={() => onEdit(user.id)} className="edit-btn">
          Edit Profile
        </button>
      )}
      {children}
      </div>

    )
}