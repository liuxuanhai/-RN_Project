import React, {Component} from 'react';
import {Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, CardSection, Card, Spinner} from '../ortak';
import {studentChange, studentCreate} from '../actions';

class StudentsCreate extends Component {
  clickSave() {
    const {isim, soyIsim, ogrenciNumara, sube} = this.props;

    this.props.studentCreate({isim, soyIsim, ogrenciNumara, sube});
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>;
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
            value={this.props.isim}
            onChangeText={isim =>
              this.props.studentChange({props: 'isim', value: isim})
            }
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.props.soyIsim}
            onChangeText={soyIsim =>
              this.props.studentChange({props: 'soyIsim', value: soyIsim})
            }
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarası"
            style={inputStyle}
            value={this.props.ogrenciNumara}
            onChangeText={ogrenciNumara =>
              this.props.studentChange({
                props: 'ogrenciNumara',
                value: ogrenciNumara,
              })
            }
          />
        </CardSection>

        <CardSection>
          <Text>Sube</Text>
          <Picker
            style={pickerStyle}
            selectedValue={this.props.sube}
            onValueChange={sube =>
              this.props.studentChange({props: 'sube', value: sube})
            }>
            <Picker.Item label="A Şubesi" value="asube" />
            <Picker.Item label="B Şubesi" value="bsube" />
            <Picker.Item label="C Şubesi" value="csube" />
            <Picker.Item label="D Şubesi" value="dsube" />
          </Picker>
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
  pickerStyle: {
    flex: 1,
  },
};

const mapStateToProps = ({studentsListResponse}) => {
  const {isim, soyIsim, ogrenciNumara, sube, loading} = studentsListResponse;

  return {isim, soyIsim, ogrenciNumara, sube, loading};
};

export default connect(
  mapStateToProps,
  {studentChange, studentCreate},
)(StudentsCreate);
