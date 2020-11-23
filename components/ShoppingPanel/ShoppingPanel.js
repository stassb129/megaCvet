import MySlider from "../slider/MySlider";
import css from './shoppingPanel.module.scss'
import Sale from "./Sale/Sale";
export default function ShoppingPanel() {
    return (
        <section>
            <div className={css.sliderSection}>
                <MySlider/>
                <Sale/>
            </div>



        </section>
    )
}