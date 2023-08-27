import {useLazyQuery, gql} from "@apollo/client";

const queryAllAvailablePets = gql`
    query allAvailablePets{
        allAvailablePets{
            __typename
            id
            name
            weight
        }
    }
`;
export const useQueryAllAvailablePets = () => {
    const [getAllAvailablePets, {loading, error, data}] = useLazyQuery(queryAllAvailablePets);
    return {getAllAvailablePets, loading, error, pets: data && data.allAvailablePets};
};