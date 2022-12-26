import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LabOne} from '../screens/LabOne';
import {LabTwo} from '../screens/LabTwo';
import {LabThree} from '../screens/LabThree';
import {LabFour} from '../screens/LabFour';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainNavigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={LabOne}
          options={{
            tabBarIcon: () => {
              return <Icon name="th" size={20} color="#009" />;
            },
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={LabTwo}
          options={{
            tabBarIcon: () => {
              return <Icon name="list" size={20} color="#009" />;
            },
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={LabThree}
          options={{
            tabBarIcon: () => {
              return <Icon name="clock-o" size={20} color="#009" />;
            },
          }}
        />
        <Tab.Screen
          name="Lab4"
          component={LabFour}
          options={{
            tabBarIcon: () => {
              return <Icon name="clock-o" size={20} color="#009" />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
