import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useLocation, Link } from 'react-router-native';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../theme/theme'



const AppBarTab = ({ text, to, iconName }) => {
    
    const { pathname } = useLocation();
    const active = pathname === to;
    const textStyles = [styles.text, active && styles.active];
    
    const handleIcon = active
        ? theme.colors.textPrimary
        : theme.colors.textSecondary

    return (
        <Link to={to} activeOpacity={1} underlayColor={theme.appBar.primary}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            { iconName === 'home' && <Foundation name={iconName} size={20} color={handleIcon} /> }
            { iconName === 'heart-o' && <FontAwesome name={iconName} size={20} color={handleIcon} /> }
                <Text style={textStyles}>
                    {text}
                </Text>
            </View>

        </Link>
    );
}


const AppBar = () => {


    return (
        <View style={styles.container}>
            <AppBarTab to='/' text={'Home'} iconName={'home'}/>
            <AppBarTab to='/favorites' text={'Favs'} iconName={'heart-o'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.appBar.primary,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 11,
        justifyContent: 'space-between',
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textPrimary,
    },
});

export default AppBar; 