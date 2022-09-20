import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';




function App() {
  return (
    <>
      <Provider store={store}>

        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart/:id' element={<CardsDetails />} />

        </Routes>
      </Provider>

    </>
  );
}

export default App;
