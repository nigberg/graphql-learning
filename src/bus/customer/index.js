import React from "react";
import {useCustomerCreate} from "./hooks/useCustomerCreate";

const Customer = () => {
    const {values, handleChange, handleSubmit, createdAccount} = useCustomerCreate();
    const createdJSX = (
        <p>We just created account: <br/>
            Name: {createdAccount && createdAccount.name + ", Type: "+createdAccount.__typename+ ", Username: "+createdAccount.username}
        </p>
    )
    return(
        <>
        <p>Sign up:</p>
        <form name = 'form'>
            <input placeholder="Your name:" type="text" name="name" value={values.name} onChange={handleChange}/><br/>
            <input placeholder="Your Username:" type="text" name="username" value={values.username} onChange={handleChange}/><br/>
            <input placeholder="Your Password:" type="text" name="password" value={values.password} onChange={handleChange}/><br/>
            <button type="submit" onClick={handleSubmit}>Sign up!</button>
        </form>
            {createdAccount && createdJSX}
        </>
    );
};

export  default  Customer;