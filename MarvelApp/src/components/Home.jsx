import React from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import {PortalProvider} from 'react-native-portal'
import { getSuperHeroes } from '../services/api';
import Constants from 'expo-constants'
import theme from '../theme/theme'
import HeroDetail from './HeroDetail';


const Card = (props) => {
    const{item, setSeeDetail, setHeroId} = props;
    const handleIsLiked = item.isLiked
        ? require('./img/icons/heart-card-selected.png')
        : require('./img/icons/heart-card.png')

    const handleOnPress = (item) => {
        setSeeDetail(true);
        setHeroId(item.id);
    }

    return (
        <TouchableOpacity 
            onPress={() => handleOnPress(item)}
            style={{width: 115}}
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
                source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}} 
                style={{ width: 115, height: 115, }} 
            />
            <LinearGradient 
                colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
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
                colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
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



const Home = () => {
    const [superHeroes, setSuperHeroes] = React.useState([]);
    const [seeDetail, setSeeDetail] = React.useState(false);
    const [heroId, setHeroId] = React.useState(null);
    const [showData, setShowData] = React.useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getSuperHeroes()
            .then(data => {
                setSuperHeroes(data);
                setShowData(true);
                dispatch({
                    type: 'ADD_SUPERHEROES',
                    payload: data
                })
            })
            .catch(err => console.error(`Error: ${err}`));
           
    }, []);

    // const reduxData = useSelector(state => console.log('state redux', JSON.stringify(state, null, 2)))

    // console.log('ReduxHeroes', reduxData);
    if(!showData) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
    }


  return (
      <View style={{
          paddingTop: Constants.statusBarHeight + 10,
          height: '93%',
          backgroundColor: '#000000'
        }}>
            {seeDetail 
                ?  (    <PortalProvider>
                            <HeroDetail 
                                heroId={heroId} 
                                setSeeDetail={setSeeDetail}
                                setHeroId={setHeroId}
                            />
                        </PortalProvider>)
                    
                        : <ScrollView>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginLeft: 12,
                                width: '90%',
                                paddingTop: 20
                                }}>
                                {superHeroes.map(item => (
                                    <Card 
                                        key={item.id}
                                        item={item} 
                                        setHeroId={setHeroId} 
                                        setSeeDetail={setSeeDetail}
                                    />
                                ))}
                            </View>
                        </ScrollView>
            }
        </View>

  )
}

export default Home;
