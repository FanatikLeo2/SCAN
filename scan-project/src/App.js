import './App.css';
import Header from "./components/header/header.js";
import Main from './components/main/main.js';
import RequestForm from './components/requestform/requestform.js';
import LoginForm from './components/loginform/loginform.js';
import SearchResult from './components/searchresult/searchresult.js';
import Footer from "./components/footer/footer.js";
import {observer} from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 


function App() {

  return (
      <div className="app-container">
        
        <Header/>

        <div className='grow-1'>
          <Routes>

            <Route path='/' element={<Main/>}/>
            <Route path='/requestform' element={localStorage.getItem('isAuth') ? <RequestForm/> : <Navigate to="/" />}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/searchres' element={localStorage.getItem('isAuth') ? <SearchResult/> : <Navigate to="/" />}/>
          </Routes>
        </div>

        <Footer/>

      </div>
  );
}

export default observer(App);
