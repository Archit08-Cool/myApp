import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddOrder from "../screens/addOrder";
import DisplayOrder from "../screens/displayOrder";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let ioniconName;
                    if (route.name === 'Feed') {
                        ioniconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Story') {
                        ioniconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name={ioniconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'crimson',
                inactiveTintColor: 'violet',
            }}
        >
            <Tab.Screen name="Feed" component={AddOrder} />
            <Tab.Screen name="Story" component={DisplayOrder} />
        </Tab.Navigator>
    );
}

export default TabNavigator