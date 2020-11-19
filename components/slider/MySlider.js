import Slider from 'react-slick'
import css from './mySlider.module.scss'

export default function MySlider(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <div>
            <div className={css.slider}>
                <Slider {...settings} >

                    <div className={css.img}>
                        <img src="/images/slider/1.jpg" alt=""/>
                    </div>
                    <div className={css.img}>
                        <img src="/images/slider/2.jpg" alt=""/>
                    </div>
                    <div className={css.img}>
                        <img src="/images/slider/3.jpg" alt=""/>
                        <div className={css.description}>
                            Чито-то написано
                        </div>
                    </div>
                    <div className={css.img}>
                        <img src="/images/slider/4.jpg" alt=""/>
                    </div>
                </Slider>
            </div>

        </div>
    )
}