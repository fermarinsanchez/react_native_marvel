import React from 'react';
import { View, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSuperHeroes } from '../services/api';
import Constants from 'expo-constants';
import theme from '../theme/theme';
import HeroDetail from './HeroDetail';
import Card from './Card';

const Home = () => {

    const [superHeroes, setSuperHeroes] = React.useState([]);
    const [seeDetail, setSeeDetail] = React.useState(false);
    const [heroId, setHeroId] = React.useState(null);
    const [showData, setShowData] = React.useState(false);
    const dispatch = useDispatch();


    const reduxDataHeroes = useSelector(state => state.superheroes);

    React.useEffect(() => {
      
        if(reduxDataHeroes.length) {
            setSuperHeroes(reduxDataHeroes);
            setShowData(true);
        } else {
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
        }
    }, []);


    if(!showData) {
        return (
            <View style={style.ActivityIndicatorContainer}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
    }


  return (
      <View style={style.mainContainer}>
            {seeDetail 
                ?  (    
                            <HeroDetail 
                                heroId={heroId} 
                                setSeeDetail={setSeeDetail}
                                superHeroes={superHeroes}
                                setSuperHeroes={setSuperHeroes}
                            />
                        )
                    
                        : <ScrollView>
                            <View style={style.cardGrid}>
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

const style = StyleSheet.create({
    ActivityIndicatorContainer: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#000000' 
    },
    mainContainer: {
      paddingTop: Constants.statusBarHeight,
      height: '93%',
      backgroundColor: '#000000'
    },
    cardGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 12,
        width: '90%',
        paddingTop: 20
    }
  });

export default Home;
