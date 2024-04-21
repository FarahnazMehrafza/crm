
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




        default:
            return state;    
    }
}
