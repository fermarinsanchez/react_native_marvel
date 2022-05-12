import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../theme/theme';


const Card = (props) => {
    const { item, setSeeDetail, setHeroId, favorites } = props;
    const handleIsLiked = item.isLiked
        ?  <FontAwesome
                name="heart-o"
                size={16}
                color="red"
            />
        :  <FontAwesome
                name="heart-o"
                size={16}
                color="white"
            />

    const handleOnPress = (item) => {
        setSeeDetail(true);
        setHeroId(item.id);
    }

    if (!item) {
        return (
            <View style={style.ActivityIndicatorContainer}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
    }

    return (
        <TouchableOpacity
            onPress={() => handleOnPress(item)}
            style={favorites ? style.buttonWrapperFavorite : style.buttonWrapper}
        >
            <View>
                <View style={favorites ? style.heartContainerFavorite : style.heartContainer}>
                    {handleIsLiked}
                </View>
                <Text style={style.name}>{item.name}</Text>
                <Image
                    source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                    style={favorites ? style.imageCardFavorite : style.imageCard}
                />
                <LinearGradient
                    colors={[theme.colors.gradientColor1, theme.colors.gradientColor2]}
                    locations={[0.1, 0.7]}
                    style={favorites ? style.gradient1Favorite : style.gradient1}
                />
                <LinearGradient
                    colors={[theme.colors.gradientColor1, theme.colors.gradientColor2]}
                    locations={[0.1, 0.9]}
                    style={favorites ? style.gradient2Favorite : style.gradient2}
                />
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    ActivityIndicatorContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000000' 
    },
    buttonWrapper: {
        width: 115 
    },
    buttonWrapperFavorite: {
        width: 160 
    },
    heartContainer: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 7,
        right: 7,
        zIndex: 20
    },
    heartContainerFavorite: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 20
    },
    name: {
        position: 'absolute',
        zIndex: 11,
        color: theme.colors.textPrimary,
        left: 8,
        bottom: 11,
        width: 100,
        fontFamily: theme.fonts.title,
        fontSize: theme.fontSizes.card,
        fontWeight: theme.fontWeights.semibold
    }, 
    imageCard: { 
        width: 115, 
        height: 115, 
    },
    imageCardFavorite: {
        width: 160,
        height: 160,
    },
    gradient1: {
        position: 'absolute',
        top: 0,
        zIndex: 10,
        width: 115,
        height: 50
    }, 
    gradient1Favorite: {
        position: 'absolute',
        top: 0,
        zIndex: 10,
        width: 160,
        height: 70
    }, 
    gradient2: {
        position: 'absolute',
        transform: [{ rotate: "180deg" }],
        bottom: 0,
        zIndex: 10,
        width: 115,
        height: 50
    },
    gradient2Favorite: {
        position: 'absolute',
        transform: [{ rotate: "180deg" }],
        bottom: 0,
        zIndex: 10,
        width: 160,
        height: 70
    }
});


export default Card;