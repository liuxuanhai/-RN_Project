import {
  STUDENT_CHANGED,
  CREATE_REQUEST,
  CREATE_REQUEST_SUCCES,
} from '../actions/types';

const INITIAL_STATE = {
  isim: '',
  soyIsim: '',
  ogrenciNumara: '',
  sube: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_CHANGED:
      return {...state, [action.payload.props]: action.payload.value};
    case CREATE_REQUEST:
      return {...state, loading: false};
    case CREATE_REQUEST_SUCCES:
      return INITIAL_STATE;
    default:
      return state;
  }
};
