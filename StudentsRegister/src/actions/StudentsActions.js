import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  STUDENT_CHANGED,
  CREATE_REQUEST_SUCCES,
  CREATE_REQUEST,
  STUDENT_LIST_DATA_SUCCES,
  UPDATE_REQUEST,
  UPDATE_REQUEST_SUCCES,
  DELETE_REQUEST,
  DELETE_REQUEST_SUCCES,
} from './types';

export const studentChange = ({props, value}) => {
  return dispatch => {
    dispatch({
      type: STUDENT_CHANGED,
      payload: {props, value},
    });
  };
};

export const studentCreate = ({isim, soyIsim, ogrenciNumara, sube}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    dispatch({type: CREATE_REQUEST});
    firebase
      .database()
      .ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
      .push({isim, soyIsim, ogrenciNumara, sube})
      .then(() => {
        dispatch({type: CREATE_REQUEST_SUCCES});
        Actions.pop();
      });
  };
};

export const studentsUpdate = ({isim, soyIsim, ogrenciNumara, sube, uid}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    dispatch({type: UPDATE_REQUEST});
    firebase
      .database()
      .ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
      .set({isim, soyIsim, ogrenciNumara, sube})
      .then(() => {
        dispatch({type: UPDATE_REQUEST_SUCCES});
        Actions.pop();
      });
  };
};

export const studentsDelete = ({uid}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    dispatch({type: DELETE_REQUEST});
    firebase
      .database()
      .ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
      .remove()
      .then(() => {
        dispatch({type: DELETE_REQUEST_SUCCES});
        Actions.pop();
      });
  };
};

export const studentsListData = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    dispatch({type: CREATE_REQUEST});
    firebase
      .database()
      .ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
      .on('value', snapshot => {
        dispatch({type: STUDENT_LIST_DATA_SUCCES, payload: snapshot.val()});
      });
  };
};
