import React, {Component} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import data from '../../data.json';
import Attendee from './Attendee';

const displayData = data;

class AttendeesList extends Component {
  state = {
    data: data,
    displayData: data,
  };

  navigate = (person) => {
    this.props.navigation.navigate('AttendeeDetails', {
      person: person,
    });
  };

  handleChange = (text) => {
    const data = displayData.filter((person, index) => {
      const name = person.first_name + person.last_name;
      return name.includes(text);
    });

    this.setState({displayData: data});
  };

  renderItem = (person, index) => {
    return (
      <Attendee key={index} person={person['item']} navigate={this.navigate} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="search name"
          onChangeText={this.handleChange}
        />
        <FlatList data={this.state.displayData} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputBox: {
    height: 50,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#dedede',
  },
});

export default AttendeesList;
