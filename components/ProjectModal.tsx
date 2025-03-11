import { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

export default function ProjectModal({ visible, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Medical');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    onSubmit({
      name,
      description,
      category,
      startDate,
      endDate
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>Add Project</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Text>Category</Text>
        <Button
          title={category}
          onPress={() => setCategory(prev => {
            const categories = ['Medical', 'Teacher', 'Work', 'Workout', 'Personal'];
            const nextIndex = (categories.indexOf(prev) + 1) % categories.length;
            return categories[nextIndex];
          })}
        />
        <TextInput
          placeholder="Start Date"
          value={startDate}
          onChangeText={setStartDate}
        />
        <TextInput
          placeholder="End Date"
          value={endDate}
          onChangeText={setEndDate}
        />
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
}
