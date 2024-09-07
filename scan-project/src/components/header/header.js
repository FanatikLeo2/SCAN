import React from 'react'
import userData from "./user/user.js"
import { Link } from 'react-router-dom'
import './header.css'

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            isAuth: localStorage.getItem('isAuth') === 'true',
            screenWidth: window.innerWidth
        };
    }
 
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ screenWidth: window.innerWidth });
    };

    clean = () => {
        console.log(1)
        localStorage.setItem('requestData', null)
        localStorage.setItem('histograms', null)
        localStorage.setItem('ids', null)
        localStorage.setItem('documents', null)            
    };

    handleLogin = () => {
        localStorage.setItem('isAuth', true);
        window.location.reload();
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        window.location.reload();
    };

    render() {

        const { isAuth, screenWidth } = this.state;
        const isMobile = screenWidth < 850;

        return (

            isMobile 
            ?
            <div className='header-main-cont-mobile'>

                        <img src={require('./header_logo.png')} className='header-logo-mobile' alt='header_logo'/>

                        {isAuth && 
                            <div className='user-isAuth-cont'>
                                <div className='user-info-mobile'>USERINFO</div>
                            </div>
                        }

                        <div className='burger'>BURGER</div>

            </div>
            :
            <div className='header-main-cont'>

                <img src={require('./header_logo.png')} className='header-logo' alt='header_logo'/>
                            
                <div className="nav-cont">
                    <nav className='nav-bar'>
                        <Link  className='link-to' to='/'>Главная</Link >
                        <a>Тарифы</a>
                        <a>FAQ</a>
                    </nav>
                </div> 
                
                {isAuth 
                ? 
                <div className='user-isAuth-cont'>

                    <div className='user-info'>USERINFO</div>

                        <div className='user-badge-cont'>
                            <div className='user-name-cont '>
                                <div>{`${userData.firstName} ${userData.secondName.charAt(0)}.`}</div>
                                <div className='user-exit-btn' onClick= {this.handleLogout}>Выйти</div>
                            </div>
                        <img src={userData.avatar} className='user-avatar' alt='user_avatar_logo'></img>
                    </div>
                </div>        
                :
                <div className="user-cont">

                    <div className='user-sign'> 
                        <a>Зарегистрироваться</a> 
                    </div> 
                    <div class="rectangle"></div>
                    <div className='sign-in-btn'>
                        <a className='link-to' to='/login' onClick= {this.handleLogin}>Войти</a>
                    </div>
                </div>  
                }
            </div>
      )};
  }
  
  export default Header;