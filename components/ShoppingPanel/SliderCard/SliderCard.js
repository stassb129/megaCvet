import css from './slidercard.module.scss'

export default function SliderCard() {
    return (
        <div className={css.card}>
            <div className={css.cardBg} style={{background: "url(\"/images/cards/1.jpg\")"}}></div>
            <div className={css.cardDescription}>
                <p>Что-то интересное</p>
                <h4>Цветы</h4>
                <a href="" className={css.cardBtn}>Купить сейчас!</a>
            </div>
        </div>
    )
}
