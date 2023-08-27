import {gql, useMutation} from "@apollo/client";
import {useForm} from "../useForm";

const mutationCreateAccount = gql`
    mutation createAccount($input: CreateAccountInput!){
        createAccount(input: $input){
            name
            username
        }
    }
`;
export const useCustomerCreate = () => {
    const  {reset, values, handleChange} = useForm({
        name: "",
        username: "",
        password: ""
    })
    const [addUser, {data}] = useMutation(mutationCreateAccount);

    const handleSubmit = (evt) => {
        evt.persist();
        evt.preventDefault();
        addUser({
            variables: {
                input: values
            }
        });
        reset();
    };

    return {values, handleChange, handleSubmit, createdAccount: data && data.createAccount};


}