//CSS
import "./Home.css"
// Components
import MainView from "./MainView"
import OrderForm from "../Order/OrderForm"
import { useState } from "react"

export default function Home(){
    const [view, setView] = useState(1)

    function handleViewChange(){
        setView(2)
    }

    return (<>
        {view === 1 ? <MainView view={view} changeView={handleViewChange}/> : <OrderForm />}
        {console.log("estado ", view)}
    </>)
}