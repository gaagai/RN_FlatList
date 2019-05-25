import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SlectionReducer'


export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})