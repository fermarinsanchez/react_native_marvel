import { View } from 'react-native';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';
import Home from './Home';
import Favorites from './Favorites';

 const Main = () => {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/favorites' element={<Favorites/>} />
			</Routes>
		</View>
	)
};

export default Main;