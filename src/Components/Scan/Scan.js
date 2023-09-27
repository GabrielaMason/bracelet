import "./Scan.css"
import {ReactComponent as Profile} from '../../Assets/profile.svg';

export default function Scan(){
    return(
        <div className="main_container d-flex flex-column align-items-center mt-5">
            <div>
                <div className="circleProfile">
                    <Profile className='scanProfile'/>
                </div>
                <h2 className="my-4 name">Gabriela Velázquez Mason</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Blood Type</p>
                            <p>A+</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Medical Affiliation</p>
                            <p>PEMEX 14600738</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Emergency Number</p>
                            <p>+52 5544450598</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Allergies</p>
                            <p>Mosquito bite</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}