import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CaptureDetails from './Form/CaptureDetails';
import AttendeesList from './List/AttendeeList';
import Reports from './Reports/Reports';

const Drawer = createDrawerNavigator();

class MyDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="CaptureDetails">
        <Drawer.Screen name="CaptureDetails" component={CaptureDetails} />
        <Drawer.Screen name="Attendees" component={AttendeesList} />
        <Drawer.Screen name="Reports" component={Reports} />
      </Drawer.Navigator>
    );
  }
}

export default MyDrawer;
