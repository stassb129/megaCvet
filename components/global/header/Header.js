import css from './header.module.scss'
import MySlider from "../../slider/MySlider";

export default function Header() {
    return (
        <header>
            <div className={css.navBg}>
                <nav className={`${css.nav} container`}>
                    <span className={css.number}>+375291491996</span>
                    <ul className={css.navigation}>
                        <li className={css.navItem}>
                            <a href="#">
                                <i className="icon-search"></i>Поиск
                            </a>
                        </li>
                        <li className={css.navItem}>
                            <a href="#">
                                <i className="icon-shopping-bag">
                                </i>Корзина <span>0</span>
                            </a>
                        </li>
                        <li className={css.navItem}>
                            <a href="#">
                                <i className="icon-user"></i>Аккаунт
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`${css.top} container`}>
                <img src="/images/logo.jpg" alt="Мегацвет" className={css.logo}/>
                    <ul className={css.menu}>
                        <li className={css.menuItem}><div></div>Какие-то цветы</li>
                        <li className={css.menuItem}><div></div>Какие-то цветы</li>
                        <li className={css.menuItem}><div></div>Какие-то цветы</li>
                        <li className={css.menuItem}><div></div>Какие-то цветы</li>
                    </ul>
            </div>

            <MySlider/>

        </header>
    )
}