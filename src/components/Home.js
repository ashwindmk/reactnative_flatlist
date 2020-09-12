import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';

const Home = () => {
    const [people, setPeople] = useState([
        { name: 'shaun', id: '1' },
        { name: 'yoshi', id: '2' },
        { name: 'mario', id: '3' },
        { name: 'luigi', id: '4' },
        { name: 'peach', id: '5' },
        { name: 'toad', id: '6' },
        { name: 'bowser', id: '7' }
      ]);

    return (
        <View
            style={styles.container}>
            <SafeAreaView>
                
                <FlatList 
                    keyExtractor={(item) => item.id} 
                    numColumns={1}
                    data={people} 
                    renderItem={({ item }) => ( 
                        <Text style={styles.item}>{item.name}</Text>
                    )}
                />

            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    color: 'black',
    backgroundColor: 'gainsboro',
    fontSize: 24,
  }
});

export default Home;
