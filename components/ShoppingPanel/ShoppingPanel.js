import MySlider from "../slider/MySlider";
import css from './shoppingPanel.module.scss'
import Sale from "./Sale/Sale";
import Card from "./Card/Card";

export default function ShoppingPanel() {
    return (
        <section>
            <div className={css.sliderSection}>
                <MySlider/>
                <Sale/>
            </div>

            <div className={css.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>


        </section>
    )
}