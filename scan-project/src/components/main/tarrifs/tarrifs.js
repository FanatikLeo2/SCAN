import React from "react"
import userData from '../../header/user/user.js'
import './tarrifs.css'

class Tarrifs extends React.Component {
    constructor() {
        super()
        this.state = {
            isAuth: localStorage.getItem('isAuth') === 'true',
        };
    }
    
    render() {
        return(

            <div className='tariffs-cont'>

                <p className='slider-title-text bit-margin-left'>наши тарифы</p>

                <div className='tariffs'>
                    <div className='tariff'>

                        <div className='tariff-header'>
                            <div className='tariff-header-cont'>
                                <div className='tariff-header-bigger-text'>Beginner</div>
                                <div className='tariff-header-smaller-text'>Для небольшого исследования</div>
                            </div>

                            <img className='tariff-header-image' src={require('./tariffs_img/Group_1171274215.png')} alt='tariff-image1'></img>
                        </div>

                        <div className='tariff-inner'>
                            <div className='current-tariff-badge-container'>
                                {userData.tariff === 'beginner' && this.state.isAuth
                                ?
                                <p className='current-tariff-badge'><span>Текущий тариф</span></p>
                                :
                                 <p className='current-tariff-badge tariff-badge-hidden '><span>Текущий тариф</span></p>
                                }
                            </div>

                            <div>
                                <div className='tariff-current-price'>799 ₽ <span className='tariff-previous-price'>1 200 ₽</span></div>
                                <div className='tariff-installment-plan '>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>

                            <div className='tariff-feature-list'> В тариф входит:
                                <ul>
                                    <li>Безлимитная история запросов</li>
                                    <li>Безопасная сделка</li>
                                    <li>Поддержка 24/7</li>
                                </ul>
                            </div>

                            <div className='tariff-button-container'>
                                {userData.tariff === 'beginner' && this.state.isAuth
                                ?
                                <div className='tariff-button grey'>Перейти в личный кабинет</div> 
                                :
                                <div className='tariff-button'>Подробнее</div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className='tariff'>
                        
                        <div className='tariff-header'>
                            <div className='tariff-header-cont'>
                                <div className='tariff-header-bigger-text'>Pro</div>
                                <div className='tariff-header-smaller-text'>Для HR и фрилансеров</div>
                            </div>

                            <img className='tariff-header-image' id='scnd-tariff-image' src={require('./tariffs_img/Group_1171274216.png')} alt='tariff-image1'></img>
                        </div>

                        <div className='tariff-inner'>
                            <div className='current-tariff-badge-container'>
                                {userData.tariff === 'pro' && this.state.isAuth
                                ?
                                <p className='current-tariff-badge'><span>Текущий тариф</span></p>
                                :
                                <p className='current-tariff-badge tariff-badge-hidden '><span>Текущий тариф</span></p>
                                }
                            </div>

                            <div>
                                <div className='tariff-current-price'>1 299 ₽ <span className='tariff-previous-price'>2 600 ₽</span></div>
                                <div className='tariff-installment-plan '>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>

                            <div className='tariff-feature-list'> В тариф входит:
                                <ul>
                                    <li>Все пункты тарифа Beginner</li>
                                    <li>Экспорт истории</li>
                                    <li>Рекомендации по приоритетам</li>
                                </ul>
                            </div>

                            <div className='tariff-button-container'>
                                {userData.tariff === 'pro' && this.state.isAuth
                                ?
                                <div className='tariff-button grey'>Перейти в личный кабинет</div> 
                                :
                                <div className='tariff-button'>Подробнее</div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='tariff'>

                        <div className='tariff-header'>
                            <div className='tariff-header-cont'>
                                <div className='tariff-header-bigger-text' id='third-tariff-text'>Business</div>
                                <div className='tariff-header-smaller-text' id='third-tariff-text'>Для корпоративных клиентов</div>                
                            </div>
                                
                            <img className='tariff-header-image' src={require('./tariffs_img/Group_1171274214.png')} alt='tariff-image1' ></img>
                        </div>

                        <div className='tariff-inner'>
                            <div className='current-tariff-badge-container'>
                                {userData.tariff === 'business' && this.state.isAuth
                                ?
                                <p className='current-tariff-badge'><span>Текущий тариф</span></p>
                                :
                                <p className='current-tariff-badge tariff-badge-hidden '><span>Текущий тариф</span></p>
                                }
                            </div>

                            <div>
                                <div className='tariff-current-price'>2 379 ₽ <span className='tariff-previous-price'>3 700 ₽</span></div>
                                <div className='tariff-installment-plan ' id='invisible-text'>text</div>
                            </div>

                            <div className='tariff-feature-list'> В тариф входит:
                                <ul>
                                    <li>Все пункты тарифа Pro</li>
                                    <li>Безлимитное количесство запросов</li>
                                    <li>Приоритетная поддержка</li>
                                </ul>
                            </div>

                            <div className='tariff-button-container'>
                                {userData.tariff === 'business' && this.state.isAuth
                                ?
                                <div className='tariff-button grey'>Перейти в личный кабинет</div> 
                                :
                                <div className='tariff-button'>Подробнее</div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Tarrifs;