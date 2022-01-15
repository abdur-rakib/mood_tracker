import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {History} from '../screens/History';
import {Analytics} from '../screens/Analytics';
import {AnalyticsIcon, HistoryIcon, HomeIcon} from '../components/Icons';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }
          return null;
        },
        tabBarShowLabel: false,
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{title: "Today's Mood"}}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{title: 'Past Mood'}}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{title: 'Fancy Charts'}}
      />
    </BottomTabs.Navigator>
  );
};
