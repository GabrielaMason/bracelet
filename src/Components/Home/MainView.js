// Assets
import all_bands from "../../Assets/all_bands.png"
// Components
import Advantages from "./Advantages"

export default function MainView({view, changeView}) {
    return (<div>
        <div className="container-fluid banner d-flex">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img fluid id="all_bands" src={all_bands}></img>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center m-auto">
                    <h1>Connect, Inform, Empower: Your Bracelet, Your Lifeline.</h1>
                    <button className="btn_order" onClick={changeView}>Order Mine</button>
                </div>
            </div>
        </div>
        <Advantages />
    </div>)
}