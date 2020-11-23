import css from '../styles/Home.module.css'
import MyHead from "../components/MyHead";
import Header from "../components/global/header/Header";
import ShoppingPanel from "../components/ShoppingPanel/ShoppingPanel";

export default function Home() {
    return (
        <div>
            <MyHead/>

            <Header/>

            <ShoppingPanel />


        </div>
    )
}
