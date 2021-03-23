import css from '../styles/Home.module.css'
import MyHead from "../components/MyHead";
import Header from "../components/global/header/Header";
import ShoppingPanel from "../components/ShoppingPanel/ShoppingPanel";
import Tabs from "../components/Tabs/Tabs";
import IndexGrid from "../components/IndexGrid/IndexGrid";
import Card from "../components/Card/Card";

export default function Home() {
    return (
        <div>
            <MyHead/>

            <Header/>

            <ShoppingPanel/>

            <Tabs/>

            <IndexGrid>
                <Card/>
            </IndexGrid>


        </div>
    )
}
