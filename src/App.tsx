import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import store from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Home />
      </div>
    </ReduxProvider>

  );
}

export default App;
