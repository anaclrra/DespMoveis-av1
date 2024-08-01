import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, TextInput } from 'react-native-paper';
import Filmes from './src/components/Filmes';


export default function App() {

  const [title, setTitle] = useState('');
  
  return (
    <View style={styles.container}>
       <Searchbar
      placeholder="Search filmes"
      onChangeText={setTitle}
      value={title}
    />
      <Filmes title={title}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  }
});
