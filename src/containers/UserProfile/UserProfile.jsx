import React from "react";

import "./UserProfile.scss";

const DEFAULT_IMAGE =
  "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png";
const DEFAULT_ALT = "No Avatar";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {avatar.length > 0 
                ? <img src={avatar} alt={name} />
                : <img src={DEFAULT_IMAGE} alt={DEFAULT_ALT} />
              }
            </div>

            {name && (
              <p className="user__name">
                {name}
                <span>@{username}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
