
import './App.css';
import Categories from './components/Categories/Categories';
import Featured from './components/Featured/Featured';
import Home from './components/Home/Home';
import SpecialOffer from './components/SpacialOffer/SpecialOffer';
import NavBar from './Constants/NavBar/NavBar';

import { AppProvider } from './ContextApi/AppContext';

function App() {
  return (
    <AppProvider>
          <div className="App">
              <NavBar/>
              <Home/>
              <Categories/>
              <Featured/>
              <SpecialOffer/>

          </div>
     </AppProvider>
  );
}

export default App;
