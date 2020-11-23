import css from "./sale.module.scss";

export default function Sale() {
    return (
        <div className={css.sale}>
            <div className={css.saleBg}></div>
            <div className={css.saleDescription}>
                <h4>50% Скидка</h4>
                <a href="">Купить сейчас!</a>
            </div>
        </div>
    )
}
