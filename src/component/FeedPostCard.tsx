import { View, Text, Image, Dimensions, Platform } from 'react-native'
import React, { useRef } from 'react'
import { GlobeIcon, HeartIcon, ReplyIcon } from '../utils/Icons'
import { formatCreatedAt } from '../utils/Functions'
import Carousel from 'react-native-reanimated-carousel'
import Video, { VideoRef } from 'react-native-video'
import { Colors } from '../utils/Colors'
const WIDTH = Dimensions.get('window').width

const FeedPostCard = ({ item }) => {
    const videoRef = useRef<VideoRef>(null);
    return (
        <>
            <View style={{
                backgroundColor: 'white', borderBottomWidth: 1, borderColor: 'lightgrey', paddingHorizontal: 15,
                flexDirection: 'row',
                marginVertical: 7,
                paddingVertical: 5,
                justifyContent: 'space-between'
            }}>
                <Image source={{ uri: item?.user?.avatar }} style={{ width: 45, height: 45, backgroundColor: 'lightgrey', borderRadius: 50 }} />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <View style={{}}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    fontSize: 14, fontWeight: 'bold',
                                    width: WIDTH / 2.5,
                                }}>{item?.user?.name}</Text>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                paddingTop: 3
                            }}>
                                <Text style={{
                                    fontSize: 10, fontWeight: 'bold',
                                    color: 'grey'
                                }}>{formatCreatedAt(item?.createdAt)} </Text>
                                <GlobeIcon />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <HeartIcon color='red' />
                                <Text style={{
                                    fontSize: 12, fontWeight: 'bold',
                                    paddingLeft: 5
                                }}>1.2k</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                paddingLeft: 10
                            }}>
                                <ReplyIcon />
                                <Text style={{
                                    fontSize: 12, fontWeight: 'bold',
                                }}>508 Shares</Text>
                            </View>
                        </View>
                    </View>
                    {item?.files?.length > 0 ?
                        <Carousel
                            loop
                            width={WIDTH - 80}
                            height={WIDTH / 2 + 40}
                            data={item?.files}
                            // autoPlay={true}
                            // style={{ borderRadius: 20, }}
                            scrollAnimationDuration={2000}
                            renderItem={({ item }) => {
                                if (item?.type.includes('video')) {
                                    return (
                                        <View style={{
                                            borderRadius: 20, // Rounded corners
                                            marginVertical: 20,
                                            overflow: Platform.OS === "ios" ? "hidden" : "visible", // 'hidden' doesn't work on Android
                                            backgroundColor: "#000",
                                        }}>
                                            <Video
                                                source={{ uri: item.url }}
                                                style={{
                                                    width: WIDTH - 80,
                                                    height: WIDTH / 2,
                                                    overflow: 'hidden'
                                                }}
                                                ref={videoRef}
                                                resizeMode="cover"
                                                controls={true}
                                            />
                                        </View>
                                    )
                                } else {
                                    return (
                                        <Image
                                            source={{ uri: item?.url }}
                                            style={{ width: WIDTH - 80, height: WIDTH / 2, borderRadius: 20, marginVertical: 20 }}
                                        />
                                    )
                                }
                            }
                            }
                        />
                        :
                        item?.files?.length !== 0 ?
                            <Image source={{ uri: item?.url }} style={{ width: WIDTH - 80, height: WIDTH / 2, backgroundColor: 'lightgrey', borderRadius: 20, marginVertical: 20 }} />
                            :
                            <Text style={{
                                fontSize: 14,
                                color: Colors.blackColor,
                                marginVertical: 20
                            }}>{item?.text}</Text>
                    }
                </View>
            </View>
        </>
    )
}

export default FeedPostCard