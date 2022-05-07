import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme/theme'
import { useLocation, Link } from "react-router-native";
import StyledText from "./StyledText";

const AppBarTab = ({ children, to }) => {
	const { pathname } = useLocation()
	const active = pathname === to
	const textStyles = [styles.text, active && styles.active]
	return (
		<Link to={to}>
			<StyledText fontWeight='bold' style={textStyles}>
				{children}
			</StyledText>
		</Link>
	);
}


const AppBar = () => {
	return (
		<View style={styles.container}>
				<AppBarTab to='/'>
					Home
				</AppBarTab>
				<AppBarTab to='/favorites'>Favorites</AppBarTab>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: theme.appBar.primary,
		paddingTop: Constants.statusBarHeight + 10,
		paddingBottom: 10,
		paddingLeft: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
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