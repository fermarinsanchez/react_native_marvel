import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/store/index';

const App = () => {

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </Provider>
    </>

  )
};

export default App;
