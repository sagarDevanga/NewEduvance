import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const categoryWiseReport = () => {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: 'red', textAlign: 'center'}}>
        CATEGORY WISE REPORT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default categoryWiseReport;
