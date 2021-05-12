import  React from 'react';
import { useDispatch, useSelector ,Provider} from 'react-redux';
import {store} from './src/redux'; 
import AppComponent from './src/components/appComponent';
function App() {
  
  
  return (
    <Provider store={store}>
        <AppComponent/>
    </Provider>
  );
}

export default App;
