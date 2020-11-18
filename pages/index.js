import css from '../styles/Home.module.css'
import MyHead from "../components/MyHead";
import Header from "../components/global/header/Header";

export default function Home() {
    return (
        <div className={css.container}>
            <MyHead/>

            <Header/>


        </div>
    )
}
