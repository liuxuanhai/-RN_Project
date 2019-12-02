import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import StudentsCreate from './components/StudentsCreate';
import studentUpdate from './components/studentUpdate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.routerStyle}>
      <Scene key="kimlik">
        <Scene key="loginScreen" component={LoginForm} title="Giriş Ekranı" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.studentCreate()}
          rightTitle="Yeni"
          key="studentsList"
          component={StudentsList}
          title="Öğrenci Listesi"
        />
        <Scene
          key="studentCreate"
          component={StudentsCreate}
          title="Öğrenci Kaydet"
        />
        <Scene
          key="studentUpdate"
          component={studentUpdate}
          title="Öğrenci Güncelle"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  routerStyle: {
    marginTop: 65,
  },
};

export default RouterComponent;
