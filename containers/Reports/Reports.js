import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import AgewiseReport from './AgewiseReport';
import CategoryWiseReport from './CategoryWiseReport';
import LocalityWiseReport from './LocalityWiseReport';

class Reports extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <AgewiseReport />
          {/* <CategoryWiseReport /> */}
          <LocalityWiseReport />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
});

export default Reports;
