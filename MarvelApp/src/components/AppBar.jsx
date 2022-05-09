import { View, StyleSheet, Image } from 'react-native'
import theme from '../theme/theme'
import { useLocation, Link } from "react-router-native";
import StyledText from "./StyledText";


const AppBarTab = ({ text, to, icon, iconSelected }) => {
	const { pathname } = useLocation();
	const active = pathname === to;
	const textStyles = [styles.text, active && styles.active];
    const handleIcon = active 
        ? iconSelected 
        : icon;
	return (
		<Link to={to} activeOpacity={1} underlayColor={theme.appBar.primary}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 20, height: 20}} source={handleIcon} />
			<StyledText fontWeight='bold' style={textStyles}>
				{text}
			</StyledText>
        </View>
          
		</Link>
	);
}


const AppBar = () => {
	return (
		<View style={styles.container}>
				<AppBarTab to='/' text={'Home'} icon={require('./img/icons/home-appbar.png')} iconSelected={require('./img/icons/home-appbar-selected.png')}/>
				<AppBarTab to='/favorites' text={'Favs'} icon={require('./img/icons/heart-appbar.png')} iconSelected={require('./img/icons/heart-appbar-selected.png')}/>
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