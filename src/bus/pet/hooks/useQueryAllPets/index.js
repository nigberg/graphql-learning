import {useQuery, gql} from "@apollo/client";

const queryAllPets = gql`
    query allPets{
        allPets{
            __typename
            id
            name
            weight
        }
    }
`;
export const useQueryAllPets = () => {
    return useQuery(queryAllPets);
}