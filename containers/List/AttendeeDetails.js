import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class AttendeeDetails extends Component {
  render() {
    const person = this.props.route.params.person;

    return (
      <View style={styles.container}>
        <Text style={styles.row1}>
          {person['first_name']} {person['last_name']}
        </Text>
        <Text>Guests : {person['guests']}</Text>
        <Text>Address : {person['address']}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 100,
  },
  row1: {
    flex: 1,
    backgroundColor: '#f00',
    fontSize: 24,
  },
  row2: {
    flex: 1,
    paddingTop: 5,
    fontSize: 16,
  },
});

export default AttendeeDetails;
