export default function MedicalForm({formData, setFormData}) {
    return (
        <div className="medical_container">
            <div className="my-3">
                <label for="inputGroup1" className="form-label">What’s your blood type?</label>
                <select id="inputGroup1" className="form-select small-input" onChange={(event) => setFormData({...formData, bloodType: event.target.value})}>
                    <option selected>Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>       
            </div>
            <div className="my-3">
                <label for="inputGroup2" className="form-label">Emergency Phone Number</label>
                <input type="tel" className="form-control small-input" id="inputGroup2" placeholder="10 digits" 
                    value={formData.emergencyNumber} onChange={(event) => setFormData({...formData, emergencyNumber: event.target.value})}>
                </input>
            </div>
            <div className="my-3">
                <label for="inputGroup3" className="form-label">Allergies</label>
                <input type="text" className="form-control text-area" id="inputGroup3" placeholder="Text here" 
                value={formData.allergies} onChange={(event) => setFormData({...formData, allergies: event.target.value})}></input>
            </div>
            <div className="my-3">
                <label for="inputGroup4" className="form-label">Medical Affiliation (optional)</label>
                <input type="text" className="form-control text-area" id="inputGroup4" placeholder="Text here" 
                value={formData.medicalAffilliation} onChange={(event) => setFormData({...formData, medicalAffilliation: event.target.value})}></input>
            </div>
        </div>
    )
}