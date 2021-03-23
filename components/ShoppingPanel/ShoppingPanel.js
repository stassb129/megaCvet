import MySlider from "../Slider/MySlider";
import css from './shoppingPanel.module.scss'
import Sale from "./Sale/Sale";
import SliderCard from "./SliderCard/SliderCard";

export default function ShoppingPanel() {
    return (
        <section>
            <div className={css.sliderSection}>
                <MySlider/>
                <Sale/>
            </div>

            <div className={css.cards}>
                <SliderCard/>
                <SliderCard/>
                <SliderCard/>
                <SliderCard/>
            </div>


        </section>
    )
}