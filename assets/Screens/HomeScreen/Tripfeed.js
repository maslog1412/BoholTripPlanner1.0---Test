// Tripfeed.js
import React, { useState } from 'react';
import 'react-native-web.js';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';

import Header from './Header'; // Import the Header component
import styles from '../../../homeStyles'; // Import styles

const Tripfeed = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNewsfeed, setFilteredNewsfeed] = useState([]);

  const tripfeedData = [
    {
      id: 1,
      title: 'Chocolate Hills',
      description: 'Description of Chocolate Hills',
      thumbnail: require('../../images/ChocoHills.jpg'),
      latitude: 9.7960,
      longitude: 124.2425,
    },
    {
      id: 2,
      title: 'Loboc River Cruise',
      description: 'Description of Loboc River Cruise',
      thumbnail: require('../../images/LoboCruise.jpg'),
      latitude: 9.7960,
      longitude: 124.2425,
    },
    {
      id: 3,
      title: 'Tarsier Sanctuary',
      description: 'Description of Tarsier Sanctuary',
      thumbnail: require('../../images/TarsierSanc.jpg'),
      latitude: 9.7960,
      longitude: 124.2425,
    },
  ];

  const filterNewsfeed = (query) => {
    const filteredItems = tripfeedData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNewsfeed(filteredItems);
  };

  const handleSearchInputChange = (text) => {
    setSearchQuery(text);
    filterNewsfeed(text);
  };

  const toggleSearch = (value) => {
    setIsSearching(value);
    setSearchQuery('');
    setFilteredNewsfeed([]);
  };

  const navigateToDetail = (item) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <View style={styles.container}>
      <Header
        isSearching={isSearching}
        onSearchPress={toggleSearch}
        onSearchInputChange={handleSearchInputChange}
        searchQuery={searchQuery}
      />

      {!isSearching ? (
        <ScrollView style={styles.itemfeed}>
          {tripfeedData.map((item) => (
            // Updated the Pressable component to call navigateToDetail on press
            <Pressable key={item.id} onPress={() => navigateToDetail(item)}>
              <View style={styles.newsItem}>
                <Image source={item.thumbnail} style={styles.thumbnail} />
                <View style={styles.newsText}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={styles.itemfeed}>
          {filteredNewsfeed.map((item) => (
            <View key={item.id} style={styles.newsItem}>
              <Image source={item.thumbnail} style={styles.thumbnail} />

              <View style={styles.newsText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Tripfeed;
