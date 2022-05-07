import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getSuperHeroes } from '../services/api';

const Card = ({ item }) => {
    return (
        <View >
            <Text >{item.name}</Text>
            <Text >{item.description}</Text>
        </View>
    )
}



const Home = () => {
    const [superHeroes, setSuperHeroes] = React.useState([]);
    React.useEffect(() => {
        getSuperHeroes().then(data => {
            setSuperHeroes(data);
        }
        );
    }, []);

  return (
      <View >
      <Text> {JSON.stringify(superHeroes, null, 2)}</Text>
     
    <FlatList
        data={superHeroes}
        renderItem={Card}
        keyExtractor={item => item.id.toString()}
    />
      </View>

  )
}

export default Home;
