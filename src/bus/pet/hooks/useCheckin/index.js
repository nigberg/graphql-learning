import {gql, useMutation} from "@apollo/client";
import {useState} from "react";

 const mutationCheckin = gql`
     mutation checkin($id: ID!){
         checkIn(id: $id){
             pet{
                 id
                 name
             }

         }
     }   
 `;
export const useCheckin = () => {
    // const [err, setErr] = useState(false)
    const [_checkin, {data, error}] = useMutation(mutationCheckin);
    const checkIn = (id) => {
        (async () => {
            try {
                await _checkin({
                    variables: {
                        id
                    }
                })
            }
            catch(e) {
                console.log(e.message)
            };
        })();
    };
    const pet = data && data.checkIn.pet;
    return {checkIn, pet, error};

};