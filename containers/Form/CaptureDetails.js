import React, {Component} from 'react';
import t from 'tcomb-form-native';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

const Form = t.form.Form;

var Person = t.struct({
  firstname: t.String, // a required string
  lastname: t.maybe(t.String), // an optional string
  age: t.Number, // a required number
  professtion: t.String,
  locality: t.String,
  guests: t.Number,
  address: t.String,
});

var options = {};

class CaptureDetails extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Reports');
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref="form" type={Person} options={options} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handlePress}
          underlayColor="#99d9f4">
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: 'dodgerblue',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});

export default CaptureDetails;
