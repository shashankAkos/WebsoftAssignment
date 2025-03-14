import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { S, VS, MS } from '../utils/scalingUtils'
import { Colors } from '../utils/Colors'
import { CameraIcon, DownArrow, LeftLineArrow, MenuIcon, SearchIcon } from '../utils/Icons'

interface PropsTypes {
    backIcon?: boolean,
    searchIcon?: boolean,
    cameraIcon?: boolean,
    menuIcon?: boolean,
    title?: string,
    pressSearch?: () => void,
    pressCamera?: () => void,
    pressMenu?: () => void,
    handleBack?: () => void,
}

const CommonHeader: FC<PropsTypes> = ({
    handleBack = () => { },
    backIcon = false,
    pressSearch = () => { },
    pressCamera = () => { },
    pressMenu = () => { },
    title = '',
    searchIcon,
    cameraIcon = false,
    menuIcon = false
}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.iconBox}>
                {backIcon && (
                    <TouchableOpacity style={styles.leftIconsBox} onPress={handleBack}>
                        <LeftLineArrow />
                    </TouchableOpacity>
                )}
                {cameraIcon && (
                    <TouchableOpacity style={styles.leftIconsBox} onPress={pressCamera}>
                        <CameraIcon />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.middleBox}>
                <Text style={styles.titleText}>{title}</Text>
                <DownArrow />
            </View>
            <View style={styles.iconBox}>
                {searchIcon && (
                    <TouchableOpacity onPress={pressSearch} style={styles.rightIconsBox}>
                        <SearchIcon />
                    </TouchableOpacity>
                )}
                {menuIcon && (
                    <TouchableOpacity onPress={pressMenu} style={styles.rightIconsBox}>
                        <MenuIcon />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        paddingVertical: VS(12),
        borderBottomWidth: S(1),
        borderColor: Colors.greyColor,
    },
    iconBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightIconsBox: {
        paddingRight: S(15)
    },
    leftIconsBox: {
        paddingLeft: S(15)
    },
    middleBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: MS(14),
        fontWeight: 'bold',
        marginRight: S(7)
    }
})

export default CommonHeader
