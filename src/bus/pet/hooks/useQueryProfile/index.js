import {useLazyQuery, gql} from "@apollo/client";

const queryPetById = gql`
    query queryPetById($id: ID!){
        petById(id: $id){
            __typename
            id
            name
        }
    }
`;
export const useQueryProfile = () => {
    const [getProfile, {loading, error, data}] = useLazyQuery(queryPetById);
    return {getProfile, loading, error, profile: data && data.petById};

};