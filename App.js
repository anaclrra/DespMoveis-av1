import { StyleSheet, View } from 'react-native';
import Filmes from './src/components/Filmes';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Filmes/>
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
