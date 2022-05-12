import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { getSuperHeroes } from '../services/api';
import HeroDetail from './HeroDetail';
import Constants from 'expo-constants';

import theme from '../theme/theme';
import Card from './Card';


const Favorites = () => {
  const [superHeroes, setSuperHeroes] = React.useState([]);
  const [seeDetail, setSeeDetail] = React.useState(false);
  const [heroId, setHeroId] = React.useState(null);
  const [showData, setShowData] = React.useState(false);
  const reduxDataHeroes = useSelector(state => state.superheroes);


  useEffect(() => {
    const filteredHeroes = reduxDataHeroes.filter(elem => elem.isLiked === true)
    setSuperHeroes(filteredHeroes);
    setShowData(true);
  }, []);

  if (!showData) {
    return (
      <View style={style.ActivityIndicatorContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
  }


  return (
    <>

      <View style={style.mainContainer}>
        {seeDetail
          ? (
            <HeroDetail
              heroId={heroId}
              setSeeDetail={setSeeDetail}
              superHeroes={superHeroes}
              setSuperHeroes={setSuperHeroes}
              favorites={true}
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
                  favorites={true}
                />
              ))}
            </View>
          </ScrollView>
        }
      </View>
    </>
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

export default Favorites;