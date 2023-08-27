import  {useState} from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const reset = () => {
        setValues({
            name: "",
            username: "",
            password: ""
        })
    }

    const handleChange = (evt) => {
        evt.persist();
        setValues((prevValues) => ({...prevValues, [evt.target.name]: evt.target.value}));
    }

    return {values, reset, handleChange}
}