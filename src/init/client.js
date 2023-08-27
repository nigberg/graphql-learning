import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";

const uri = "https://funded-pet-library.moonhighway.com/";
const httpLink = createHttpLink({uri})
const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem("token");
    return{
        headers:{
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})


export const client =  new ApolloClient({link: authLink.concat(httpLink), cache: new InMemoryCache()});
