
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

        default:
            return state;    
    }
}