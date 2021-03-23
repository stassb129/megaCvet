import Slider from 'react-slick'
import css from './mySlider.module.scss'

export default function MySlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    }

    return (
            <div className={css.slider}>
                <Slider {...settings} >
                    <div className={css.item}>
                        <img src="/images/slider/1.jpg" alt=""/>
                        <div className={css.description}>
                            <h4>Новая коллекция</h4>
                            <p>Написано что-то менее важное</p>
                            <a href="" className="link-btn">Купить сейчас!</a>
                        </div>
                    </div>
                    <div className={css.item}>
                        <img src="/images/slider/2.jpg" alt=""/>
                        <div className={css.description}>
                            <h4>Новая коллекция</h4>
                            <p>Написано что-то менее важное</p>
                            <a href="" className="link-btn">Купить сейчас!</a>
                        </div>
                    </div>
                    <div className={css.item}>
                        <img src="/images/slider/3.jpg" alt=""/>
                        <div className={css.description}>
                            <h4>Новая коллекция</h4>
                            <p>Написано что-то менее важное</p>
                            <a href="" className="link-btn">Купить сейчас!</a>
                        </div>
                    </div>
                    <div className={css.item}>
                        <img src="/images/slider/4.jpg" alt=""/>
                        <div className={css.description}>
                            <h4>Новая коллекция</h4>
                            <p>Написано что-то менее важное</p>
                            <a href="" className="link-btn">Купить сейчас!</a>
                        </div>
                    </div>
                </Slider>
        </div>
    )
}