import css from './card.module.scss'

export default function Card() {
    return (
        <div className={css.card}>
            <div className={css.cardBg}></div>
            <div className={css.cardDescription}>
                <p>Что-то интересное</p>
                <h4>Цветы</h4>
            </div>
        </div>
    )
}