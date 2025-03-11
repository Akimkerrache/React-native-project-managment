import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PinSetupScreen() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleSetPin = async () => {
    await AsyncStorage.setItem('userPin', pin);
    router.replace('/(main)/home');
  };

  return (
    <View>
      <Text>Set up your 6-digit PIN</Text>
      <TextInput
        placeholder="PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        maxLength={6}
      />
      <Button title="Set PIN" onPress={handleSetPin} />
    </View>
  );
}
