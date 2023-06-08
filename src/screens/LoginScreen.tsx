import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button, TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";
import { ScreenContainer } from "../components/ScreenContainer";
import { Routes } from "../navigation/Routes";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScreenContainer title="Login Screen">
      <StatusBar style="auto" />
      <Header title="spacecraft" />
      <View style={styles.form}>
        <TextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          style={styles.input}
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={handleShowPassword}
            />
          }
        />
        <Button mode="contained-tonal">Login</Button>
        <TouchableRipple
          onPress={() => {
            navigation.navigate(Routes.TERMS_SCREEN);
          }}
          style={styles.terms}
        >
          <Text>Read Terms and conditions</Text>
        </TouchableRipple>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    padding: 20,
  },
  input: {
    width: "100%",
    marginVertical: 10,
  },
  terms: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
});
