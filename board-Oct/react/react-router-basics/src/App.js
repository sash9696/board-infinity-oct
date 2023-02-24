import './App.css';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/about' element={<h1>About us page</h1>} />
        <Route path='/blog' element={<h1>Blog page</h1>} />
        <Route path='/contact-us' element={<h1>Contact us page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
