import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addGame } from './actions/game';

const GameForm = ({ navigation }) => {

  const [game, setGame] = useState('')

  const dispatch = useDispatch();

  const submitGame = (game) => dispatch(addGame(game))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}> Add Best Games To Play   </Text>
      <TextInput
        value={game}
        placeholder='Name'
        style={styles.gameInput}
        onChangeText={(game) => setGame(game)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitGame(game)
          setGame('')
        }}>
        <Text style={{ fontSize: 22, color: 'chartreuse' }}>Add to Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('GameList')}>
        <Text style={{ fontSize: 22, color: 'chartreuse' }}>Go to my List </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    marginTop: 16,
    color: 'chartreuse'
  },
  gameInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 2,
    padding: 12,
    width: '75%',
    borderRadius: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 300,
    height: 300,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
  }
});

export default GameForm;
