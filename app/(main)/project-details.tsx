import { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import TaskModal from '@components/TaskModal';

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/projects/${id}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProject();
    fetchTasks();
  }, [id]);

  return (
    <View>
      <Text>{project?.name}</Text>
      <Text>{project?.description}</Text>
      <Button title="Add Task" onPress={() => setModalVisible(true)} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.description}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={async task => {
          try {
            await axios.post(`http://localhost:5000/api/projects/${id}/tasks`, task);
            fetchTasks();
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </View>
  );
}
