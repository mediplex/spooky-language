import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from './constants/theme';

import { AppContainer } from './navigation';

import { Provider } from 'react-redux';
import store from './store';

// import { auth } from './firebase'

// import { AppLoading } from 'expo';

export const App = () => {
  //   const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  //   const [isAuthenticationReady, setIsAuthenticationReady] = useState(false)
  //   const [isAuthenticated, setIsAuthenticated] = useState(false)

  //   const onAuthStateChanged = (user) => {
  //     setIsAuthenticationReady(true);
  //     setIsAuthenticated(!!user);
  //   }

  //   //firebase
  //   auth.onAuthStateChanged(onAuthStateChanged);

  //   const _loadResourcesAsync = async () => await console.log('resources loaded');
  //   const _handleLoadingError = error => console.warn(error);
  // const _handleFinishLoading = () => setIsLoadingComplete(true);

  // if ((!isLoadingComplete || !isAuthenticationReady) && !skipLoadingScreen) {
  //     return (
  //       <AppLoading
  //         startAsync={_loadResourcesAsync}
  //         onError={_handleLoadingError}
  //         onFinish={_handleFinishLoading}
  //       />
  //     );
  //   } else {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    </Provider>
  );
  // }
};

export default App;
