import React from 'react';
import 'react-native-web.js';
import { View, Text, Image } from 'react-native';

const TripfeedItemDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Image source={item.thumbnail} style={{ width: '100%', height: 200, marginBottom: 10 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default TripfeedItemDetail;
