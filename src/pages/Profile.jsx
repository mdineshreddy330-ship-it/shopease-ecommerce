import React, { useState } from "react";

import Navbar from "../components/Navbar";

function Profile() {
  const [search, setSearch] =
    useState("");

  const storedProfile =
    JSON.parse(
      localStorage.getItem("profile")
    ) || null;

  const [profile, setProfile] =
    useState(storedProfile);

  const [isEditing, setIsEditing] =
    useState(!storedProfile);

  const [name, setName] = useState(
    storedProfile?.name || ""
  );

  const [email, setEmail] =
    useState(
      storedProfile?.email || ""
    );

  const [phone, setPhone] =
    useState(
      storedProfile?.phone || ""
    );

  const [address, setAddress] =
    useState(
      storedProfile?.address || ""
    );

  const saveProfile = () => {
    const profileData = {
      name,
      email,
      phone,
      address,
    };

    localStorage.setItem(
      "profile",
      JSON.stringify(profileData)
    );

    setProfile(profileData);

    setIsEditing(false);

    alert("Profile Saved");
  };

  const editProfile = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="profile-page">
        {isEditing ? (
          <div className="profile-card">
            <h1>
              {profile
                ? "Edit Profile"
                : "Create Profile"}
            </h1>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
            />

            <textarea
              rows="5"
              placeholder="Address"
              value={address}
              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
            />

            <button
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>
        ) : (
          <div className="profile-card">
            <h1>
              Profile Details
            </h1>

            <div
              style={{
                marginTop: "30px",
                lineHeight: "2.2",
              }}
            >
              <p>
                <strong>
                  Full Name:
                </strong>{" "}
                {profile?.name}
              </p>

              <p>
                <strong>
                  Email:
                </strong>{" "}
                {profile?.email}
              </p>

              <p>
                <strong>
                  Phone:
                </strong>{" "}
                {profile?.phone}
              </p>

              <p>
                <strong>
                  Address:
                </strong>{" "}
                {profile?.address}
              </p>
            </div>

            <button
              onClick={editProfile}
              style={{
                marginTop: "30px",
              }}
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;