import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header.js"
import Main from './components/main/main.js'
import Footer from "./components/footer/footer.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App-container">
        
        <Header/>

        <div className='grow-1'>
          <Routes>

            <Route path='/' element={<Main/>}/>

          </Routes>
        </div>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
