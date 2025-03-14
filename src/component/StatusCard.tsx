import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';

interface User {
    id: number;
    name: string;
    profileImage: string;
    status: number;
}

interface StatusCardProps {
    item: User;
}

const StatusCard: React.FC<StatusCardProps> = ({ item }) => {
    return (
        <TouchableOpacity style={[styles.container, item.status === 1 && styles.newBorder]}>
            {item.status === 1 && <Text style={styles.newTag}>New In</Text>}
            <Image source={{ uri: item.profileImage }} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderWidth: 0,
    },
    newBorder: {
        borderWidth: 2,
        borderColor: Colors.greyColor,
    },
    newTag: {
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 7,
        paddingVertical: 3,
        color: Colors.whiteColor,
        borderRadius: 50,
        fontSize: 8,
        position: 'absolute',
        zIndex: 10,
        top: -11,
        right: -12,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
});

export default StatusCard;
