import {useCheckin} from "./hooks/useCheckin";

export const CheckinPet = () => {
    const {checkIn, pet, error} = useCheckin();

    const petJSX = pet && (
        <>
            <p>ID: {pet.id}</p>
            <p>Name: {pet.name}</p>
        </>
    );
    const errorJSX = error && (
        <>
            <p>We had a problem: {error.message}</p>
        </>
    )
    return(
        <>
            <p>Checkin</p>
                <button onClick={() => {checkIn("C-1")}}>Check in!</button>
            {petJSX}
            {errorJSX}
        </>
    )
};