import React, {useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

const Lab2 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(json => setData(json.data))
      .finally(() => setLoading(false));
  };

  const renderItem = itemData => {
    return (
      <View style={styles.containerFlate}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Id : {itemData.item.id}</Text>
          <Text style={styles.title}>Name : {itemData.item.name}</Text>
          <Text style={styles.title}>Email : {itemData.item.email}</Text>
          <Text style={styles.title}>
            Company name : {itemData.item.company.name}
          </Text>
          <Text style={styles.title}>City : {itemData.item.address.city}</Text>
          <Text style={styles.title}>Phone : {itemData.item.phone}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#243763',
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {isLoading && (
        <TouchableOpacity
          style={styles.button}
          onPress={getDataUsingSimpleGetCall}>
          <Text style={styles.buttonText}>Simple Get Call</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    marginTop: 20,
    height: 150,
    width: '100%',
    borderRadius: 14,
    elevation: 4,
    backgroundColor: '#FF6E31',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  button: {
    margin: 20,
    width: 351,
    height: 41,
    borderRadius: 14,
    backgroundColor: '#FF6E31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Kulim',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  innerContainer: {
    width: 331,
    flex: 1,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export default Lab2;
