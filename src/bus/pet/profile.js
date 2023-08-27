import {useQueryProfile} from "./hooks/useQueryProfile";
import React from "react";
const Profile = () => {
    const {getProfile, loading, error, profile} = useQueryProfile();
    const loadProfile = () => {
        getProfile({
            variables: {
                id: "C-1"
            }
        });
    };
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const profileJSX = (
        <p>Name: {profile && profile.name}, Type: {profile && profile.__typename}</p>
    )
    return(
        <>
            <p>Profile:</p>
            <button onClick={loadProfile}>Load profile</button>
            {profile && profileJSX}
        </>
    )

};
export default  Profile;