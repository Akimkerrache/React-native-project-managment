import { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

export default function TaskModal({ visible, onClose, onSubmit }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const handleSubmit = () => {
    onSubmit({
      description,
      status,
      time,
      frequency
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>Add Task</Text>
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Text>Status</Text>
        <Button
          title={status}
          onPress={() => setStatus(prev => (prev === 'To Do' ? 'Done' : 'To Do'))}
        />
        <TextInput
          placeholder="Time"
          value={time}
          onChangeText={setTime}
        />
        <Text>Frequency</Text>
        <Button
          title={frequency}
          onPress={() => setFrequency(prev => {
            const frequencies = ['one-time', '1/day', '2/day', '3/day', '4/day'];
            const nextIndex = (frequencies.indexOf(prev) + 1) % frequencies.length;
            return frequencies[nextIndex];
          })}
        />
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
}
