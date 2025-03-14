import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonHeader from '../component/CommonHeader';
import { HashData, UsersData } from '../utils/Data';
import StatusCard from '../component/StatusCard';
import { Colors } from '../utils/Colors';
import FeedPostCard from '../component/FeedPostCard';
import { API_BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../utils/Routes';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  profileImage: string;
  status: number;
}

interface HashTag {
  id: number;
  name: string;
}

const Feeds = () => {
  const [selectedHash, setSelectedHash] = useState<HashTag>(HashData[0]);
  const [feedData, setFeedData] = useState([]);

  const getFeedData = async () => {
    try {
      let params = {
        profile: '67c14a5cc3ca32727761ca6f',
        limit: 15
      }
      const response = await axios.get(`${API_BASE_URL}/feed`, {
        headers: {
          'client-id': CLIENT_ID,
          'client-secret': CLIENT_SECRET,
          'Content-Type': 'application/json',
        },
        params,
      });
      setFeedData(response.data)
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  useEffect(() => {
    getFeedData()
  }, [])

  return (
    <>
      <CommonHeader backIcon searchIcon cameraIcon title="Ankita" menuIcon />
      <ScrollView style={styles.scrollContainer}>
        <FlatList
          horizontal
          nestedScrollEnabled
          data={UsersData}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <StatusCard item={item} />}
        />
        <FlatList
          horizontal
          data={HashData}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hashHorizontalList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedHash(item)} style={styles.hashTagContainer}>
              <Text style={[styles.hashTagText, selectedHash.id === item.id && styles.selectedHashTag]}>
                #{item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <FlatList
          nestedScrollEnabled
          data={feedData?.feeds}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <FeedPostCard item={item} />}
        />
      </ScrollView>
    </>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontalList: {
    paddingLeft: 10,
    paddingVertical: 15,
  },
  hashHorizontalList: {
    paddingLeft: 10,
  },
  hashTagContainer: {
    marginLeft: 10,
    marginBottom: 10,
  },
  hashTagText: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: Colors.blackColor,
  },
  selectedHashTag: {
    color: Colors.primaryColor,
  },
});
