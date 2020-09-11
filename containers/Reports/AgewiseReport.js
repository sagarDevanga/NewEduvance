import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import data from '../../data.json';
import {PieChart} from 'react-native-svg-charts';

const agewiseReport = () => {
  const color = ['#f00', '#0f0', '#00f', '#ff0'];

  const fifteenToTwenty = data
    .filter((person) => {
      return person['age'] >= 15 || person['age'] <= 20;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const twentyOneToTwentyFive = data
    .filter((person) => {
      return person['age'] >= 21 || person['age'] <= 25;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const twentySixToThirty = data
    .filter((person) => {
      return person['age'] >= 26 || person['age'] <= 30;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const thirtyToThirtyFive = data
    .filter((person) => {
      return person['age'] >= 30 || person['age'] <= 35;
    })
    .reduce((prev, current) => {
      return prev + 1;
    }, 0);

  const currentData = [
    fifteenToTwenty,
    twentyOneToTwentyFive,
    twentySixToThirty,
    thirtyToThirtyFive,
  ];

  const pieData = currentData
    .filter((value) => value > 0)
    .map((value, index) => ({
      key: {index},
      value,
      svg: {
        fill: color[index],
        onPress: () => console.log('press', index),
      },
    }));

  return (
    <View>
      <PieChart style={styles.container} data={pieData} />
      <Text style={styles.text}>AGE WISE REPORT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default agewiseReport;
