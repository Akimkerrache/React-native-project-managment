import { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';
import ProjectModal from '@components/ProjectModal';

export default function HomeScreen() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      <Text>Home</Text>
      <Button title="Add Project" onPress={() => setModalVisible(true)} />
      <TextInput
        placeholder="Search projects"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredProjects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      <ProjectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={async project => {
          try {
            await axios.post('http://localhost:5000/api/projects', project);
            fetchProjects();
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </View>
  );
}
