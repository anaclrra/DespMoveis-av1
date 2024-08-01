import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function Filmes({title}) {

  const [filmes, setFilmes] = useState('');
  const API = 'https://www.omdbapi.com/?apikey=166a4e4b'


  useEffect(() => {
    getFilmes();
  }, [title]);

  async function getFilmes() {
    try {
      const response = await fetch(`${API}&t=${title}`);
      const data = await response.json();
      setFilmes(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <View>
         <Card style={{ margin: 10 }}>
        <Card.Cover style ={{height: 250}} source={{ uri: filmes.Poster }} />
        <Card.Content>
          <Title>{filmes.Title}</Title>
          <Paragraph>{filmes.Year}</Paragraph>
          <Paragraph>{filmes.Director}</Paragraph>
        </Card.Content>
    </Card>
       
          
      </View>
    );
  }

 
  