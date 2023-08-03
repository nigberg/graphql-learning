import React from "react";
import {ApolloProvider, gql, useQuery} from "@apollo/client";
import Pet from "./bus/pet";
import  {client} from "./init/client";

export default function App() {

    return (
        <ApolloProvider client={client}>
            <Pet/>
        </ApolloProvider>
    )
}

    function DisplayLocations() {
        const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
        const {loading, error, data} = useQuery(GET_LOCATIONS);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error.message}</p>;
        //
        return data.locations.map(({id, name, description, photo}) => (
            <div key={id}>
                <h3>{name}</h3>
                <img width="400" height="250" alt="location-reference" src={`${photo}`}/>
                <br/>
                <b>About this location:</b>
                <p>{description}</p>
                <br/>
            </div>
        ));
    }
