import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonHeader from '../component/CommonHeader';
import { HashData, UsersData } from '../utils/Data';
import StatusCard from '../component/StatusCard';
import { Colors } from '../utils/Colors';
import FeedPostCard from '../component/FeedPostCard';
import { API_BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../utils/Routes';
import axios from 'axios';
import { MS, S, VS } from '../utils/scalingUtils';

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

interface FeedItem {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  createdAt: string;
  text?: string;
  files?: { url: string; type: string }[];
}

interface FeedResponse {
  feeds: FeedItem[];
}

const Feeds = () => {
  const [selectedHash, setSelectedHash] = useState<HashTag>(HashData[0]);
  const [feedData, setFeedData] = useState<FeedResponse | null>(null);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
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
    paddingLeft: S(10),
    paddingVertical: VS(15),
  },
  hashHorizontalList: {
    paddingLeft: S(10),
  },
  hashTagContainer: {
    marginLeft: S(10),
    marginBottom: VS(10),
  },
  hashTagText: {
    fontSize: MS(24),
    fontWeight: '600',
    letterSpacing: S(0.5),
    color: Colors.blackColor,
  },
  selectedHashTag: {
    color: Colors.primaryColor,
  },
});
