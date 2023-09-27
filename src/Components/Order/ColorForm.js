// Assets
import Sunset from "../../Assets/Sunset.png";
import Ash_grey from "../../Assets/Ash_grey.png";
import Melon from "../../Assets/Melon.png";
import Timberwolf from "../../Assets/Timberwolf.png"

export default function ColorForm({formData, setFormData}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center">

                        <div className="d-flex flex-column align-items-center band-option" style={{width: '100%', height: '100%', marginBottom: '1em'}}>
                            <img fluid id="band" src={Sunset}></img>
                            <h3 className="text-center">Sunset</h3>
                        </div>
                        <input className="form-check-input colorSelected" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                        value="Sunset" checked={formData.braceletColor === "Sunset"} onChange={(event) => setFormData({...formData, braceletColor: event.target.value})}></input>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center band-option" style={{width: '100%', height: '100%', marginBottom: '1em'}}>
                            <img fluid id="band" src={Ash_grey}></img>
                            <h3 className="text-center">Ash Grey</h3>
                        </div>
                        <input className="form-check-input colorSelected" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        value="Ash Grey" checked={formData.braceletColor === "Ash Grey"} onChange={(event) => setFormData({...formData, braceletColor: event.target.value})}></input>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center band-option" style={{width: '100%', height: '100%', marginBottom: '1em'}}>
                            <img fluid id="band" src={Melon}></img>
                            <h3 className="text-center">Melon</h3>
                        </div>
                        <input className="form-check-input colorSelected" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                        value="Melon" checked={formData.braceletColor === "Melon"} onChange={(event) => setFormData({...formData, braceletColor: event.target.value})}></input>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center band-option" style={{width: '100%', height: '100%', marginBottom: '1em'}}>
                            <img fluid id="band" src={Timberwolf}></img>
                            <h3 className="text-center">Timberwolf</h3>
                        </div>
                        <input className="form-check-input colorSelected" type="radio" name="flexRadioDefault" id="flexRadioDefault4" 
                        value="Timberwolf" checked={formData.braceletColor === "Timberwolf"} onChange={(event) => setFormData({...formData, braceletColor: event.target.value})}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}