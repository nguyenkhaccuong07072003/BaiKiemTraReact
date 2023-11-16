import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabNavigate.js';
import EditProfile from '../screen/EditProfile.js';
import Notification from '../screen/Notification.js';
import Security from '../screen/Security.js';
import ViewTicket from '../screen/ViewTicket.js';
import Booking from '../screen/Booking.js';
import Start from '../screen/Start.js';
import Login from '../screen/Login.js';
import Signup from '../screen/Signup.js';
import Forgotpassword from '../screen/Forgotpassword.js';
import NewPassword from '../screen/NewPassword.js';
import Verify from '../screen/Verify.js';
import PaymentMethod from '../screen/PaymentMethod.js';
import NewCard from '../screen/NewCard.js';
import Recently from '../screen/Recently.js';
import Reservation from '../screen/Reservation.js';
import Detailbooking from '../screen/Detailbooking.js';
import Date from '../screen/Date.js';
import HomeScreen from '../screen/HomeScreen.js';
import Scan from '../screen/Scan.js';
// import Welcome from '../screen/Welcome.js';
const Stack = createNativeStackNavigator();

const StackNavigation = ({ props }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="ViewTicket" component={ViewTicket} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="FillProfile" component={FillProfile} /> */}
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="NewCard" component={NewCard} />
        <Stack.Screen name="Recently" component={Recently} />
        <Stack.Screen name="Reservation" component={Reservation} />
        <Stack.Screen name="Detailbooking" component={Detailbooking} />
        <Stack.Screen name="Date" component={Date} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;

const styles = StyleSheet.create({})