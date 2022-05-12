import React, { useEffect } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { getSuperHeroDetail } from '../services/api';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import theme from '../theme/theme';

const HeroDetail = ({ heroId, setSeeDetail, superHeroes, setSuperHeroes, favorites }) => {

    const [hero, setHero] = React.useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        getSuperHeroDetail(heroId)
            .then(data => {
                setHero(data[0])
            })
            .catch(err => console.error(`Error: ${err}`));
    }, [])

    const isFav = (heroSelected) => {
        let newSuperHeroes = superHeroes;
        for (const hero in newSuperHeroes) {
            if (newSuperHeroes[hero].id === heroSelected.id) {
                newSuperHeroes[hero].isLiked = !newSuperHeroes[hero].isLiked;
            }
        }
        dispatch({
            type: 'ADD_SUPERHEROES',
            payload: [...newSuperHeroes]
        })
        setSuperHeroes(newSuperHeroes)
    }

    if (!Object.entries(hero).length) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
    }
    const image = hero.thumbnail.path + '.' + hero.thumbnail.extension;
    const handleNoDescription = !hero.description
        ? 'No description provided by Marvel API 😞 No description provided by Marvel API 😞 No description provided by Marvel API 😞 No description provided by Marvel API 😞 No description provided by Marvel API 😞 No description provided by Marvel API 😞 No description provided by Marvel API 😞 '
        : hero.description;
    return (
        <>
            <View style={style.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={style.image}
                    accessibilityLabel={hero.name}
                    resizeMode='cover'
                />
                <TouchableOpacity
                    style={style.backButton}
                    onPress={() => setSeeDetail(false)}
                >
                    <Text style={style.backButtonText}>
                        <FontAwesome
                            name="chevron-left"
                            size={17}
                            color={theme.colors.textPrimary}
                        />  Back

                    </Text>
                </TouchableOpacity>
                <Text style={style.title}>
                    {hero.name}
                </Text>
                <LinearGradient
                    colors={[theme.colors.gradientColor1, theme.colors.gradientColor2]}
                    locations={[0.1, 0.9]}
                    style={style.gradientTop}
                />
                <LinearGradient
                    colors={[theme.colors.gradientColor1, theme.colors.gradientColor2]}
                    locations={[0.1, 0.9]}
                    style={style.gradientBottom}
                />
            </View>
            <View>
                <Text style={style.description}>{handleNoDescription}</Text>
            </View>
            {!favorites &&
            <TouchableOpacity 
                style={style.likeButtonContainer}     
                onPress={() => isFav(hero)}
            >
                <FontAwesome
                    name="heart-o"
                    size={24}
                    color={theme.colors.textPrimary} />
            </TouchableOpacity>}
        </>
    )
}

const style = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 400,
        position: 'relative'
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 18,
        zIndex: 5
    },
    backButtonText: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.backButton
    },
    title: {
        color: '#fff',
        position: 'absolute',
        bottom: -32,
        left: 18,
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold,
        zIndex: 5
    },
    gradientTop: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '50%'
    },
    gradientBottom: {
        position: 'absolute',
        transform: [{ rotate: "180deg" }],
        bottom: -30,
        zIndex: 2,
        width: '100%',
        height: '50%'
    },
    description: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.description,
        fontWeight: theme.fontWeights.regular,
        marginTop: 60,
        marginLeft: 18,
        marginRight: '5%'
    },
    likeButtonContainer: {
        backgroundColor: theme.colors.button,
        width: 62,
        height: 62,
        borderRadius: 100,
        position: 'absolute',
        backdropFilter: 'blur(2px)',
        right: 35,
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconLike: {
        width: 21,
        height: 21,
    }


});

export default HeroDetail;
