import { type } from "os";

export const selectperson = (peopleId) {
   return {
      type: 'SELECTED_PERSON',
      selectId: peopleId,
   } 
}

export const noneSelected ={
    return {
        type:'NONE_sELETED'
    }
}

export const loadInitialContacts = () => {  
   return(dispatch) =>{
         fetch('http://127.0.0.1:3000/contact')
            .then((Response) => {
                  return Response.jason();
            })
            .then((data) => {
                dispatch ({ type:'INITIAL_FETCH',payload: data})
            })
            .catch(error => console.log(error))
        };
};
