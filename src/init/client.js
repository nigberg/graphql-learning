import {ApolloClient, InMemoryCache} from '@apollo/client';

const url = "https://funded-pet-library.moonhighway.com/";
// const url = 'https://flyby-router-demo.herokuapp.com/'

export const client =  new ApolloClient({uri: url, cache: new InMemoryCache()});
