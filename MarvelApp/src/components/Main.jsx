import { View } from 'react-native';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';
import Home from './Home';
import Favorites from './Favorites';
import HeroDetail from './HeroDetail';

 const Main = () => {


	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/favorites' element={<Favorites/>} />
				<Route path='/superhero/:id' element={<HeroDetail/>} />
			</Routes>
		</View>
	)
};

export default Main;