import React from "react"
import Slider from "./slider/slider.js"
import Tarrifs from "./tarrifs/tarrifs.js"
import { Link } from 'react-router-dom'
import './main.css'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            isAuth: localStorage.getItem('isAuth') === 'true',
            screenWidth: window.innerWidth
        };
    }
    
    render() {
        return(

            <div className='main-page-cont'>
                <div className='main-page-top-cont'>
                    <div className='top-request-cont'>

                        <div className='top-title-text'>
                            <p>сервис по поиску публикаций о компании по его ИНН</p>
                        </div>

                        <div className='top-description-text'>
                            <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                        </div>

                        <div className='top-request-btn-cont'>
                            {this.state.isAuth &&
                            <Link 
                                to='/requestform'
                                className='request-btn'>
                                <div>Запросить данные</div>
                            </Link>
                            }
                        </div>
                    </div>
                    <div className='top-img-cont'>
                        <img src={require('./Group_13.png')} alt="Group_13"/>   
                    </div>
                </div>

                <div className='slider-title-text-cont'>
                    <div className='slider-title-text'>почему именно мы</div>
                </div>

                <div className='main-page-slider'>
                    <Slider/>
                </div>

                <div className='main-page-image-cont'>
                    <img className='scnd-image'  src={require('./Group_14.png')} alt='main-page-image'></img>
                </div>

                <Tarrifs/>
            </div>

        )
    }
}

export default Main;