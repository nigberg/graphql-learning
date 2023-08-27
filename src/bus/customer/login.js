import React from "react";
import {useCustomerLogin} from "./hooks/useCustomerLogin";

export  const Login = () => {
    const {values, handleChange, handleSubmit, authorizedUser} = useCustomerLogin();
    const loggedJSX = (
        <p>You've just logged in. Your data: <br/>
            <span>Name: {authorizedUser && authorizedUser.name}</span><br/>
            <span>Username: {authorizedUser && authorizedUser.username}</span>
        </p>
    )
    return(
        <>
            <h2>Please, login</h2>
            <form name = 'form'>
                <input placeholder="Your Username:" type="text" name="username" value={values.username} onChange={handleChange}/><br/>
                <input placeholder="Your Password:" type="text" name="password" value={values.password} onChange={handleChange}/><br/>
                <button type="submit" onClick={handleSubmit}>Sign in!</button>
            </form>
            {authorizedUser && loggedJSX}
        </>
    )
};