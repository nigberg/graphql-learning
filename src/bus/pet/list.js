import React from "react";
import {useQueryAllPets} from "./hooks/useQueryAllPets";

const List = () => {
    const {loading, error, data} =useQueryAllPets();
    const pets = data ? data.allPets : null;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data)
    return(
        <ul>{pets.map(item => (
            <li key={item.id}>Type: {item.__typename}, Name: {item.name}, Weight: {item.weight}</li>
        ))}</ul>

    );
};
export default List;