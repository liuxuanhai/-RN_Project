import React, {Component} from 'react';
import {TextInput, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Button, Card, CardSection, Spinner} from '../ortak';

class LoginForm extends Component {
  state = {email: '', password: '', loading: false};

  clickLogin() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  loginSucces() {
    console.log('başarılı');
    this.setState({loading: false});
  }

  loginFail() {
    console.log('hatalı');
    this.setState({loading: false});
    Alert.alert('Mesaj', 'Kullanıcı adı veya Şifreniz Hatalı', [
      {text: 'Tamam', onPress: () => null},
    ]);
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}>GİRİŞ</Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    const {inputStyle, viewStyle} = styles;
    return (
      <View style={viewStyle}>
        <Card>
          <CardSection>
            <TextInput
              placeholder="E-mail"
              style={inputStyle}
              value={this.props.email}
              onChangeText={email => this.props.emailChanged(email)}
            />
          </CardSection>

          <CardSection>
            <TextInput
              secureTextEntry
              placeholder="Şifre"
              style={inputStyle}
              value={this.props.password}
              onChangeText={password => this.props.passwordChanged(password)}
            />
          </CardSection>

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
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
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
};

const mapStateToProps = ({kimlikdogrulamaResponse}) => {
  const {email, password, loading} = kimlikdogrulamaResponse;
  return {email, password, loading};
};

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
