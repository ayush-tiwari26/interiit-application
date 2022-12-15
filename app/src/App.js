import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import React from 'react';
import SnackbarStateProvider from './providers/SnackBarStateProvider';
import Snackbar from './components/MuiComponents/Snackbar'
import { UserTokenContext } from './providers/UserTokenProvider';

function App() {
  const {userToken, setUserToken} = React.useContext(UserTokenContext);
  return (
      <SnackbarStateProvider>
        <div className="App">
          {userToken ? <Dashboard userTokenState={[userToken, setUserToken]} /> : <Auth userTokenState={[userToken, setUserToken]} />}
        </div>
        <Snackbar />
      </SnackbarStateProvider>
  );
}

export default App;
