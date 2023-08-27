import React from "react";
import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvailablePets";

const SpecialList = () => {
    const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets();

    const loaderJSX = loading && (
        <p>Loading...</p>
    );

    const errorJSX = error && (
        <p>We have a problem: {error.message}</p>
    );

    const petsJSX = pets && pets.map(({id, __typename, name, weight}) => (
        <p key={id}>
            <span>Name: {name}</span><br/>
            <span>Type: {__typename}</span><br/>
            <span>Weight: {weight}</span>
        </p>

    ));


    return (
        <>
            <button onClick={getAllAvailablePets}>Download data</button>
            {loaderJSX}
            {errorJSX}
            {petsJSX}
        </>
    );
};

export default SpecialList;