import React from 'react'
import './footer.css'

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
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
  
      render() {

                const { screenWidth } = this.state;
                const isMobile = screenWidth < 850;

        return (


            <div className='footer-main-cont'>
            {isMobile
            ?
                <img src={require('./footer_logo.png')} className='footer-logo-mobile' alt='footer-logo'/>
            :
                <img src={require('./footer_logo.png')} className='footer-logo' alt='footer-logo'/>
            }   
                <div>
                    <div className='footer-text'>
                        <p>г. Москва, Цветной б-р, 40</p>
                        <p>+7 495 771 21 11</p>
                        <p>info@scan.ru</p>
                    </div>
                    <div className='copyright'>
                        <p>Copyright. 2022</p>
                    </div>
                </div>
   
        
            </div>
      )};
  }
  
  export default Footer;