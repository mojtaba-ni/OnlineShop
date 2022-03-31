import React from 'react';
import Navbar from './components/navbar'
import Landing from './layout/Landing';
import Category from './layout/Category'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Category' element={<Category/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
