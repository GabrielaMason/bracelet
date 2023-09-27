import "./Scan.css"
import {ReactComponent as Profile} from '../../Assets/profile.svg';

export default function Scan(){
    return(
        <div className="main_container d-flex flex-column align-items-center mt-5">
            <div>
                <div className="circleProfile">
                    <Profile className='scanProfile'/>
                </div>
                <h2 className="my-4 name">Alan Seymour Raimond</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Blood Type</p>
                            <p>O+</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Medical Affiliation</p>
                            <p>IMSS 23843297535</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Emergency Number</p>
                            <p>5532881234</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="infoContainer">
                            <p>Allergies</p>
                            <p>Peanuts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}