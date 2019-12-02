import {combineReducers} from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import studentsListReducer from './StudentsCreateReducer';
import StudentDataReducer from './StudentDataReducer';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentsListResponse: studentsListReducer,
  StudentDataResponse: StudentDataReducer,
  studentUpdateResponse: StudentUpdateReducers,
});
