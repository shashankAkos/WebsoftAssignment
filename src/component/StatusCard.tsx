import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';
import { S, VS, MS } from '../utils/scalingUtils';

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
        width: S(65),
        height: S(65),
        borderRadius: S(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: S(10),
        borderWidth: 0,
    },
    newBorder: {
        borderWidth: S(2),
        borderColor: Colors.greyColor,
    },
    newTag: {
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: S(7),
        paddingVertical: VS(3),
        color: Colors.whiteColor,
        borderRadius: S(50),
        fontSize: MS(8),
        position: 'absolute',
        zIndex: 10,
        top: VS(-11),
        right: S(-12),
    },
    image: {
        width: S(55),
        height: S(55),
        borderRadius: S(50),
    },
});

export default StatusCard;
