import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import { Route,Routes } from 'react-router-dom';
import TriviaApp from './components/TriviaApp';

function App() {
  return (
    <div>
     <Header></Header>
    <Routes>
      <Route index path='/' element={<TriviaApp></TriviaApp>}></Route>
    </Routes>
   </div>
  );
}

export default App;
