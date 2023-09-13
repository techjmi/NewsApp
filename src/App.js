import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <div>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/general' element={<News key='general' pageSize={6} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={6} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='home' pageSize={6} country='in' category='general' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={6} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={6} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={6} country='in' category='technology' />}></Route>
            <Route path='/headline' element={<News key='Headline' pageSize={6} country='in' title='Headline' />}></Route>
          </Routes>
        </Router>
    {/* <News pageSize={5} country="in" category="technology" /> */}

   </div>
  );
}

export default App;
