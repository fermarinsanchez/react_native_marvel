import React, {useEffect} from 'react'
import {Text, ScrollView} from 'react-native'
import { getSuperHeroDetail } from '../services/api'

const HeroDetail = ({heroId}) => {

    const [hero, setHero] = React.useState();
    console.log('heroId', heroId);


    useEffect(() => {
     getSuperHeroDetail(heroId)
        .then(data => {
            setHero(data)
            console.log(data)
        })
        .catch(err => console.error(`Error: ${err}`));
    }, [])
    
    
    return (
        <>
       
        <ScrollView>
        <Text style={{color: '#fff'}}>HeroDetail</Text>
        <Text style={{color: '#fff'}}>HeroDetail</Text>
        <Text style={{color: '#fff'}}>{JSON.stringify(hero, null, 2)}
        </Text>
        </ScrollView>
        </>
        
    )
}

export default HeroDetail;
