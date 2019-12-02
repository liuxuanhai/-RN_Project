import React, {Component} from 'react';
import {TextInput, Alert} from 'react-native';
import Button from './ortak/Button';
import Card from './ortak/Card';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: '', loading: false};

  clickLogin() {
    this.setState({loading: true});
    const {email, password} = this.state;

    if (email === '' || password === '') {
      this.setState({loading: false});
      Alert.alert('Mesaj', 'Her iki alan da dolu olmalı!', [
        {text: 'Tamam', onPress: () => null},
      ]);
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.loginSuccess.bind(this))
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this));
        });
    }
  }

  loginSuccess() {
    this.setState({loading: false});
  }

  loginFail() {
    this.setState({loading: false});
    Alert.alert('Mesaj', 'Kullanıcı adı veya şifreniz hatalı!', [
      {text: 'Tamam', onPress: () => null},
    ]);
  }

  renderButton() {
    if (!this.state.loading) {
      return <Button onPress={this.clickLogin.bind(this)}>GİRİŞ</Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    const {inputStyle} = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <TextInput
            secureTextEntry
            placeholder="Şifre"
            style={inputStyle}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
};

export default LoginForm;
