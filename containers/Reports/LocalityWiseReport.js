import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BarChart, Grid} from 'react-native-svg-charts';
import data from '../../data.json';

const displayData = data;

const localityWiseReport = () => {
  const fill = 'rgb(134, 65, 244)';

  const fifteenToTwenty = displayData
    .filter((person) => {
      return person['age'] >= 15 || person['age'] <= 20;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const twentyOneToTwentyFive = displayData
    .filter((person) => {
      return person['age'] >= 21 || person['age'] <= 25;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const twentySixToThirty = displayData
    .filter((person) => {
      return person['age'] >= 26 || person['age'] <= 30;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const thirtyToThirtyFive = displayData
    .filter((person) => {
      return person['age'] >= 30 || person['age'] <= 35;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const currentData = [30, 2, 324, 43];

  return (
    <View>
      <BarChart
        style={styles.container}
        data={currentData}
        svg={{fill}}
        contentInset={{top: 30, bottom: 30}}>
        <Grid />
      </BarChart>
      <Text style={styles.text}>AGE WISE REPORT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default localityWiseReport;
