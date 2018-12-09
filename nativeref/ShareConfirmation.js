import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

class ShareConfirmation extends React.Component {
  render() {
    return (
      <View>
        <DialogInstruction/>
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
});

export default ShareConfirmation;
