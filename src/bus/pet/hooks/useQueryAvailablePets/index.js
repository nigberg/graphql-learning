import {useQuery, gql} from "@apollo/client";

const queryAvailablePets = gql`
    query{
    availablePets
}
    `
export const useQueryAvailablePets = () => {
    return useQuery(queryAvailablePets);
}