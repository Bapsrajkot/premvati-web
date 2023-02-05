import './App.css';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";


function App() {
  return (

    // <Provider>
        <HashRouter>
          <LastLocationProvider>
            <Routes />
          </LastLocationProvider>
        </HashRouter>
    // </Provider>
  );
}

export default App;
