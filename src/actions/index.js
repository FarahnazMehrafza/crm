/* import { json } from "stream/consumers";
 */
export const selectperson = (peopleId) => {
   return {
      type: 'SELECTED_PERSON',
      selectId: peopleId,
   } 
}

export const noneSelected = () => {
    return {
        type:'NONE_SELETED'
    }
}

export const createNewContact = ({ FirstName, lastName, phone, email, company, project, notes }) => {
    return(dispatch) => {
        fetch('http//127.0.0.1:3000/contact', {
            method: 'POST',
            body: JSON.string ({
            'fisrtName' : FirstName,   
            'lasttName' : lastName,  
            'phone' : phone,  
            'email' : email,
            'company' : company,
            'project' : project,
            'notes' : notes,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then (() => {
            dispatch({ type: 'NEW_CONTACT'});
        })
        .then(() => {
            dispatch(loadInitialContacts());
        })
        .catch(error => console.log(error))
    }
}

export const  updateContact = (person) => {
   return {
    type: 'UPDATE_Contact',
    payload: person,
   } 
}

export const saveContact= ({ FirstName, lastName, phone, email, company, project, notes, _id }) => {
    return(dispatch) => {
        fetch('http//127.0.0.1:3000/contac/${_id}', {
            method: 'PUT',
            body: JSON.string ({
            'fisrtName' : FirstName,   
            'lasttName' : lastName,  
            'phone' : phone,  
            'email' : email,
            'company' : company,
            'project' : project,
            'notes' : notes,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then (() => {
            dispatch({ type: 'SAVE_CONTACT'});
        })
        .then(() => {
            dispatch(loadInitialContacts());
        })
        .catch(error => console.log(error))
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
