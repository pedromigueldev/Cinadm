import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function HomeScreen(props: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const {navigation} = props;
  const [back, setBack] = useState<boolean>(false);

  useEffect(() => {
    if (props.route.params?.isBack) setBack(true);
  }, [props.route.params?.isBack]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hey</Text>
      <Button
        title="Profile page"
        onPress={() =>
          navigation.navigate('Profile', {
            email: 'pedro@gmail.com',
            userName: 'Pedro'
          })
        }
      />
      {back ? <Text>is back</Text> : <Text />}
    </View>
  );
}