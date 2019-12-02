//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import axios from 'axios';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Photo',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  allowEditing: true,
};

// create a component
class App extends Component {
  state = {
    avatarSource: null,
    loading: false,
    error: null,
  };

  onSelectPicture = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.upLoadPhoto(response);
      }
    });
  };

  upLoadPhoto = async response => {
    this.setState({
      avatarSource: null,
      loading: true,
    });
    const data = new FormData();
    data.append('fileData', {
      uri: response.uri,
      type: response.type,
      name: response.fileName,
    });

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'multipart/form-data',
      },
    };

    try {
      const request = await axios.post(
        'http://192.168.0.29:3001/upload',
        data,
        config,
      );

      const source = {uri: response.uri};

      this.setState({
        avatarSource: source,
        loading: false,
        error: false,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  };

  render() {
    const {avatarSource, loading, error} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {avatarSource && 
            <Image
              source={this.state.avatarSource}
              style={{width: 200, height: 200}}
            />
          )}
          {loading && <ActivityIndicator size={'small'} />}
          {error && <Text>Error</Text>}
        </View>
        <Button title={'Select Picture'} onPress={this.onSelectPicture} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  avatarContainer: {
    marginBottom: 10,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default App;
