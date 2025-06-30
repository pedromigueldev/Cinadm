import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

function HomeScreen(props: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const {navigation} = props;
  const [back, setBack] = useState<boolean>(false);

  useEffect(() => {
    if (props.route.params?.isBack) setBack(true);
  }, [props.route.params?.isBack]);

  return (
    <View style={styles.container}>
      <Text>Hey</Text>
      <Button
        title="Profile page"
        onPress={() =>
          navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      {back ? <Text>is back</Text> : <Text />}
    </View>
  );
}

function ProfileScreen(props: NativeStackScreenProps<RootStackParamList, 'Profile'>) {
  const {navigation} = props;
  const {itemId, otherParam} = props.route.params;

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Back to home"
        onPress={() => navigation.popTo('Home', { isBack: true })}
      />
    </View>
  );
}

export type RootStackParamList = {
  Home: { isBack?: boolean } | undefined;
  Profile: { itemId: number; otherParam?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
