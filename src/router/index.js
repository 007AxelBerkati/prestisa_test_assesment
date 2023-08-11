import { EvilIcons, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CreateScreen, EditScreen, HomeScreen, ShowScreen } from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateScreen')}
              >
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EditScreen', { id: route.params.id })
                }
              >
                <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
