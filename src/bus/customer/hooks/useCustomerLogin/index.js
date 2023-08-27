import {gql, useMutation} from "@apollo/client";
import {useForm} from "../useForm";
import {useState, useEffect} from "react";

const mutationLogin = gql`
    mutation login($username: ID!, $password: String!){
        logIn(username: $username, password: $password){
            customer{
                name
                username
            }
            token
        }
    }
`;

export const useCustomerLogin = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const  {reset, values, handleChange} = useForm({
        username: "",
        password: ""
    });
    const [login, {data}] = useMutation(mutationLogin);

    const token = data && data.logIn.token;

    if(token){
        console.log(token);
        localStorage.setItem("token", token);
    }

    const handleSubmit = (evt) => {
        evt.persist();
        evt.preventDefault();
        login({
            variables: values
        });
        reset();
    };

    return {values, handleChange, handleSubmit, authorizedUser: data && data.logIn.customer};

};