import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignContent: 'center',
    },
    circleView: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        alignSelf: 'center',
    },
    buttonGoHome: {
        marginInline: 10,
        marginBlock: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 10,
    }
})

export function ProfileScreen(props: NativeStackScreenProps<RootStackParamList, 'Profile'>) {
  const {navigation} = props;
  const {userName, email} = props.route.params;

  return (
    <View style={styles.container}>
        <View style={styles.circleView}>
            <Text style={{ color: 'white' }}>Image</Text>
        </View>
        <TextInput
            style={styles.input}
          placeholder="User Name"
          value={userName}
        />
        <TextInput
            style={styles.input}
          placeholder="Email"
          value={email}
        />
      <View style={styles.buttonGoHome}>
        <Button
          title="Back to home"
          onPress={() => navigation.popTo('Home', { isBack: true })}
        />
      </View>
    </View>
  );
}