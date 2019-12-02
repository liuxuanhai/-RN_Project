/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, CardSection, Card, Spinner} from '../ortak';
import {studentChange, studentsUpdate, studentsDelete} from '../actions';

class studentUpdate extends Component {
  state = {isim: '', soyIsim: '', ogrenciNumara: '', sube: ''};

  componentDidMount() {
    const {isim, soyIsim, ogrenciNumara, sube} = this.props.student;

    this.setState({isim, soyIsim, ogrenciNumara, sube});
  }

  clickUpdate() {
    const {isim, soyIsim, ogrenciNumara, sube} = this.state;

    this.props.studentsUpdate({
      isim,
      soyIsim,
      ogrenciNumara,
      sube,
      uid: this.props.student.uid,
    });
  }

  clickDelete() {
    this.props.studentsDelete({uid: this.props.student.uid});
  }

  renderButton() {
    if (!this.props.loadingUpdate) {
      return <Button onPress={this.clickUpdate.bind(this)}>Güncelle</Button>;
    }
    return <Spinner size="small" />;
  }

  renderDeleteButton() {
    if (!this.props.loadingDelete) {
      return <Button onPress={this.clickDelete.bind(this)}>Sil</Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    const {inputStyle, pickerStyle} = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="isim"
            style={inputStyle}
            value={this.state.isim}
            onChangeText={isim => this.setState({isim})}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.state.soyIsim}
            onChangeText={soyIsim => this.setState({soyIsim})}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarası"
            style={inputStyle}
            value={this.state.ogrenciNumara}
            onChangeText={ogrenciNumara => this.setState({ogrenciNumara})}
          />
        </CardSection>

        <CardSection>
          <Text>Sube</Text>
          <Picker
            style={pickerStyle}
            selectedValue={this.state.sube}
            onValueChange={sube => this.setState({sube})}>
            <Picker.Item label="A Şubesi" value="asube" />
            <Picker.Item label="B Şubesi" value="bsube" />
            <Picker.Item label="C Şubesi" value="csube" />
            <Picker.Item label="D Şubesi" value="dsube" />
          </Picker>
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>
        <CardSection>{this.renderDeleteButton()}</CardSection>
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
  pickerStyle: {
    flex: 1,
  },
};

const mapStateToProps = ({studentUpdateResponse}) => {
  const {loadingUpdate, loadingDelete} = studentUpdateResponse;

  return {loadingUpdate, loadingDelete};
};

export default connect(
  mapStateToProps,
  {studentChange, studentsUpdate, studentsDelete},
)(studentUpdate);
