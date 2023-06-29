import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DirectoryScreen from './DirectoryScreen';
import RecordInfoScreen from './RecordInfoScreen';



const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Directory">
                <Stack.Screen
                    name="Directory"
                    component={DirectoryScreen}
                    options={{ title: 'Records List' }}
                />
                <Stack.Screen
                    name="RecordInfo"
                    component={RecordInfoScreen}
                    options={{ title: 'Record Info' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;