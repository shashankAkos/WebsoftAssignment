import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainRoutes, MainStackParamList } from './RouteData';
import { StyleSheet, View } from 'react-native';
import { ChatIcon, FeedIcon, FriendsIcon, ProfileIcon, SettingIcon } from '../utils/Icons';
import { Colors } from '../utils/Colors';

const Tab = createBottomTabNavigator<MainStackParamList>();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: Colors.blackColor,
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {Object.entries(MainRoutes).map(([name, component]) => (
        <Tab.Screen
          key={name}
          options={{
            tabBarIcon: ({ focused }) => {
              const color = focused ? Colors.primaryColor : Colors.blackColor;
              let IconComponent;
              switch (name) {
                case 'Feeds':
                  IconComponent = <FeedIcon color={color} />;
                  break;
                case 'Friends':
                  IconComponent = <FriendsIcon color={color} />;
                  break;
                case 'Chats':
                  IconComponent = <ChatIcon color={color} />;
                  break;
                case 'Setting':
                  IconComponent = <SettingIcon color={color} />;
                  break;
                case 'Profile':
                  IconComponent = <ProfileIcon color={color} />;
                  break;
                default:
                  IconComponent = null;
              }
              return <View>{IconComponent}</View>;
            },
          }}
          name={name as keyof MainStackParamList}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.whiteColor,
    height: 60,
    elevation: 10,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    paddingTop: 3,
  },
});