import React from "react";
import Counter from "./counter";
import List from "./list";
import SpecialList from "./specialList";
import Profile from "./profile";
import {CheckinPet} from "./checkinPet";

const Pet = () => {
    return(
        <>
            <h3>Pet</h3>
            <CheckinPet/>
            {/*<Counter/>*/}
            {/*<List/>*/}
            {/*<SpecialList/>*/}
            {/*<Profile/>*/}
        </>
    );
}
export default Pet;