import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginSignupView, OnboardingView, SignupView } from './views';

const Stack = createNativeStackNavigator();

// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingView}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="LoginSignup"
          component={LoginSignupView}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupView}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;