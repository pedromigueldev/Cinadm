import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/Home';
import { ProfileScreen } from './src/screens/Profile';

export type RootStackParamList = {
  Home: { isBack?: boolean } | undefined;
  Profile: { userName: string; email: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        >
        <Stack.Screen
          name="Home"
          options={{ title: 'Welcome' }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{ title: 'Profile' }}
          component={ProfileScreen}
          initialParams={{ userName: 'Pedro', email: 'pedro@gmail.com' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
