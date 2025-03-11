import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [loginMethod, setLoginMethod] = useState<"pin" | "email">("pin");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      if (loginMethod === "pin") {
        const storedPin = await AsyncStorage.getItem("userPin");
        if (pin === storedPin) {
          router.replace("/(main)/home");
        } else {
          setError("Invalid PIN");
        }
      } else {
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });
        await AsyncStorage.setItem("userToken", response.data.token);
        router.replace("/(main)/home");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {loginMethod === "pin" ? (
        <TextInput
          style={styles.input}
          placeholder="Enter PIN"
          value={pin}
          onChangeText={setPin}
          keyboardType="numeric"
          maxLength={6}
        />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </>
      )}
      <Button
        title={loginMethod === "pin" ? "Login with Email" : "Login with PIN"}
        onPress={() => setLoginMethod(loginMethod === "pin" ? "email" : "pin")}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => router.push("/(auth)/register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
