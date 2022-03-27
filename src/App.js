import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Page1 from './components/page1/Page1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path="/"
          element={<Homepage/>}
        >

        </Route>
        <Route
          exact path="/join"
          element={<Page1/>}
        ></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
