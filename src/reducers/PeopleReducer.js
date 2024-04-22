
const initialState={
  people: [],
  detailView: false,
  personSelected: null,
  firstName:'',
  lastName:'',
  phone:'',
  email:'',
  company:'',
  Project:'',
  note:'',
  _id:'',
  toUpdate: false, 
}
export default (state = initialState, action) => {     //reducers here
    switch(action.type) {
        case 'INITIAL FETCH':
            return{
                ...state,
                people:action.payload
            }
          
            case 'SELECT_PERSON':
                return{
                    ...state,
                    detailView: true,
                    personSelected: action.selectId,
                }
                
            case 'NONE_SELECTED':   
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }

            case 'FROM_UPDATE':
                return{
                    ...state,
                    [action.payload.prop]: action.payload.value
                }

                case'NEW_CONTACT':
                  return {
                    ...state,
                    fisrtName :'',   
                    lasttName : '',  
                    phone : '', 
                    email : '',
                    company : '',
                    project : '',
                    notes : '',
                 }

                 case 'ADD_PERSON' :
                    return {
                        ...state,
                        ...action.newPerson
                    }
                case 'ADD_Person':
                    return {
                        ...state,
                        toUpdate: true,
                        fisrtName :action.payload.firstName,   
                        lasttName : action.payload.lastNameName,  
                        phone : action.payload.phone, 
                        email : action.payload.mail,
                        company : action.payload.company,
                        project : action.payload.project,
                        notes : action.payload.notes,
                        _id : action.payload._id,
                    }

                    case 'SAVE_CONTACT' :
                        return {
                            ...state,
                            toUpdate: false,
                            detailView: false,
                            fisrtName :'',   
                    lasttName : '',  
                    phone : '', 
                    email : '',
                    company : '',
                    project : '',
                    notes : '',
                    _id :'', 

                        }






        default:
            return state;    
    }
}
