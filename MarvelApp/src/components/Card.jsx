import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import theme from '../theme/theme';


const Card = (props) => {
    const { item, setSeeDetail, setHeroId } = props;
    const handleIsLiked = item.isLiked
        ? require('./img/icons/heart-card-selected.png')
        : require('./img/icons/heart-card.png')

    const handleOnPress = (item) => {
        setSeeDetail(true);
        setHeroId(item.id);
    }

    if(!item) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
    }

    return (
        <TouchableOpacity
            onPress={() => handleOnPress(item)}
            style={{ width: 115 }}
        >
            <View style={{
                position: 'relative',
                marginVertical: 5,
                marginHorizontal: 5,
                width: 115,

            }}>
                <Image
                    source={handleIsLiked}
                    style={{
                        width: 16,
                        height: 16,
                        position: 'absolute',
                        top: 7,
                        right: 7,
                        zIndex: 12
                    }}

                />
                <Text style={{
                    position: 'absolute',
                    zIndex: 11,
                    color: theme.colors.textPrimary,
                    left: 8,
                    bottom: 11,
                    width: 100,
                    fontFamily: theme.fonts.title,
                    fontSize: theme.fontSizes.card,
                    fontWeight: theme.fontWeights.semibold
                }}>{item.name}</Text>
                <Image
                    source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                    style={{ width: 115, height: 115, }}
                />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
                    locations={[0.1, 0.7]}
                    style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: 10,
                        width: 115,
                        height: 50
                    }}
                />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
                    locations={[0.1, 0.9]}
                    style={{
                        position: 'absolute',
                        transform: [{ rotate: "180deg" }],
                        bottom: 0,
                        zIndex: 10,
                        width: 115,
                        height: 50
                    }}
                />
            </View>
        </TouchableOpacity>

    )
}

export default Card;