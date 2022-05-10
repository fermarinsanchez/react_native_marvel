import React, {useEffect} from 'react'
import {Text, ScrollView, Image, TouchableOpacity, View, ActivityIndicator, ImageBackground, Dimensions} from 'react-native'
import { getSuperHeroDetail } from '../services/api';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '../theme/theme';

const HeroDetail = ({heroId, setSeeDetail}) => {

    const [hero, setHero] = React.useState([]);

    const ratio = Dimensions.get('window').width / Dimensions.get('window').height;

    useEffect(() => {
     getSuperHeroDetail(heroId)
        .then(data => {
            setHero(data[0])
        })
        .catch(err => console.error(`Error: ${err}`));
    }, [])

    if(!Object.entries(hero).length) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
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
        
       
       
            <View style={{width: '100%', height: 400, position: 'relative'}}>
                <Image
                    source={{uri: image}}  
                    style={{ 
                        width: '100%',
                        aspectRatio: 1
                       }}
                        accessibilityLabel={hero.name}
                        resizeMode='cover'
                    />
                    <TouchableOpacity style={{position: 'absolute', top: 40, left: 18, zIndex: 5, }} onPress={() => setSeeDetail(false)}>
                        <Text style={{color: '#fff', fontSize: theme.fontSizes.backButton}}> &#60;  Back </Text>
                    </TouchableOpacity>
                    <Text style={{color: '#fff', position: 'absolute', bottom: -32, left: 18, fontSize: theme.fontSizes.title, fontWeight: theme.fontWeights.bold, zIndex: 5}}
                    >{hero.name}</Text>
                    <LinearGradient
                    colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
                    locations={[0.1, 0.9]}
                    style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: 2,
                        width: '100%',
                        height: '50%'
                    }}
                />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
                    locations={[0.1, 0.9]}
                    style={{
                        position: 'absolute',
                        transform: [{ rotate: "180deg" }],
                        bottom: -30,
                        zIndex: 2,
                        width: '100%',
                        height: '50%'
                    }}
                />

            </View>

            <View>
                <Text style={{color: theme.colors.textSecondary, fontSize: theme.fontSizes.description, fontWeight: theme.fontWeights.regular, marginTop: 60, marginLeft: 18, marginRight: '5%', lineHeigth: 22.5}}>{handleNoDescription}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: theme.colors.button,
                width: 62, 
                height: 62,
                borderRadius: 100,
                position: 'fixed',
                backdropFilter: 'blur(2px)',
                right: 35,
                bottom: 90,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image 
                    source={require('./img/icons/heart-button.png')} 
                    style={{
                        width: 21,
                        height: 21,
                }} />
            </TouchableOpacity>

        </>
        
    )
}

export default HeroDetail;
