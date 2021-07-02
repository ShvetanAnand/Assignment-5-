import React from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteGame } from './actions/game';

const GameList = () => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteGame(key))

  const games = useSelector(state => state.gameReducer.gameList)

  return (
    <FlatList style={styles.listContainer}
      data={games}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={() => deleteCurrent(data.item.key)} />
            }
          />
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#000000',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

export default GameList;
