import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const attendeeDetails = (route, props) => {
  const person = route.person;
  const x = route.x;

  hello.toString();
  console.log(person);
  console.log(x);

  return (
    <View style={styles.container}>
      <Text style={styles.row1}>
        {props.person['first_name']} {props.person['last_name']}{' '}
      </Text>
      <Text style={styles.row2}>Guests : {props.person['guests']}</Text>
      <Text style={styles.row2}>Address : {props.person['address']}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 10,
    borderWidth: 1,
    zIndex: 10,
    borderColor: '#dedede',
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

export default attendeeDetails;
