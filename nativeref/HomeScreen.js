import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';



class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <DialogInstruction/>
        <ButtonStartExperience pressFunction={this.props.introNavFunction}/>
      </View>
    );
  }
}

class DialogInstruction extends React.Component {

  render() {
    return (
      <View style={[styles.instructionTextHolder]}>
        <Text style={[styles.instructionText]}>
        'Blackbox' is another way of talking.Send a voice recording, and receive one back. Each recording is unique, and will only be played once.
        </Text>
      </View>
    )
  }
}


class ButtonStartExperience extends React.Component {
  render() {
    return (
      <TouchableOpacity underlayColor="white" onPress={this.props.pressFunction} >
        <View style={styles.instructionButtonBegin}>
          <Text style={styles.instructionButtonText}>Start an exchange</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  instructionTextHolder: {
    borderColor: '#464646',
    borderWidth: 1,
    padding: 20,
    color: '#9C9A9A',
    width: '80%',
  },
  instructionText: {
    color: '#9C9A9A',
    fontSize: 22,
  },
  instructionButtonBegin: {
    fontSize: 24,
    color: '#DF81C0',
    borderColor: '#DF81C0',
    borderWidth: 1,
    padding: 20,
    width: '80%',
  },
  instructionButtonText: {
    color: '#DF81C0',
    fontSize: 24,
  },
});


export default HomeScreen;
