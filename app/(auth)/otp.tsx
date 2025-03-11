import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OTPScreen() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleVerify = () => {
    router.push('/(auth)/pin-setup');
  };

  return (
    <View>
      <Text>Enter OTP</Text>
      <TextInput
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
}
