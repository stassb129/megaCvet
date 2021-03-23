import css from './tabs.module.scss'
import {useState} from "react";

// function SliderCard(props) {
//     const content = props.tab
//     if (content === 'first') {
//         return (
//             <div>
//                 Тут выводятся популярные...
//             </div>
//         )
//     } else if (content === 'second') {
//         return (
//             <div>
//                 тута выводятся новые поступления...
//             </div>
//         )
//     }
// }

export default function Tabs(props) {
    const [tab, setTab] = useState('first')

    return (
        <div>
            <div className={css.tabs}>
                <a className={css.tab} onClick={()=>setTab('first')}>Популярные</a>
                <a className={css.tab} onClick={()=>setTab('second')}>Новые поступления</a>
                <a className={css.tab}>Бестселлеры</a>
                <a className={css.tab}>Специальное</a>
            </div>
        </div>
    )
}





