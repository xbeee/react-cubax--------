import logo from '../img/logo-light.svg';
import phone from '../img/infographics/phone.svg';
import background from '../img/header/bg.jpeg';
import scrollImg from '../img/infographics/scroll-low.svg';
import mainImg from '../img/header/main.png';

const Header = () => {
    return ( 
        <div className="main">
            <img src={background} alt="background"  className='background__img'/>
            <div className="container">
                <header className="header">
                    <div className="header__row">
                        <div className="header__logo">
                            <img src={logo} alt="logotype" />
                        </div>
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">для дома</li>
                                <li className="nav__item nav__item--active">для бизнеса</li>
                                <li className="nav__item">тенхнология</li>
                                <li className="nav__item">контакты</li>
                            </ul>
                        </nav>
                        <div className="header__phone">
                            <img src={phone} alt="telephone" />
                            <p>+38 (040) 657-69-09</p>
                        </div>
                    </div>
                </header>
                <div className="info">
                    <div className="info__text">
                        <div className="info__title">
                            <b>CUBAX</b> — уникальная технология возведения капитальных, разборных зданий
                        </div>
                        <div className="info-subtitle">
                            <img src={scrollImg} alt="Scroll" />
                            <div className="info-subtitle__content">
                                <div className="info-subtitle__text">
                                    Движимая недвижимость вышла из области фантастики и стала реальностью.
                                </div>
                                <div className="info__subtitle__btn">
                                    Оставить заявку
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={mainImg} alt="main" />
                </div>
            </div>
        </div>
     );
}
 
export default Header;