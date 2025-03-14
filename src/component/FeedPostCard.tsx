import { View, Text, Image, Dimensions, Platform, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { GlobeIcon, HeartIcon, ReplyIcon } from '../utils/Icons'
import { formatCreatedAt } from '../utils/Functions'
import Carousel from 'react-native-reanimated-carousel'
import Video, { VideoRef } from 'react-native-video'
import { Colors } from '../utils/Colors'

const WIDTH = Dimensions.get('window').width

interface FileItem {
    url: string;
    type: string;
}

interface User {
    name: string;
    avatar: string;
}

interface FeedItem {
    user: User;
    createdAt: string;
    text?: string;
    files?: FileItem[];
}

interface FeedPostCardProps {
    item: FeedItem;
}

const FeedPostCard: React.FC<FeedPostCardProps> = ({ item }) => {
    const videoRef = useRef<VideoRef>(null);

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: item?.user?.avatar }} style={styles.avatar} />
            <View>
                <View style={styles.header}>
                    <View>
                        <Text numberOfLines={1} style={styles.userName}>{item?.user?.name}</Text>
                        <View style={styles.timestampRow}>
                            <Text style={styles.timestamp}>{formatCreatedAt(item?.createdAt)}</Text>
                            <GlobeIcon />
                        </View>
                    </View>
                    <View style={styles.engagementRow}>
                        <View style={styles.engagementItem}>
                            <HeartIcon color="red" />
                            <Text style={styles.engagementText}>1.2k</Text>
                        </View>
                        <View style={[styles.engagementItem, styles.shareContainer]}>
                            <ReplyIcon />
                            <Text style={styles.engagementText}>508 Shares</Text>
                        </View>
                    </View>
                </View>
                {(item?.files && item.files.length > 0) ? (
                    <Carousel
                        loop
                        width={WIDTH - 80}
                        height={WIDTH / 2 + 40}
                        data={item?.files}
                        scrollAnimationDuration={2000}
                        renderItem={({ item }) => {
                            if (item?.type.includes('video')) {
                                return (
                                    <View style={styles.videoContainer}>
                                        <Video
                                            source={{ uri: item.url }}
                                            style={styles.video}
                                            ref={videoRef}
                                            resizeMode="cover"
                                            controls={true}
                                        />
                                    </View>
                                )
                            } else {
                                return (
                                    <Image source={{ uri: item?.url }} style={styles.image} />
                                )
                            }
                        }}
                    />
                ) : item?.files?.length !== 0 ? (
                    <Image source={{ uri: item?.files?.[0]?.url }} style={styles.image} />
                ) : (
                    <Text style={styles.postText}>{item?.text}</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 7,
        paddingVertical: 5,
        justifyContent: 'space-between',
    },
    avatar: {
        width: 45,
        height: 45,
        backgroundColor: 'lightgrey',
        borderRadius: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        width: WIDTH / 2.5,
    },
    timestampRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 3,
    },
    timestamp: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'grey',
    },
    engagementRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    engagementItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareContainer: {
        paddingLeft: 10,
    },
    engagementText: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    videoContainer: {
        borderRadius: 20,
        marginVertical: 20,
        overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
        backgroundColor: '#000',
    },
    video: {
        width: WIDTH - 80,
        height: WIDTH / 2,
        borderRadius: 20,
    },
    image: {
        width: WIDTH - 80,
        height: WIDTH / 2,
        borderRadius: 20,
        marginVertical: 20,
    },
    postText: {
        fontSize: 14,
        color: Colors.blackColor,
        marginVertical: 20,
    },
})

export default FeedPostCard;
