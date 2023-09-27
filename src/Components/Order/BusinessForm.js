export default function BusinessForm({formData, setFormData}) {

    return (
        <div className="businessContainer">
            <select class="form-select" value={formData.businessInfo} onChange={(event) => setFormData({...formData, businessInfo: event.target.value})} aria-label="Default select example" style={{width: '200px', margin: 'auto'}}>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
            </select>
            {formData.businessInfo != 1 ? <div></div> :
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="my-3 d-flex flex-column align-items-center">
                            <label for="input_group1" className="form-label">Job Title</label>
                            <input type="text" className="form-control business-input" id="input_group1" placeholder="Text here"
                            value={formData.jobTtitle} onChange={(event) => setFormData({...formData, jobTitle: event.target.value})}></input>
                        </div>
                        <div className="my-3 d-flex flex-column align-items-center">
                            <label for="input_group2" className="form-label">Company Name</label>
                            <input type="text" className="form-control business-input" id="input_group2" placeholder="Text here"
                            value={formData.companyName} onChange={(event) => setFormData({...formData, companyName: event.target.value})}></input>
                        </div>
                        <div className="my-3 d-flex flex-column align-items-center">
                            <label for="input_group3" className="form-label">Company Address</label>
                            <input type="text" className="form-control business-input" id="input_group3" placeholder="Text here"
                            value={formData.companyAddress} onChange={(event) => setFormData({...formData, companyAddress: event.target.value})}></input>
                        </div>
                        <div className="my-3 d-flex flex-column align-items-center">
                            <label for="input_group4" className="form-label">Email</label>
                            <input type="email" className="form-control business-input" id="input_group4" placeholder="Text here"
                            value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})}></input>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="my-3 d-flex flex-column align-items-center">
                            <label for="input_group5" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control business-input" id="input_group5" placeholder="10 digits"
                            value={formData.phoneNumber} onChange={(event) => setFormData({...formData, phoneNumber: event.target.value})}></input>
                        </div>
                        <div className="my-3 d-flex flex-column align-items-center">
                            <label for="input_group6" className="form-label">Company Number</label>
                            <input type="tel" className="form-control business-input" id="input_group6" placeholder="10 digits"
                            value={formData.companyNumber} onChange={(event) => setFormData({...formData, companyNumber: event.target.value})}></input>
                        </div>
                    </div>
                </div>
            </div> 
            }
        </div>
    )
}