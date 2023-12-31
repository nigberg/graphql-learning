import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";
import React from "react";
const Counter = () => {
    const {loading, error, data} = useQueryAvailablePets();
    const count = data ? data.availablePets : null;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data)
    return(
        <h3>Total count: {count}</h3>
    )

};
export default  Counter;