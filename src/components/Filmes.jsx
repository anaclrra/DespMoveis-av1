import { Image, StyleSheet, Text, View} from "react-native";


export default function Filmes() {
  const data = [
    {
        id: 1,
        titulo: "Divertidamente 2",
        diretor: "Kelsey Mann",
        origem: "Estados Unidos",
        cartaz: "https://lumiere-a.akamaihd.net/v1/images/gife454xsaa8wv-_3e8071e7.jpeg"
    },
    {
        id: 2,
        titulo: "O poderoso chefão",
        diretor: "Francis F. Coppola",
        origem: "Estados Unidos",
        cartaz: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0NiuqExTSnKLd6uUwIRhJjbTkTUYwAMcmQ&s"
    },
    {
        id: 3,
        titulo: "Cinema Paradiso",
        diretor: "Giuseppe Tornatore",
        origem: "Italia",
        cartaz: "https://upload.wikimedia.org/wikipedia/pt/3/3c/Nuovo_Cinema_Paradiso.jpg"
    },
    {
        id: 4,
        titulo: "Todos menos voce",
        diretor: "Will Gluck",
        origem: "Estados Unidos",
        cartaz: "https://i0.wp.com/pimentanerd.com.br/wp-content/uploads/2024/07/Todos-Menos-Voce.jpg?fit=800%2C1000&ssl=1"
    },
    
] 
  
    return (
      <View>
        {data.map((data)=>(
          <View key={data.id} style={styles.container}>
            <Text style={styles.text}>Titulo: {data.titulo}</Text>
            <Text>Diretor: {data.diretor}</Text>
            <Text>Origem: {data.origem}</Text>
            <Image source={{uri: data.cartaz}}
             style = {{ width: 100, height: 100 }}/>
          </View>
        ))}
          
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'pink',
    },
    text: {
      justifyContent: 'center',
      fontSize: 20
    }
  });
  